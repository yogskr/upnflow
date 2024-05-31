import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navigationMenu = [
    {
      id: "blog",
      title: "Blog",
      path: "/",
    },
    {
      id: "services",
      title: "Services",
      path: "/services",
    },
    {
      id: "about",
      title: "About",
      path: "/about",
    },
    {
      id: "contact",
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className={styles.container}>
      <h1 className={styles.logo}>upnflow</h1>
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
