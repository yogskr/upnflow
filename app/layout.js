import { Noto_Sans } from "next/font/google" 
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "upnflow",
  description: "Learn & Grow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
