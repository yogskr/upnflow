import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';

import styles from './page.module.css';

// Get all blog posts
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('blogs'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

// Get blog post
function getPost({ slug }) {
  const markdownFile = fs.readFileSync(
    path.join('blogs', slug + '.mdx'),
    'utf8'
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

// Render blog post
export default function Post({ params }) {
  const props = getPost(params);

  const components = {};

  return (
    <Suspense fallback={<p>Loading blog post...</p>}>
      <article className={styles.mdxContent}>
        <MDXRemote source={props.content} components={components} />
      </article>
    </Suspense>
  );
}

// Get blog post metadata
export async function generateMetadata({ params }) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}
