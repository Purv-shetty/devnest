import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Download, Globe, Zap, Users, MessageSquare, Paintbrush, Lightbulb, Type, Palette } from 'lucide-react'

const features = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Real-time Collaboration",
    description: "Edit code across multiple files simultaneously with your team."
  },
  {
    icon: <Download className="h-8 w-8" />,
    title: "File Management",
    description: "Open, edit, save, and delete files within your collaboration session."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Language Support",
    description: "Comprehensive support for various programming languages."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Code Execution",
    description: "Run your code directly in the collaboration environment."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "User Presence",
    description: "See who's online and working on what in real-time."
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Group Chat",
    description: "Communicate with your team while coding."
  },
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: "Collaborative Drawing",
    description: "Sketch and draw together to visualize ideas."
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Smart Suggestions",
    description: "Get intelligent code suggestions as you type."
  },
  {
    icon: <Type className="h-8 w-8" />,
    title: "Customizable Interface",
    description: "Adjust font size and family to your preference."
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Multiple Themes",
    description: "Choose from various themes for a personalized experience."
  },
]

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Powerful Collaboration Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-lg border-none bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="mr-4 bg-gradient-to-br from-purple-500 to-indigo-500 p-3 rounded-2xl text-white">
                    {feature.icon}
                  </div>
                  <span className="text-xl">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

