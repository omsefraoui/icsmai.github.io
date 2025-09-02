"use client"

import { motion, Variants, Easing } from "framer-motion"
import Link from "next/link"

export default function Acknowledgment() {
  // Définir l'animation compatible TypeScript
  const ease: Easing = [0.6, -0.05, 0.01, 0.99]

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: ease, // remplace "easeOut" par le tableau Easing
      },
    }),
  }

  return (
    <section id="acknowledgment" className="w-full py-18 md:py-20 md:pb-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-16">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0} // important pour la fonction visible
            className="text-center space-y-6 max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Acknowledgment
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
              This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              <br />
              By submitting to ICSMAI 2025, authors confirm that their work is original, has not been published previously, and is not under consideration elsewhere. Authors agree to abide by the ethical standards and review process of the conference.
              <br />
              <Link
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICSMAI2025"
                className="text-blue-800 underline hover:text-blue-900"
              >
                Go to CMT Platform
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
