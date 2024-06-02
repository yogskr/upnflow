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
    <header className="container">
      <Navbar />
    </header>
  );

  let footer = <footer></footer>;

  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        {header}
        {children}
      </body>
    </html>
  );
}
