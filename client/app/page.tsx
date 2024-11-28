import Hero from './components/hero'
import CollaborationDemo from './components/collaboration-demo'
import Features from './components/features'
import Testimonials from './components/testimonials'
import CallToAction from './components/call-to-action'

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

