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
              I'm Yoga, the one-man team behind upnflow. I bring a unique blend
              of skills to this blog site, being both a content writer and a
              front-end web developer. This website is a testament to my passion
              for writing and technology.
            </p>
            <p className={styles.aboutParagraphTwo}>
              I find solace in personalizing my operating system, Linux Mint, to
              reflect my aesthetic preferences. Music is another part of me, and
              I enjoy exploring various genres, from the soothing melodies of
              jazz and LoFi to the energetic beats of progressive rock and
              blues.
            </p>
          </div>
          <div>
            <h3 className={styles.ourMission}>What to expect</h3>
            <p className={styles.aboutParagraph}>
              I post content about everything related to Internet technology.
              You will find tutorials, reviews, and more. Whether you're looking
              for a quick refresher, new ideas, or want to stay up-to-date on
              the latest trends, I've got you covered.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
