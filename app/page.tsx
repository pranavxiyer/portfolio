"use client";

import { useState, useEffect } from "react"
import About from "@/components/about"
import Socials from "@/components/socials"
import Signature from "@/components/signature"

const names = ["Pranav Iyer", "प्रणव अय्यर", "பிரணவ் அய்யர்"]

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
    setIndex(i => (i + 1) % names.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen flex justify-center items-center px-6">
      <div className="flex flex-col items-start max-w-lg w-full gap-6">
        {/* <h1 key={index} className="text-2xl animate-fade">{names[index]}</h1> */}
        <h1 className="text-3xl">Pranav Iyer</h1>
        <About />
        <Signature />
        <hr className="w-full border-gray-500" />
        <Socials />
      </div>
    </main>
  );
}
