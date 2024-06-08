import Link from "next/link";
import styles from "./Navbar.module.css";
import { metadata } from "@/app/layout";

export default function Navbar() {
  const navigationMenu = [
    {
      id: "about",
      title: "about",
      path: "/about",
    },
    {
      id: "contact",
      title: "contact",
      path: "/contact",
    },
    {
      id: "services",
      title: "services",
      path: "/services",
    },
  ];

  return (
    <nav className={styles.container}>
      <article>
        <Link href="/">
          <h1 className={styles.logo}>{metadata.title}</h1>
        </Link>
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
        <form action="#" className={styles.form}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your email address"
            className={styles.emailInput}
          />
          <input type="button" value="subscribe" className={styles.emailBtn} />
        </form>
      </div>
    </nav>
  );
}
