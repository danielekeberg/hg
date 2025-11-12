import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Section from "@/app/components/Section";
import Products from "@/app/components/Products";
import Footer from "@/app/components/Footer";
import ContactCart from "@/app/components/ContactCard";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="flex flex-col gap-20">
        <Section />
        <Products />
      </div>
      <ContactCart />
      <Footer />
    </div>
  );
}
