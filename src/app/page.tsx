import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Rooms from "@/components/Rooms";
import Experience from "@/components/Experience";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Enquiry from "@/components/Enquiry";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Rooms />
      <Experience />
      <Amenities />
      <Gallery />
      <Location />
      <Enquiry />
    </>
  );
}
