import Image from "next/image";

import NavBar from "@/components/landing-page/nav-bar";
import AppHeader from "@/sections/landing-page/header";
import ServicesSection from "@/sections/landing-page/services-section";
import { AboutUsSection } from "@/sections/landing-page/about-us-section";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar />
        <AppHeader />
        <ServicesSection />
        <AboutUsSection />



      </div>
    </main>
  );
}
