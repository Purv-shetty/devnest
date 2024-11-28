import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-700 to-indigo-600">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Ready to Revolutionize Your Coding Workflow?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Join thousands of developers who are already experiencing the future of collaborative coding. Start your journey today!
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-white text-purple-700 hover:bg-gray-100">
              Get Started for Free
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

