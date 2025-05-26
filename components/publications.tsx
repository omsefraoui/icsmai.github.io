"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Publications() {
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
    <section id="publications" className="w-full py-18 md:py-20 md:pb-32">
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Publication Opportunities</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              All accepted papers will be published in internationally recognized, indexed publications
            </p>
          </motion.div>

          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 w-full max-w-7xl">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
              className="xl:col-span-2"
            >
              <Card className="h-full border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 md:p-10 space-y-8">
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">Springer International Conference</h3>
                  </div>

                  {/* Logos */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <div className="p-4">
                      <Image
                        src="/images/WOS_Logo.png"
                        alt="Clarivate Web of Science Logo"
                        width={220}
                        height={60}
                        className="rounded"
                      />
                    </div>
                    <div className="p-4">
                      <Image
                        src="/images/springer.png"
                        alt="Springer Logo"
                        width={200}
                        height={70}
                        className="rounded"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-center space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      All reviewed and accepted papers will be published in{" "}
                      <Link href="https://link.springer.com/book/10.1007/978-3-031-66854-8" className="font-semibold text-primary">
                      Springer Indexed Book Proceedings
                      </Link>
                    </p>
                    
                  </div>

                  {/* Proceedings Book */}
                  <div className="flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 2 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <Link href="https://link.springer.com/book/10.1007/978-3-031-66854-8">
                        <div className="relative w-54 h-96 overflow-hidden rounded-xl shadow-lg border-2 border-primary/20">
                          <Image
                            src="/images/icsmai24_springer.png"
                            alt="ICSMAI Conference Proceedings"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                        </div>
                      </Link>
                      
                    </motion.div>
                  </div>

                  {/* Book Description */}
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">ICSMAI 2025 Proceedings</span> - Your research will be part of this
                      prestigious international publication
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Scopus & Submission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={2}
              className="space-y-6"
            >
              {/* Scopus Indexing */}
              <Card className="border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3">
                      <Image
                        src="/images/scopus_icon.png"
                        alt="Scopus Logo"
                        width={140}
                        height={140}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg">Scopus Indexed</h4>
                  <p className="text-sm text-muted-foreground">Ensuring global visibility and citation tracking</p>
                </CardContent>
              </Card>

              {/* Extended Journal Publications */}
              <Card className="border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-lg">Extended Publications</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Extended version of selected papers will be published in indexed journals:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>International Journal of Sensors Wireless Communications and Control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Others under acceptation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Submission Section */}
              <Card className="border-2 border-primary/20 shadow-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <h4 className="text-xl font-bold">Submit Your Research</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All papers must be submitted through the CMT Microsoft Platform.
                  </p>
                  <div className="mt-8">
                    
                    <Button size="sm" className="w-full" asChild>
                      <Link href="#submission" className="flex items-center justify-center gap-2">
                        <FileText className="h-4 w-4" />
                        View Guidelines
                      </Link>
                    </Button>
                  </div>
                  
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
