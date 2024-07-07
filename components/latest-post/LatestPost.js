import Link from 'next/link';
import styles from './LatestPost.module.css';
import Image from 'next/image';

import PostInfo from '../post-info/PostInfo';

export default function LatestPost({ post }) {
  return (
    <section className={styles.postContainer}>
      <Image
        src={post.meta.image}
        alt={post.meta.title}
        width={600}
        height={400}
        className={styles.postImage}
      />
      <article className={styles.postDesc}>
        <h2 className={styles.postTitle}>{post.meta.title}</h2>
        <p>{post.meta.description}</p>
        <PostInfo
          author={post.meta.author}
          date={post.meta.date}
          showReadingTime={true}
          readingTime={post.readingTime}
        />
      </article>
    </section>
  );
}
