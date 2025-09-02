"use client"

import { motion } from "motion/react"
import Link from "next/link"

export default function Publications() {
  const lines = [
    "All papers accepted for ICSMAI 2025 will be published in the conference proceedings.",
    "Authors retain copyright but grant the conference the right to distribute the work.",
    "For any inquiries regarding publications, please contact us via email."
  ]

  return (
    <section id="publications" className="w-full py-18 md:py-20 md:pb-32 bg-primary/5">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 max-w-4xl mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Publications</h2>
          <p className="text-lg text-muted-foreground">
            ICSMAI 2025 conference proceedings and publication details
          </p>
        </motion.div>

        {/* Lines / content */}
        <div className="space-y-4 max-w-3xl text-center">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              {line.includes("contact us via email") ? (
                <>
                  {line.split("contact us via email")[0]}
                  <Link
                    href="mailto:icsmai.alsi@gmail.com"
                    className="text-primary hover:underline ml-1"
                  >
                    contact us via email
                  </Link>
                </>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
