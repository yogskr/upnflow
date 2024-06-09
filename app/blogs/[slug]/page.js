import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { MDXRemote } from 'next-mdx-remote/rsc';
import Button from '../../../components/Button';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('blogs'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

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

export default function Post({ params }) {
  const props = getPost(params);

  const components = {
    Button,
  };

  return (
    <article>
      <MDXRemote source={props.content} components={components} />
    </article>
  );
}

export async function generateMetadata({ params }) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}
