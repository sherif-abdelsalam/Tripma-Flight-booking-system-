import Footer from "@/components/Footer/footer";
import "./globals.css";
import Header from "@/components/Header/header";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["200", "400", "300", "400", "500", "600", "700", "800", "900"], // Specify weights you need
  style: ["normal", "italic"], // Optional, specify styles
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunitoSans.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
