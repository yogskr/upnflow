/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <>
      <div>
        <h1 className={styles.aboutTitle}>about upnflow</h1>
        <h2 className={styles.aboutSubTitle}>Behind the scene</h2>
      </div>
      <article className={styles.aboutContainer}>
        <figure className={styles.photoContainer}>
          <Image
            src={'/yogs-edited.png'}
            alt="profile picture"
            width={300}
            height={559}
            priority={true}
          />
        </figure>
        <section className={styles.aboutContent}>
          <div>
            <h3 className={styles.aboutUs}>Hi, there!</h3>
            <p className={styles.aboutParagraph}>
              I'm Yoga, the author and creator of upnflow. I'm a experienced
              content writer who dabbles in web development. I build this
              website as a way to share my passion for writing and technology.
            </p>
            <br />
            <p>I have a knack for tweaking Linux to make it more</p>
          </div>
          <div>
            <h3 className={styles.ourMission}>What to expect</h3>
            <p className={styles.aboutParagraph}>
              I post content about all things related to internet technology.
              You will find tutorials, reviews, and more. Whether you're looking
              for a quick refresher, new ideas, or just want to stay up-to-date
              on the latest trends, I've got you covered.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
