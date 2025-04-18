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

// pages/_app.js
//import "@/styles/globals.css";
import Menu from  "@/components/Menu";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;


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