import Link from 'next/link';
import styles from './Navbar.module.css';

const metadata = {
  title: 'upnflow',
  description: 'learn & grow',
};

export default function Navbar() {
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
    <nav className={styles.container}>
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
        <form action="/search" method="get" className={styles.form}>
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
    </nav>
  );
}
