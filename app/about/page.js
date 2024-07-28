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
            <h3 className={styles.aboutUs}>Hi, I'm Yoga!</h3>
            <p className={styles.aboutParagraph}>
              The author and creator of upnflow. I'm an experienced content
              writer who dabbles as a front-end web developer. I build this
              website as a way to share my passion for writing and web
              development.
            </p>
            <p className={styles.aboutParagraph}>
              I have a knack for exploring and tweaking my operating system,
              Linux Mint, to make it more me. I also like making music and
              gaming on my trusty Nintendo Switch.
            </p>
          </div>
          <div>
            <h3 className={styles.ourMission}>What posts do I write?</h3>
            <p className={styles.aboutParagraph}>
              I write about all things related to internet technology. You'll
              find tutorials, reviews, and more. Whether you're looking for a
              quick refresher, new ideas, or just want to stay up-to-date on the
              latest trends, I've got you covered.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
