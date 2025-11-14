import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Section from "@/app/components/Section";
import Vendors from "@/app/components/Vendors";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import ContactCard from "@/app/components/ContactCard";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Section />
      <Vendors />
      <ContactCard />
      <Footer />
    </div>
  );
}
