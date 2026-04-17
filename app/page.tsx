"use client";

import { useState, useEffect } from "react"
import About from "@/components/about"
import Footer from "@/components/footer"

const names = ["Pranav Iyer", "प्रणव अय्यर", "பிரணவ் அய்யர்"]

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
    setIndex(i => (i + 1) % names.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen flex justify-center items-center px-6">
      <div className="flex flex-col items-start max-w-lg w-full gap-4">
        <h1 className="text-2xl font-bold">{names[index]}</h1>
        <About />
        <Footer />
      </div>
    </main>
  );
}
