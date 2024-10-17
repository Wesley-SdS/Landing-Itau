
import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from './../components/SectionServices';
import SectionResolve from './../components/SectionResolve';
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionResolve />
      <SectionServices />
      <Footer />
    </>
 
  );
}
