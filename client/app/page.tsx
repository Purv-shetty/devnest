import Hero from "./components/hero";


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

