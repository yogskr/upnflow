'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';

const metadata = {
  title: 'upnflow',
  description: 'learn & grow',
};

const variants = {
  initial: {
    x: -25,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
  },
};

export default function Navbar() {
  const router = useRouter();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = event.target.query.value;
    router.push(`/search?query=${query}`);

    // Clear the input field after submission
    event.target.query.value = '';
  };

  const navigationMenu = [
    {
      id: 'about',
      title: 'about',
      path: '/about',
    },
    {
      id: 'services',
      title: 'services',
      path: '/services',
    },
    {
      id: 'contact',
      title: 'contact',
      path: '/contact',
    },
  ];

  return (
    <motion.nav
      variants={variants}
      initial="initial"
      animate={'enter'}
      transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.5 }}
      className={styles.container}>
      <article>
        <h1 className={styles.logo}>
          <Link href="/">{metadata.title}</Link>
        </h1>
        <p className={styles.tagLine}>{metadata.description}</p>
      </article>
      <div>
        <div className={styles.navLinks}>
          {navigationMenu.map((link) => {
            return (
              <Link key={`${link.id}`} href={`${link.path}`}>
                {link.title}
              </Link>
            );
          })}
        </div>
        <form onSubmit={handleSearchSubmit} className={styles.form}>
          <input
            type="text"
            name="query"
            id="text"
            placeholder="search articles..."
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchBtn}>
            search
          </button>
        </form>
      </div>
    </motion.nav>
  );
}
