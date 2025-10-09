"use client"

import { useState, type ReactElement } from "react"
import { motion } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Coffee, MapPin, Presentation, Users } from "lucide-react"

/**
 * ICSMAI 2025 — Program Component (color‑coded, detailed)
 * Venue: Saïdia, Morocco — Timezone: Africa/Casablanca (UTC+1)
 */
export default function ProgramICSMAI2025Fixed() {
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
    type:
      | "keynote"
      | "session"
      | "break"
      | "social"
      | "panel"
      | "ceremony"
      | "workshop"
      | "registration"
      | "closing"
    speaker?: string
    details?: string
    track?: string
    room?: string
    chair?: string
    papers?: string[]
    icon?: ReactElement
  }

  // Color styles per event type (badges & legend)
  const typeStyles: Record<ItemType["type"], string> = {
    keynote: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200",
    session: "bg-sky-100 text-sky-800 ring-1 ring-sky-200",
    break: "bg-zinc-100 text-zinc-800 ring-1 ring-zinc-200",
    social: "bg-violet-100 text-violet-800 ring-1 ring-violet-200",
    panel: "bg-fuchsia-100 text-fuchsia-800 ring-1 ring-fuchsia-200",
    ceremony: "bg-amber-100 text-amber-900 ring-1 ring-amber-200",
    workshop: "bg-teal-100 text-teal-800 ring-1 ring-teal-200",
    registration: "bg-slate-100 text-slate-800 ring-1 ring-slate-200",
    closing: "bg-rose-100 text-rose-800 ring-1 ring-rose-200",
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

  const schedules: Record<(typeof days)[number]["id"], ItemType[]> = {
  day1: [
    {
      time: "14:00 – 15:30",
      title: "Welcome and Registration",
      location: "Main Conference Registration",
      type: "registration",
      icon: <Users className="h-5 w-5" />,
    },
    {
      time: "15:30 – 16:30",
      title: "Official Opening Ceremony",
      location: "Conference Hall",
      type: "ceremony",
      chair: "Moderators: Prof. Kamal GHOUMID",
      details:
        "Addresses: President of Mohammed Premier University; Director of ENSA Oujda; Dean of Faculty of Science; Dean of Faculty of Medicine & Pharmacy; Director of EST Oujda; Director of CHU; Director of ENCG Oujda; Organizing Committee.",
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      time: "16:30 – 18:30",
      title: "Keynotes Block #1",
      location: "Conference Hall",
      type: "keynote",
      track: "HADDIYA; VOSHMGIR; MESTARI",
      details: [
        "Keynote #1 – Prof. Intissar HADDIYA (FMPO, Med 1st Univ, Oujda): Environmental determinants of hypertension. (Moderators: Prof. A. Kerkri, Prof. Omar Sefraoui)",
        "Keynote #2 – Prof. Shermin VOSHMGIR (Vienna University, Austria): Web3 on the Intersection of Blockchain, AI & IoT. (Moderators: Prof. A. Kerkri, Prof. Omar Sefraoui)",
        "Keynote #3 – Prof. Mohammed MESTARI (ENSET, Hassan II Univ): From Complexity & Network Science to Graph Representation Learning: GNN Approach to Polypharmacy Side Effects. (Moderators: Prof. A. Naji, Prof. O. Sefraoui)",
      ].join(" | "),
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      time: "20:00 – 22:00",
      title: "Dinner break",
      location: "Hotel Restaurants",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },
  ],

  day2: [   {
      time: "08:00 – 09:00",
      title: "Welcome and Registration",
      location: "Main Conference Registration",
      type: "registration",
      icon: <Users className="h-5 w-5" />,
    },
    {
      time: "09:00 – 11:00",
      title: "Keynotes Block #2",
      location: "Conference Hall",
      type: "keynote",
      details: [
        "Keynote #4 – Prof. Yassamine BENTATA (FMPO): The Future of Medicine: Horizons and Limits! (Moderators: Prof. M.A. Madani, Prof. A. Kerkri)",
        "Keynote #5 – Prof. Moulay AKHLOUFI (Univ. de Moncton, Canada): Advances and Challenges in AI for Healthcare. (Moderator: Prof. Omar SEFRAOUI)",
        "Keynote #6 – Prof. Abdelkrim DAOUDI (FMPO): Telemedicine: experience in the Eastern region. (Moderator: Prof. Omar SEFRAOUI)",
      ].join(" | "),
      icon: <Presentation className="h-5 w-5" />,
    },

    // Sessions parallèles 4–6 (10:30–12:30)
    {
      time: "10:30 – 12:30",
      title: "Session 4: Internet of Things and Computing",
      location: "Parallel Sessions",
      room: "Room 1",
      type: "session",
      chair: "Chairs: Prof. Mounir Grari",
      track: "IoT architectures, edge computing, embedded systems",
      papers: [
        "ID9: Optimi",
        
      ],
      icon: <Users className="h-5 w-5" />,
    },
    {
      time: "10:30 – 12:30",
      title: "Session 5: AI, Machine Learning and Deep Learning",
      location: "Parallel Sessions",
      room: "Room 2",
      type: "session",
      chair: "Chairs: Prof. Mohamed Jeyar",
      track: "Learning theory, optimization, deep architectures",
      papers: [
        "ID46: Forest Fire Surveillance through Deep Learning Segmentation and Drone Technology. (Mimoun Yandouzi et al.)",
      ],
      icon: <Users className="h-5 w-5" />,
    },
    {
      time: "10:30 – 12:30",
      title: "Session 6: Data Analysis, Big Data and High Performance Computing",
      location: "Parallel Sessions",
      room: "Room 3",
      type: "session",
      chair: "Chairs: Prof. Madani Med Amine, Prof. Mohamed Emharraf",
      track: "Data engineering, analytics, high-performance computing",
      papers: [
        "ID6: Trans",
      ],
      icon: <Users className="h-5 w-5" />,
    },

    {
      time: "13:00 – 15:30",
      title: "Lunch break",
      location: "Dining Hall",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },

    // Keynotes santé (15:30–17:00)
    {
      time: "15:30 – 17:00",
      title: "Keynotes Block #3 (Healthcare Innovations)",
      location: "Conference Hall",
      type: "keynote",
      details: [
        "Keynote #8 – Prof. M (FMPO): AI : Feedback ",
        
      ].join(" | "),
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      time: "17:00 – 17:30",
      title: "Coffee break",
      location: "Lobby",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },

    // Soir
    {
      time: "17:30 – 20:00",
      title: "Session 7: Network, Security and Social Network",
      location: "Technical Track",
      room: "Room 1",
      type: "session",
      chair: "Chairs: Prof. Med",
      papers: [
        "ID3: A",
      ],
      icon: <Users className="h-5 w-5" />,
    },
    {
      time: "17:30 – 18:30",
      title: "Medicine Special Session I — Workshop #1 (SOMADIAG)",
      location: "Medicine Track",
      room: "Room 3",
      type: "workshop",
      details:
        "Comment concevoir ",
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      time: "18:30 – 21:00",
      title: "Medicine Special Session I — Oral Communications",
      location: "Medicine Track",
      room: "Room 3",
      type: "session",
      track: "Jury: Pr ",
      papers: [
        "CO1: Dr. ",
        ,
      ],
      icon: <Users className="h-5 w-5" />,
    },
    {
      time: "20:00 – 22:00",
      title: "Dinner break",
      location: "Hotel Restaurants",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },
  ],

  day3: [
    {
      time: "08:00 – 09:00",
      title: "Welcome and Registration",
      location: "Main Conference Registration",
      type: "registration",
      icon: <Users className="h-5 w-5" />,
    },
    {
      time: "09:00 – 10:30",
      title: "Keynotes Block #4",
      location: "Conference Hall",
      type: "keynote",
      details: [
        "Keynote – Prof. Daoudi (UMP): IoT and AI: Enhancing Medical Diagnosis and Treatment. (Moderators: Prof. Abderrahim Essadek & Prof. Jamal Yousfi)",
        "Keynote – Prof. Mostafa AZIZI (ESTO, UMP): MIoT and Security Challenges. (Moderators: Prof. Mbarki & Prof. Omar)",
      ].join(" | "),
      icon: <Presentation className="h-5 w-5" />,
    },

    // Sessions parallèles 10–11 (10:30–12:40)
    {
      time: "10:30 – 12:40",
      title: "Session 10: Emerging Technologies and Environment",
      location: "Parallel Sessions",
      room: "Room 1",
      type: "session",
      chair: "Chairs: Prof. Ahmed ",
      papers: [
        "ID5: Monte C",
      ],
      icon: <Users className="h-5 w-5" />,
    },
    {
      time: "10:30 – 12:40",
      title: "Session 11: Smart Application and Computing",
      location: "Parallel Sessions",
      room: "Room 2",
      type: "session",
      chair: "Chairs: Prof. Hicham Bouali and Prof. El Miloud Ar-Reyouchi",
      papers: [
        "ID1: Smart stra.",
        
      ],
      icon: <Users className="h-5 w-5" />,
    },

    // Médecine — Orales (09:00–12:40)
    {
      time: "09:00 – 12:40",
      title: "Session 12: Medicine Special Session II — Oral Communications",
      location: "Medicine Track",
      room: "Room 3",
      type: "session",
      track: "Jury: Pr Ali",
      papers: [
        "CO16: Verification o.",
        
      ],
      icon: <Users className="h-5 w-5" />,
    },

    {
      time: "12:40 – 14:00",
      title: "Lunch break",
      location: "Dining Hall",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      time: "14:00 – 17:00",
      title: "Session 13: Medicine ",
      location: "Medicine Track",
      room: "Room 3",
      type: "workshop",
      details:
        "Workshop Contrôle qualité",
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
            Explore the confirmed keynotes, technical sessions, special tracks and workshops for ICSMAI 2025.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            {(
              ["keynote","session","workshop","panel","ceremony","registration","break","social","closing"] as ItemType["type"][]
            ).map((t) => (
              <span key={t} className={`px-2 py-1 rounded-md text-xs ${typeStyles[t]}`}>{TypeLabel[t]}</span>
            ))}
          </div>
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
                              <span className={`px-2 py-1 rounded-md text-xs ${typeStyles[item.type]}`}>{TypeLabel[item.type]}</span>
                            </div>
                            {item.track && (
                              <div className="text-sm text-muted-foreground"><span className="font-medium">Track:</span> {item.track}</div>
                            )}
                            {item.chair && (
                              <div className="text-sm text-muted-foreground"><span className="font-medium">Chair:</span> {item.chair}</div>
                            )}
                            {item.details && (
                              <p className="text-sm text-muted-foreground">{item.details}</p>
                            )}
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{item.room ? `${item.location} — ${item.room}` : item.location}</span>
                            </div>
                            {item.papers && item.papers.length > 0 && (
                              <ul className="list-disc ms-5 text-sm text-muted-foreground">
                                {item.papers.map((p, i) => (
                                  <li key={i}>{p}</li>
                                ))}
                              </ul>
                            )}
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
