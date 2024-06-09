import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import styles from './page.module.css';
import PostCard from '../components/post-card/PostCard';

export default function Home() {
  // Set blogs directory
  const blogDirs = 'blogs';
  // Find all files in the blog directory
  const files = fs.readdirSync(path.join(blogDirs));
  // For each blog found
  const blogs = files.map((filename) => {
    // Read the content of that blog
    const fileContent = fs.readFileSync(path.join(blogDirs, filename), 'utf8');
    // Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent);
    // Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return (
    <main>
      <div className={styles.container}>
        {blogs.map((post, postIndex) => {
          return <PostCard post={post} key={postIndex} />;
        })}
      </div>
    </main>
  );
}
