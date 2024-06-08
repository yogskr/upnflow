import Link from "next/link";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {
  return (
    <section className={styles.card}>
      <h2>{post.title}</h2>
      <article className={styles.meta}>
        <span className={styles.authorContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="22px"
            width="22px"
            fill="currentColor"
          >
            <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
          </svg>
          <Link href={"/about"} className={styles.author}>
            {post.author.name}
          </Link>
        </span>
        <span className={styles.dateContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height="22px"
            width="22px"
            fill="currentColor"
          >
            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
          </svg>
          <p className={styles.date}>{post.date}</p>
        </span>
      </article>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <span className={styles.readMore}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="22px"
          width="22px"
          fill="currentColor"
        >
          <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z" />
        </svg>
        <Link href={""}>Read More</Link>
      </span>
    </section>
  );
}
