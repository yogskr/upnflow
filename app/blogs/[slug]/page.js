import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Page transition
import BlogTransition from '../../../components/blog-pagination-transition/BlogTransition';

import styles from './page.module.css';
import { estimateReadingTime } from '../../../utils/estimateReadingTime';
import PostInfo from '../../../components/post-info/PostInfo';

const blogsDirectory = path.join('blogs');

// Get all blog posts
export async function generateStaticParams() {
  const fileNames = fs.readdirSync(blogsDirectory);

  const paths = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const markdownFile = fs.readFileSync(
        path.join(blogsDirectory, fileName),
        'utf8'
      );

      const { data: frontMatter } = matter(markdownFile);

      return {
        slug: fileName.replace('.mdx', ''),
        date: frontMatter.date,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return paths;
}

// Get blog post by slug
function getPostBySlug(slug) {
  const markdownFile = fs.readFileSync(
    path.join(blogsDirectory, `${slug}.mdx`),
    'utf8'
  );

  const { data: frontMatter, content } = matter(markdownFile);

  const readingTime = estimateReadingTime(content);

  return {
    frontMatter,
    slug,
    content,
    readingTime,
  };
}

// Render blog post
export default function Post({ params }) {
  const { slug } = params;
  const props = getPostBySlug(slug);

  const components = {};

  const blogs = fs
    .readdirSync(blogsDirectory)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const markdownFile = fs.readFileSync(
        path.join(blogsDirectory, fileName),
        'utf8'
      );

      const { data: frontMatter } = matter(markdownFile);

      return {
        slug: fileName.replace('.mdx', ''),
        date: frontMatter.date,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const index = blogs.findIndex((blog) => blog.slug === slug);

  const nextBlog = index > 0 ? blogs[index - 1] : null;
  const previousBlog = index < blogs.length - 1 ? blogs[index + 1] : null;

  return (
    <BlogTransition>
      <Suspense fallback={<p>Loading blog post...</p>}>
        <article className={styles.mdxContent}>
          {/* Blog content */}
          <div className={styles.header}>
            <h1 className={styles.title}>{props.frontMatter.title}</h1>
            <PostInfo
              author={props.frontMatter.author}
              date={props.frontMatter.date}
              readingTime={props.readingTime}
              showReadingTime={true}
            />
          </div>
          <MDXRemote source={props.content} components={components} />

          {/* Pagination */}
          <nav className={styles.navigation}>
            {previousBlog ? (
              <span className={styles.pagination}>
                <Image
                  src={'/post-previous.svg'}
                  alt="Previous icon"
                  width={22}
                  height={22}
                />
                <Link href={`/blogs/${previousBlog.slug}`}>Previous Post</Link>
              </span>
            ) : null}
            <span className={styles.pagination}>
              <Image
                src={'/post-home.svg'}
                alt="Home icon"
                width={22}
                height={22}
              />
              <Link href={'/'}>Home</Link>
            </span>
            {nextBlog ? (
              <span className={styles.pagination}>
                <Link href={`/blogs/${nextBlog.slug}`}>Next Post</Link>
                <Image
                  src={'/post-next.svg'}
                  alt="Next icon"
                  width={22}
                  height={22}
                />
              </span>
            ) : null}
          </nav>
        </article>
      </Suspense>
    </BlogTransition>
  );
}

// Get blog post metadata
export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = getPostBySlug(slug);

  return {
    title: `upnflow | ${blog.frontMatter.title}`,
    description: blog.frontMatter.description,
  };
}
