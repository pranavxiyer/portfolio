import Header from "@/components/header"
import About from "@/components/about"
import Socials from "@/components/socials"
import Signature from "@/components/signature"

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center px-6">
      <div className="flex flex-col items-start max-w-lg w-full gap-6">
        <Header />
        <About delayChildren={0.2} staggerChildren={0.2} />
        <Signature startDelay={0.8} />
        <hr className="w-full border-gray-500" />
        <Socials />
      </div>
    </main>
  );
}
