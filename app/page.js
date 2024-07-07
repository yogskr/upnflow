import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import styles from './page.module.css';
import PostCard from '../components/post-card/PostCard';
import LatestPost from '../components/latest-post/LatestPost';
import { estimateReadingTime } from '../utils/estimateReadingTime';

export default function Home() {
  // Set blogs directory
  const blogDirs = 'blogs';
  // Find all files in the blog directory
  const files = fs.readdirSync(path.join(blogDirs));
  // For each blog found
  const blogs = files
    .map((filename) => {
      // Read the content of that blog
      const fileContent = fs.readFileSync(
        path.join(blogDirs, filename),
        'utf8'
      );
      // Extract the metadata from the blog's content
      const { data: frontMatter, content } = matter(fileContent);
      // Calculate reading time
      const readingTime = estimateReadingTime(content);
      // Return the metadata and page slug
      return {
        meta: frontMatter,
        slug: filename.replace('.mdx', ''),
        readingTime,
      };
    })
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

  return (
    <main>
      <LatestPost post={blogs[0]} />
      <div className={styles.container}>
        {blogs.slice(1).map((post, postIndex) => {
          return <PostCard post={post} key={postIndex} />;
        })}
      </div>
    </main>
  );
}
