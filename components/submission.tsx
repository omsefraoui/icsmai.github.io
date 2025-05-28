"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs" // Using shadcn Tabs [^1]
import { Button } from "@/components/ui/button"
import { FileText, Download, BookOpen, FileCheck, Mail, ExternalLink, Info, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"

export default function Submission() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const guidelines = [
    "All submissions must follow the LNCS template and be written in English.",
    "Full papers are allowed a maximum of 8 pages.",
    "Authors will pay additional fees for each extra page (20 euros for each one maximum of 7 extra pages) in the LNCS format, excluding bibliographic references.",
    "Papers exceeding these limits may be rejected without review. A clearly marked appendix can be included for supplementary materials but the appendix will be read at the discretion of the reviewers; therefore, the main body of the paper should contain sufficient details to assess its contributions.",
    "All papers must be submitted on CMT Microsoft Platform."
  ]

  return (
    <section id="submission" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Paper Submission</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Submit Your Research</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Share your latest research findings with the international community of AI, IoT and Smart Medical.
          </p>
        </motion.div>

        <Tabs defaultValue="paper" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="paper" className="flex items-center gap-2">
              <FileCheck className="h-4 w-4" />
              Paper Submission
            </TabsTrigger>
            <TabsTrigger value="publications" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Publications and Proceedings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="paper">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  PAPER SUBMISSION
                </CardTitle>
                <CardDescription>
                  Please follow these guidelines carefully to ensure your submission is considered for review.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <motion.div
                  className="space-y-4"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {guidelines.map((guideline, index) => (

                  <motion.div variants={item} key={index}>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{guideline}</span>
                    </p>
                  </motion.div>
                  ))}

                  <motion.div variants={item} className="pt-2">
                    <div className="bg-muted text-muted-foreground p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Info className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p>For more information about submissions, please contact us</p>
                          <p className="flex items-center gap-1 mt-1">
                            <Mail className="h-4 w-4" />
                            <a href="mailto:icsmai.alsi@gmail.com" className="hover:underline">
                              icsmai.alsi@gmail.com 
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button className="flex items-center gap-2" asChild>
                      <Link href="https://resource-cms.springernature.com/springer-cms/rest/v1/content/19338734/data/v1">
                        <Download className="h-4 w-4" />
                        Download Word Template
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2" asChild>
                      <Link href="/acknowledgment" className="text-blue-600 underline hover:text-blue-800">
                        <ExternalLink className="h-4 w-4" />
                        Go to CMT Platform acknowledgment
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="publications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  PUBLICATIONS AND PROCEEDINGS
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <motion.div
                  className="space-y-6"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.p variants={item} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      All reviewed and accepted papers will be published in Springer Indexed Book proceedings.
                    </span>
                  </motion.p>

                  <motion.div variants={item}>
                    <p className="flex items-start gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Extended version of selected papers will be published in indexed journals:</span>
                    </p>
                    <ul className="space-y-2 ml-7">
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>International Journal of Sensors Wireless Communications and Control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Others under acceptation</span>
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}