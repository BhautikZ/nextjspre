import Image from "next/image";
import Hero from "./signin/components/main/Hero";
import Encryption from "./signin/components/main/Encryption";
import Projects from "./signin/components/main/Project";
import CustomHead from "./signin/components/customhead";

export default function Home() {
  const title = "Home Page Title";
  const description = "Description of the home page.";
  const imageUrl = "https://www.pexels.com/search/beautiful/";
  return (
    <>
      <CustomHead title={title} description={description} imageUrl={imageUrl} />
      <main className="h-full w-full">
        <div className="flex flex-col  gap-20">
          <Hero />
          <Encryption />
          <Projects />
        </div>
      </main>
    </>
  );
}
