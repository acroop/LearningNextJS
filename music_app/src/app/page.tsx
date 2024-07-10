import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OurInstructors from "@/components/MeetOurInstructors";
import TestimonialCards from "@/components/TestimonialCards";
import Webinars from "@/components/Webinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <Webinars/>
    <OurInstructors/>
    <Footer />
    </main>
  );
}
