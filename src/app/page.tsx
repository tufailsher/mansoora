import Image from "next/image";

import NavBar from "@/components/landing-page/nav-bar";
import AppHeader from "@/sections/landing-page/header";
import ServicesSection from "@/sections/landing-page/services-section";
import { AboutUsSection } from "@/sections/landing-page/about-us-section";
import ProductsSection from "@/sections/landing-page/products-section";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar />
        <AppHeader />
        <ServicesSection />
        <AboutUsSection />
        <ProductsSection />



      </div>
    </main>
  );
}
