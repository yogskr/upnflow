import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navigationMenu = [
    {
      id: "blog",
      title: "BLOG",
      path: "/",
    },
    {
      id: "services",
      title: "SERVICES",
      path: "/services",
    },
    {
      id: "about",
      title: "ABOUT",
      path: "/about",
    },
    {
      id: "contact",
      title: "CONTACT",
      path: "/contact",
    },
  ];

  return (
    <nav className={styles.container}>
      <h1 className={styles.logo}>
        <Link href="/">UPNFLOW</Link>
      </h1>
      <div className={styles.navLinks}>
        {navigationMenu.map((link) => {
          return (
            <Link key={`${link.id}`} href={`${link.path}`}>
              {link.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
