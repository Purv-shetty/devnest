"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

const demoCode = `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`

export default function LiveDemo() {
  const [code, setCode] = useState(demoCode)
  const [cursor, setCursor] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prevCursor) => (prevCursor + 1) % demoCode.length)
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">See It in Action</h2>
        <Card className="w-full max-w-3xl mx-auto bg-gray-900 text-white overflow-hidden">
          <CardContent className="p-6">
            <pre className="font-mono text-sm">
              <code>
                {code.slice(0, cursor)}
                <span className="bg-white animate-pulse">&nbsp;</span>
                {code.slice(cursor)}
              </code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

