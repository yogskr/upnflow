import Link from 'next/link';

import styles from './PostInfo.module.css';

export default function PostInfo({
  author,
  date,
  readingTime,
  showReadingTime = true,
}) {
  // Render author, date, reading time
  return (
    <article className={styles.meta}>
      <span className={styles.postInfoContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="22px"
          width="22px"
          fill="currentColor">
          <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
        </svg>
        <p className={styles.author}>
          <Link href={'/about'}>{author}</Link>
        </p>
      </span>
      <span className={styles.postInfoContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="22px"
          width="22px"
          fill="currentColor">
          <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
        </svg>
        <p className={styles.date}>{date}</p>
      </span>
      {showReadingTime && (
        <span className={styles.postInfoContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="22px"
            width="22px"
            fill="currentColor">
            <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>
          <p className={styles.readingTime}>
            {readingTime} min{readingTime > 1 ? 's' : ''}
          </p>
        </span>
      )}
    </article>
  );
}
