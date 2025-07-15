import { Features } from "./components/Features";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import { Testimonials } from "./components/Testimonials";

export const dynamic = "force-dynamic";

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
