import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import ExperinceEducation from "@/components/Experince&Education";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Others from "@/components/Others";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutMe />
      <ExperinceEducation />
      <Gallery />
      <Others />
      <ContactMe />
      <Footer />
    </main>
  )
}
