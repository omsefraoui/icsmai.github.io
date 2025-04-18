import Hero from "@/components/hero"
import About from "@/components/about"
import Keynotes from "@/components/keynotes"
import Committees from "@/components/committees"
import Topics from "@/components/topics"
import Submission from "@/components/submission"
import Dates from "@/components/dates"
import Registration from "@/components/registration"
import Sponsors from "@/components/sponsors"
import Contact from "@/components/contact"

///////////////////////////////
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Bienvenue sur mon site</h1>
      </main>
    </div>
  )
}


///////////////////////////////////

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <About />
      <Keynotes />
      <Committees />
      <Topics />
      <Submission />
      <Dates />
      <Registration />
      {/*<Programme />*/}
      <Sponsors />
      <Contact />
    </main>
  )
}