import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Discography from "@/components/Discography";
import Videos from "@/components/Videos";
import TourDates from "@/components/TourDates";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark text-text-light flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Discography />
      <Videos />
      <TourDates />
      <Footer />
    </main>
  );
}
