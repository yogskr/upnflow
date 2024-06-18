/* eslint-disable react/no-unescaped-entities */
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <>
      <h2 className={styles.aboutTitle}>Who we are</h2>
      <article className={styles.aboutContainer}>
        <h3 className={styles.aboutUs}>About us</h3>
        <p className={styles.aboutParagraph}>
          upnflow is a blog site created and developed by Yoga Krisanta, an SEO
          content writer who dabbles in the world of web development. His
          passion is to share his knowledge and insights with others, hence the
          tagline "Learn and Grow".
        </p>
        <h3 className={styles.ourMission}>Our mission</h3>
        <p className={styles.aboutParagraph}>
          We provide you with a wide range of resources on the internet
          technolgy, including web development, artificial intelligence, and
          operating systems. You will find tutorials, reviews, and more. Whether
          you're looking for a quick refresher, new ideas, or just want to stay
          up-to-date on the latest trends, we've got you covered.
        </p>
      </article>
    </>
  );
}
