import CollaborationDemo from "@/components/Collaboration-Demo";
import Hero from "@/components/Hero";

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

