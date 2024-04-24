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
    title: "Open Graph Title  33333",
    description: "Open Graph Description",
    images: [
      {
        url: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        width: 800,
        height: 600,
        alt: "Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = "Home Page Title";
  const description = "Description of the home page.";
  const imageUrl =
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
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
