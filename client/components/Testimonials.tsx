import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Senior Developer",
    content: "This platform has revolutionized our team's collaboration. Real-time coding and instant feedback have significantly boosted our productivity.",
    avatar: "AJ"
  },
  {
    name: "Bob Smith",
    role: "Tech Lead",
    content: "The ability to execute code within the collaboration environment has been a game-changer for our remote team. It's like having a shared development environment.",
    avatar: "BS"
  },
  {
    name: "Carol Davis",
    role: "Full Stack Engineer",
    content: "I love the collaborative drawing feature. It's perfect for quick diagrams and explaining complex concepts visually during our coding sessions.",
    avatar: "CD"
  }
]

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all hover:shadow-lg border-none bg-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`/placeholder-avatar-${index + 1}.jpg`} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

