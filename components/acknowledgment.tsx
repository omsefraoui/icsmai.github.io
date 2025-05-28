"use client"

import { motion } from "motion/react"
import Link from "next/link"

export default function Acknowledgment() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
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
            custom={0}
            className="text-center space-y-6 max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Acknowledgment</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              By submitting to ICSMAI 2025, authors confirm that their work is original, has not been published previously, and is not under consideration elsewhere. Authors agree to abide by the ethical standards and review process of the conference.
                       <Link href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"   className="text-blue-800 underline hover:text-blue-900">
                               Go to CMT Platform
                         </Link>
            </p>
          </motion.div>

          </div>
        </div>
       </section>
  )
}
