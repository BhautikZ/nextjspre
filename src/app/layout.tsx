import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./signin/components/main/StartBackground";
import Navbar from "./signin/components/main/Navbar";
import Footer from "./signin/components/main/Footer";
import CustomHead from "./signin/components/customhead";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page Title",
  description: "Description of the home page.",
  openGraph: {
    title: "Open Graph Title",
    description: "Open Graph Description",
    images: [
      {
        url: "/facebook.svg",
        width: 800,
        height: 600,
        alt: "Open Graph Image",
      },
      // Add more images as needed
    ],
    // Add more OG properties as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = "Home Page Title";
  const description = "Description of the home page.";
  const imageUrl = "https://www.pexels.com/search/beautiful/";
  return (
    <html lang="en">
      <CustomHead title={title} description={description} imageUrl={imageUrl} />
      <body className={`${inter.className} bg-[#030014] overflow-x-hidden overflow-y-scroll`}>
        {/* <Navbar />
        <StarsCanvas /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}