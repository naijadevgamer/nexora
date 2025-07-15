import { Features } from "./components/Features";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Newest />
      <Testimonials />
    </>
  );
}
