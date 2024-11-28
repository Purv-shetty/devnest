import CallToAction from "@/components/Call-to-action";
import CollaborationDemo from "@/components/Collaboration-Demo";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <CollaborationDemo />
      <Features />
      <Testimonials />
      <CallToAction />
    </main>
  )
}

