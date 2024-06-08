import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "upnflow",
  description: "learn & grow",
};

export default function RootLayout({ children }) {
  let header = (
    <header className="headerContainer">
      <Navbar />
    </header>
  );

  let footer = (
    <footer>
      <p>©2024 upnflow</p>
    </footer>
  );

  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        {header}
        <section className="mainContent">
          {children}
          {footer}
        </section>
      </body>
    </html>
  );
}
