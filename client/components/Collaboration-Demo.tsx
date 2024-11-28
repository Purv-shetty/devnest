"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const users = [
  { name: "Alice", avatar: "A", color: "bg-red-500" },
  { name: "Bob", avatar: "B", color: "bg-blue-500" },
  { name: "Carol", avatar: "C", color: "bg-green-500" },
]

const initialCode = `function calculateSum(a, b) {
  return a + b;
}

// TODO: Implement multiplication function
function multiplyNumbers(a, b) {
  // Your code here
}

console.log(calculateSum(5, 3));
console.log(multiplyNumbers(4, 2));`

export default function CollaborationDemo() {
  const [code, setCode] = useState(initialCode)
  const [activeUser, setActiveUser] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUser((prevUser) => (prevUser + 1) % users.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (activeUser === 1) {
      setCode((prevCode) =>
        prevCode.replace(
          "// Your code here",
          "return a * b; // Multiplication implemented"
        )
      )
    } else if (activeUser === 2) {
      setCode((prevCode) =>
        prevCode.replace(
          "console.log(calculateSum(5, 3));",
          "console.log(calculateSum(5, 3)); // Output: 8"
        )
      )
    }
  }, [activeUser])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">See Collaboration in Action</h2>
        <Card className="w-full max-w-4xl mx-auto bg-white overflow-hidden shadow-xl">
          <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center space-x-2">
              {users.map((user, index) => (
                <Avatar key={user.name} className={`${index === activeUser ? 'ring-2 ring-yellow-400' : ''}`}>
                  <AvatarImage src={`/placeholder-avatar-${index + 1}.jpg`} alt={user.name} />
                  <AvatarFallback className={user.color}>{user.avatar}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="text-sm">
              {users[activeUser].name} is editing...
            </div>
          </div>
          <CardContent className="p-0">
            <pre className="p-4 font-mono text-sm whitespace-pre-wrap break-words">
              {code.split('\n').map((line, index) => (
                <div key={index} className="leading-relaxed">
                  {line}
                </div>
              ))}
            </pre>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

