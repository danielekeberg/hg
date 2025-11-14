import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Products from "@/app/components/Products";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <Products />
      </div>
      <Footer />
    </div>
  );
}
