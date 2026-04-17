"use client";

import { useState, useEffect } from "react"
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
    <main className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-start max-w-lg gap-4 px-6 w-full">
        <h1 className="text-2xl font-bold">{names[index]}</h1>

        <div className="space-y-2">
          <p>I'm a computer science graduate student at <a href="https://www.northwestern.edu/">Northwestern University</a>.</p>

          <p>I completed my undergraduate studies in computer science at the <a href="https://www.berkeley.edu">University of California, Berkeley</a>, 
            where I was affiliated with the <a href="https://www.humansleepscience.com/">Center for Human Sleep Science</a>.</p>
        </div>

        <Footer />
      </div>
    </main>
  );
}
