import { Noto_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '../components/navbar/Navbar';
import SocialAccount from '../components/social/SocialAccount';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  let header = (
    <header className="headerContainer">
      <Navbar />
    </header>
  );

  let footer = (
    <footer>
      <p>©{new Date().getFullYear()} upnflow</p>
      <SocialAccount />
    </footer>
  );

  return (
    <html lang="en">
      <body className={notoSans.className}>
        {header}
        <section className="mainContent">
          {children}
          {footer}
        </section>
      </body>
    </html>
  );
}
