import Link from 'next/link';
import styles from './PostCard.module.css';
import PostInfo from '../post-info/PostInfo';

export default function PostCard({ post }) {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>{post.meta.title}</h2>
      <PostInfo
        author={post.meta.author}
        date={post.meta.date}
        showReadingTime={false}
      />
      <p className={styles.description}>{post.meta.description}</p>
      <span className={styles.readMore}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="22px"
          width="22px"
          fill="currentColor">
          <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z" />
        </svg>
        <Link href={`/blogs/${post.slug}`} className={styles.readMore}>
          Read More
        </Link>
      </span>
    </section>
  );
}
