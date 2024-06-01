import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navigationMenu = [
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
    {
      id: "services",
      title: "SERVICES",
      path: "/services",
    },
  ];

  return (
    <nav className={styles.container}>
      <h1 className={styles.logo}>
        <Link href="/">UPNFLOW</Link>
      </h1>
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
        <form action="#" className={styles.separator}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            className={styles.emailInput}
          />
          <input type="button" value="Subscribe" className={styles.emailBtn} />
        </form>
      </div>
    </nav>
  );
}
