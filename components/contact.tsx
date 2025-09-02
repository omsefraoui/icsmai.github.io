"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AtSign, Mail, MapPin, Hotel, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contact Us</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions about ICSMAI 2025? We&apos;re here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col p-0">
              <CardContent className="p-0 flex-1">
                
              <div className="aspect-video lg:aspect-auto rounded-xl overflow-hidden shadow-lg h-full">
                <iframe 
                  //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.1772974675714!2d-1.8982139064341155!3d34.650465047877766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd787cbdbf96caef%3A0x23a99f5d4e9a3161!2s%C3%89cole%20Nationale%20des%20Sciences%20Appliqu%C3%A9es%20d&#39;Oujda!5e0!3m2!1sen!2sma!4v1742048183743!5m2!1sen!2sma"
                  //src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5489.8980982679695!2d-2.2712785700028815!3d35.09889590528412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7831462a756a29%3A0xd6e47c414e7e29f6!2sBe%20Live%20Collection%20Saidia!5e0!3m2!1sen!2sma!4v1742837670645!5m2!1sen!2sma"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.8919509555403!2d-2.307707338131778!3d35.10940882266368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd782df8b355c477%3A0x91672c02502950bb!2sRadisson%20Blu%20Resort%2C%20Saidia%20Beach!5e0!3m2!1sfr!2sma!4v1747086702861!5m2!1sfr!2sma"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Conference Venue Map"
                />
              </div>
              
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us directly using the information below.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Email</p>
                      <Link
                        href="mailto:info@icsmai2024.org"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        icsmai.alsi@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-4">
      {/* Phone */}
      <div className="flex items-start space-x-4">
        <div className="p-2 rounded-full bg-primary/10">
          <Phone className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1">
          <p className="font-medium">Phone</p>
          <Link
            href="tel:+212-05-36-50-54-70/71"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            +212-05-36-50-54-70/71
          </Link>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="flex items-start space-x-4">
        <div className="p-2 rounded-full bg-green-100">
          <FaWhatsapp className="h-5 w-5 text-green-500" />
        </div>
        <div className="space-y-1">
          <p className="font-medium">WhatsApp</p>
          <Link
            href="https://wa.me/212671026271"
            className="text-muted-foreground hover:text-green-600 transition-colors"
            target="_blank"
          >
            +212 6 71 02 62 71
          </Link>
        </div>
      </div>
    </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        Bd Mohammed VI
                        <br />
                        Oujda 60000
                        <br />
                        Morocco
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <AtSign className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Social Media</p>
                      <div className="flex space-x-2">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          LinkedIn
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="text-lg font-medium">Specific Inquiries</h4>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Paper Submissions:</span>
                      <Link href="mailto:icsmai.alsi@gmail.com" className="text-primary hover:underline ml-1">
                      icsmai.alsi@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Hotel  className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">The conference will be held in Hotel Radisson Blu Resort Saidia Beach (All Inclusive) in Saïdia, Morocco</p>
                      <Link
                        href="https://www.radissonhotels.com/fr-fr/hotels/radisson-blu-resort-saidia-beach?facilitatorId=RHGSEM&cid=a%3Aps+b%3Aggl+c%3Aemea+i%3Abrand+e%3Ardb+d%3Amea+r%3Abrt+f%3Afr-FR+g%3Aho+h%3AMAOUDRST+v%3Acf&gad_source=1&gad_campaignid=21268767749&gbraid=0AAAAADtKuEWqxp9Q-Xtw0XgDK6O7NMc6_&gclid=Cj0KCQjwoZbBBhDCARIsAOqMEZXan6LB0T2O_V6JkKXEAir-6iADdnTOGTNYCNvNbAORfZb2fwjHM_saAhvJEALw_wcB&gclsrc=aw.ds"
                        className="text-muted-foreground hover:text-primary transition-colors">
                        Please find the link of the hotel: 
                         <Link href="https://www.youtube.com/watch?v=52z3h7JjG2E" className="text-primary hover:underline ml-1">
                      Click for more information
                      </Link>
                      </Link>
                    </div>
                  </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}