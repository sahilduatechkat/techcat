import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Tech Katalyst", 
  description: "Tech Katalyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:image" content="/favicon.ico" />
      <body
        className={`${poppins.className} antialiased`}
      >
        <ToastContainer />
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
