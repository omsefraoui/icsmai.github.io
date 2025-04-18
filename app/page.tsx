import Navbar from "@/components/Navbar"
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

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-24"> {/* pt-24 pour espace sous navbar */}
        <Hero />
        <div id="about"><About /></div>
        <div id="keynotes"><Keynotes /></div>
        <div id="committees"><Committees /></div>
        <div id="topics"><Topics /></div>
        <div id="submission"><Submission /></div>
        <div id="dates"><Dates /></div>
        <div id="registration"><Registration /></div>
        <div id="sponsors"><Sponsors /></div>
        <div id="contact"><Contact /></div>
      </main>
    </>
  )
}
