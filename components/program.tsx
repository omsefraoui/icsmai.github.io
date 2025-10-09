"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Coffee, MapPin, Presentation, Users } from "lucide-react"

/**
 * ICSMAI 2025 — Program Component (Saïdia, Morocco)
 * Source of truth: Technical_Program_ICSMAI2025.docx
 * All times: Africa/Casablanca (UTC+1)
 */
export default function ProgramICSMAI2025() {
  const [activeDay, setActiveDay] = useState("day1")

  const days = [
    { id: "day1", label: "Day 1", date: "Thursday, Oct 23" },
    { id: "day2", label: "Day 2", date: "Friday, Oct 24" },
    { id: "day3", label: "Day 3", date: "Saturday, Oct 25" },
  ] as const

  type ItemType = {
    time: string
    title: string
    location: string
    type: "keynote" | "session" | "break" | "social" | "panel" | "ceremony" | "workshop" | "registration" | "closing"
    speaker?: string
    details?: string
    icon?: JSX.Element
  }

  const schedules: Record<(typeof days)[number]["id"], ItemType[]> = {
    day1: [
      {
        time: "14:00 – 15:30",
        title: "Welcome & Registration",
        location: "Main Conference Registration",
        type: "registration",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "15:30 – 16:30",
        title: "Official Opening Ceremony",
        location: "Conference Hall",
        type: "ceremony",
        details:
          "University & School leadership addresses; Moderators: Prof. Kamal Ghoumid & Organizing Committee",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "16:30 – 18:30",
        title: "Keynotes Block #1",
        location: "Conference Hall",
        type: "keynote",
        details:
          "#1 Prof. Intissar Haddiaya — Environmental determinants of hypertension; #2 Prof. Shermin Voshmgir — Web3 at the intersection of Blockchain, AI & IoT; #3 Prof. Mohammed Mestari — Graph Neural Networks for Polypharmacy Side Effects",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "20:00",
        title: "Dinner Break",
        location: "Hotel Restaurants",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
    ],
    day2: [
      {
        time: "08:00 – 09:00",
        title: "Welcome & Registration",
        location: "Main Conference Registration",
        type: "registration",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "09:00 – 10:30",
        title: "Keynotes Block #2",
        location: "Conference Hall",
        type: "keynote",
        details:
          "#5 Prof. Yassamine Bentata — The Future of Medicine: Horizons and Limits!; #6 Prof. Moulay Akhloufi — Advances & Challenges in AI for Healthcare",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "10:30 – 12:30",
        title: "Parallel Sessions 4–6",
        location: "Rooms 1–3",
        type: "session",
        details:
          "S4: IoT & Computing (Room 1) · S5: AI/ML/DL (Room 2) · S6: Data Analysis, Big Data & HPC (Room 3)",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "13:00 – 15:30",
        title: "Lunch Break",
        location: "Dining Hall",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "15:30 – 17:00",
        title: "Keynotes Block #3 (Healthcare Innovations)",
        location: "Conference Hall",
        type: "keynote",
        details:
          "#7 Prof. Mohammed Choukri · #8 Prof. Dounia El Moujtahide · #9 Prof. El Houcine Sebbar · #10 Prof. Abderrazak Saddari · #11 Mr. Mustapha El Machad (Abbott Masterlab)",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "17:00 – 17:30",
        title: "Coffee Break",
        location: "Lobby",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "17:30 – 20:00",
        title: "Session 7: Networks, Security & Social Network",
        location: "Room 1",
        type: "session",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "17:30 – 18:30",
        title: "Medicine Special Session I — Workshop #1 (SOMADIAG)",
        location: "Room 3",
        type: "workshop",
        details: "Designing & equipping a new Medical Biology Lab; LIS considerations — Zakaria Berrada",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "18:30 – 21:00",
        title: "Medicine Special Session I — Oral Communications",
        location: "Room 3",
        type: "session",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "20:00",
        title: "Dinner Break",
        location: "Hotel Restaurants",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
    ],
    day3: [
      {
        time: "08:00 – 09:00",
        title: "Welcome & Registration",
        location: "Main Conference Registration",
        type: "registration",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "09:00 – 10:30",
        title: "Keynotes Block #4",
        location: "Conference Hall",
        type: "keynote",
        details:
          "Prof. Muhamad Umar Khan — Empowering Healthcare with IoT & AI; Prof. Mostafa Azizi (with Prof. Cyril Drocourt) — MIoT & Security Challenges",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "09:00 – 12:40",
        title: "Session 12: Medicine Special Session II — Oral Communications",
        location: "Room 3",
        type: "session",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "10:30 – 12:40",
        title: "Parallel Sessions 10–11",
        location: "Rooms 1–2",
        type: "session",
        details:
          "S10: Emerging Technologies & Environment (Room 1) · S11: Smart Applications & Computing (Room 2)",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "12:40 – 14:00",
        title: "Lunch Break",
        location: "Dining Hall",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "14:00 – 17:00",
        title: "Session 13: Medicine Special Session II — Workshop #2 (Masterlab)",
        location: "Room 3",
        type: "workshop",
        details: "Quality control workshop; interpreting internal/external reports; URT — Mme Asmae Aouiss (Bio-Rad/Masterlab)",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "17:00",
        title: "Closing Ceremony",
        location: "Conference Hall",
        type: "closing",
        icon: <Presentation className="h-5 w-5" />,
      },
    ],
  }

  const getBadgeVariant = (type: ItemType["type"]) => {
    switch (type) {
      case "keynote":
      case "ceremony":
      case "closing":
        return "default"
      case "session":
      case "panel":
      case "workshop":
      case "social":
        return "secondary"
      case "break":
      case "registration":
      default:
        return "outline"
    }
  }

  const TypeLabel: Record<ItemType["type"], string> = {
    keynote: "Keynote",
    session: "Session",
    break: "Break",
    social: "Social",
    panel: "Panel",
    ceremony: "Ceremony",
    workshop: "Workshop",
    registration: "Registration",
    closing: "Closing",
  }

  return (
    <section id="program" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Conference Program</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Schedule of Events</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore the confirmed keynotes, technical sessions, and special tracks for ICSMAI 2025.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="day1" value={activeDay} onValueChange={setActiveDay} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-14">
              {days.map((day) => (
                <TabsTrigger key={day.id} value={day.id} className="text-center">
                  <div className="flex flex-col">
                    <span className="font-medium">{day.label}</span>
                    <span className="text-xs text-muted-foreground">{day.date}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {days.map((day) => (
              <TabsContent key={day.id} value={day.id} className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Program for {day.label} ({day.date})
                    </CardTitle>
                    <CardDescription>All times are in Morocco Standard Time (Africa/Casablanca, UTC+1)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {schedules[day.id].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="sm:w-40 flex-shrink-0">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{item.time}</span>
                            </div>
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <h3 className="font-bold">{item.title}</h3>
                              <Badge variant={getBadgeVariant(item.type)} className="w-fit">
                                {TypeLabel[item.type]}
                              </Badge>
                            </div>
                            {item.details && (
                              <p className="text-sm text-muted-foreground">{item.details}</p>
                            )}
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                          <div className="sm:w-10 flex items-center justify-center">
                            <div className="p-2 rounded-full bg-primary/10">{item.icon ?? <Users className="h-5 w-5" />}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
