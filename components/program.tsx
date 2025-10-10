"use client"

import { useState, useRef, type ReactElement } from "react"
import { motion } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Coffee, MapPin, Presentation, Users } from "lucide-react"

/**
 * ICSMAI 2025 — Program Component (color-coded, structured)
 * Venue: Saïdia, Morocco — Timezone: Africa/Casablanca (UTC+1)
 */
export default function Program() {
  const days = [
    { id: "day1", label: "Day 1", date: "Thursday, Oct 23" },
    { id: "day2", label: "Day 2", date: "Friday, Oct 24" },
    { id: "day3", label: "Day 3", date: "Saturday, Oct 25" },
  ] as const
  type DayId = (typeof days)[number]["id"]

  const [activeDay, setActiveDay] = useState<DayId>("day1")
  const [expandAll, setExpandAll] = useState(false)
  const [accordionNonce, setAccordionNonce] = useState(0)
  const printRef = useRef<HTMLDivElement>(null)

  const handleTabChange = (v: string) => setActiveDay(v as DayId)

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

  const groupByTime = (items: ItemType[]) => {
    return items.reduce((acc, it) => {
      ;(acc[it.time] ||= []).push(it)
      return acc
    }, {} as Record<string, ItemType[]>)
  }

  // --- PROGRAMME (extrait synthèse) ---
  const schedules: Record<DayId, ItemType[]> = {
    day1: [
      { time: "14:00 – 15:30", title: "Welcome and Registration", location: "Main Conference Registration", type: "registration", icon: <Users className="h-5 w-5" /> },
      {
        time: "15:30 – 16:30",
        title: "Official Opening Ceremony",
        location: "Conference Hall",
        type: "ceremony",
        chair: "Moderators: Prof. Kamal GHOUMID",
        details: "Addresses: President of Mohammed Premier University; Director of ENSA Oujda; ...",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "16:30 – 18:30",
        title: "Keynotes Block #1",
        location: "Conference Hall",
        type: "keynote",
        track: "HADDIYA; VOSHMGIR; MESTARI",
        details: [
          "Keynote #1 – Prof. Intissar HADDIYA: Environmental determinants of hypertension.",
          "Keynote #2 – Prof. Shermin VOSHMGIR: Web3 at the Intersection of Blockchain, AI & IoT.",
          "Keynote #3 – Prof. Mohammed MESTARI: Graph Representation Learning for Polypharmacy Side Effects.",
        ].join(" | "),
        icon: <Presentation className="h-5 w-5" />,
      },
      { time: "20:00 – 22:00", title: "Dinner break", location: "Hotel Restaurants", type: "break", icon: <Coffee className="h-5 w-5" /> },
    ],
    day2: [
      { time: "08:00 – 09:00", title: "Welcome and Registration", location: "Main Conference Registration", type: "registration", icon: <Users className="h-5 w-5" /> },
      {
        time: "09:00 – 11:00",
        title: "Keynotes Block #2",
        location: "Conference Hall",
        type: "keynote",
        details: [
          "Keynote #4 – Prof. Y. BENTATA: The Future of Medicine.",
          "Keynote #5 – Prof. M. AKHLOUFI: AI for Healthcare.",
          "Keynote #6 – Prof. A. DAOUDI: Telemedicine in the Eastern region.",
        ].join(" | "),
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "10:30 – 12:30",
        title: "Session 4: IoT and Computing",
        location: "Parallel Sessions",
        room: "Room 1",
        type: "session",
        chair: "Chairs: Z. Bougroun, I. El Farissi, M. Grari",
        track: "IoT architectures, edge computing, embedded systems",
        papers: ["ID94: Energy-efficient modulation in WSN within IoMT.", "ID40: GNSS integrity for medical supply chain (DL).", "…"],
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "10:30 – 12:30",
        title: "Session 5: AI, ML and DL",
        location: "Parallel Sessions",
        room: "Room 2",
        type: "session",
        chair: "Chairs: K. Azghiou, S. Mazouz, M. Jeyar",
        track: "Learning theory, optimization, deep architectures",
        papers: ["ID46: Forest Fire Surveillance (DL segmentation + drones)."],
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "10:30 – 12:30",
        title: "Session 6: Data Analysis, Big Data and HPC",
        location: "Parallel Sessions",
        room: "Room 3",
        type: "session",
        chair: "Chairs: M.A. Madani, M. Emharraf, B. Tidaf",
        track: "Data engineering, analytics, high-performance computing",
        papers: ["ID60: Transfer learning for elderly fall detection (limited data)."],
        icon: <Users className="h-5 w-5" />,
      },
      { time: "13:00 – 15:30", title: "Lunch break", location: "Dining Hall", type: "break", icon: <Coffee className="h-5 w-5" /> },
      {
        time: "15:30 – 17:00",
        title: "Keynotes Block #3 (Healthcare Innovations)",
        location: "Conference Hall",
        type: "keynote",
        details: ["AI & Big Data in Central Laboratory", "AI validation in medical biology", "…"].join(" | "),
        icon: <Presentation className="h-5 w-5" />,
      },
      { time: "17:00 – 17:30", title: "Coffee break", location: "Lobby", type: "break", icon: <Coffee className="h-5 w-5" /> },
      { time: "17:30 – 20:00", title: "Session 7: Network, Security and Social Network", location: "Technical Track", room: "Room 1", type: "session", papers: ["ID38: Adaptive DSR metrics …"], icon: <Users className="h-5 w-5" /> },
      { time: "17:30 – 18:30", title: "Medicine Special Session I — Workshop #1 (SOMADIAG)", location: "Medicine Track", room: "Room 3", type: "workshop", details: "Concevoir/équiper un labo; place du LIS.", icon: <Presentation className="h-5 w-5" /> },
      { time: "18:30 – 21:00", title: "Medicine Special Session I — Oral Communications", location: "Medicine Track", room: "Room 3", type: "session", papers: ["CO1: …", "CO2: …"], icon: <Users className="h-5 w-5" /> },
      { time: "20:00 – 22:00", title: "Dinner break", location: "Hotel Restaurants", type: "break", icon: <Coffee className="h-5 w-5" /> },
    ],
    day3: [
      { time: "08:00 – 09:00", title: "Welcome and Registration", location: "Main Conference Registration", type: "registration", icon: <Users className="h-5 w-5" /> },
      {
        time: "09:00 – 10:30",
        title: "Keynotes Block #4",
        location: "Conference Hall",
        type: "keynote",
        details: ["Daoudi — IoT & AI", "Mostafa Azizi — MIoT & Security"].join(" | "),
        icon: <Presentation className="h-5 w-5" />,
      },
      { time: "10:30 – 12:40", title: "Session 10: Emerging Technologies and Environment", location: "Parallel Sessions", room: "Room 1", type: "session", papers: ["ID50: Modified Elekta Precise LINAC …"], icon: <Users className="h-5 w-5" /> },
      { time: "10:30 – 12:40", title: "Session 11: Smart Application and Computing", location: "Parallel Sessions", room: "Room 2", type: "session", papers: ["ID17: …", "ID120: …", "…"], icon: <Users className="h-5 w-5" /> },
      { time: "09:00 – 12:40", title: "Session 12: Medicine Special Session II — Oral Communications", location: "Medicine Track", room: "Room 3", type: "session", papers: ["CO16: …", "CO17: …", "…"], icon: <Users className="h-5 w-5" /> },
      { time: "12:40 – 14:00", title: "Lunch break", location: "Dining Hall", type: "break", icon: <Coffee className="h-5 w-5" /> },
      { time: "14:00 – 17:00", title: "Session 13: Medicine Special Session II — Workshop #2 (Masterlab)", location: "Medicine Track", room: "Room 3", type: "workshop", details: "QC workshop; URT; …", icon: <Presentation className="h-5 w-5" /> },
      { time: "17:00", title: "Closing Ceremony", location: "Conference Hall", type: "closing", icon: <Presentation className="h-5 w-5" /> },
    ],
  }

  // -------- EXPORT PDF (client-side: imports dynamiques + garde + pagination) --------
  const exportPdf = async () => {
    try {
      // 1) Imports dynamiques (évite les soucis SSR/bundling)
      const [{ jsPDF }, html2canvas] = await Promise.all([
        import("jspdf"),
        import("html2canvas").then((m) => m.default),
      ])

      // 2) Zone à capturer
      const node = printRef.current
      if (!node) {
        console.error("[PDF] printRef nul : zone introuvable.")
        return
      }

      // 3) Laisser le DOM se stabiliser (accordéons, animations)
      await new Promise((r) => setTimeout(r, 60))

      // 4) Capture
      const scale = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 2, 3) : 2
      const canvas = await html2canvas(node, { scale, useCORS: true, backgroundColor: "#ffffff", logging: false })
      const imgData = canvas.toDataURL("image/png")

      // 5) PDF A4 portrait, pagination verticale
      const pdf = new jsPDF("p", "pt", "a4")
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()

      const imgWidth = pageWidth
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      let y = 0
      while (y < imgHeight) {
        pdf.addImage(imgData, "PNG", 0, -y, imgWidth, imgHeight)
        y += pageHeight
        if (y < imgHeight) pdf.addPage()
      }

      pdf.save(`ICSMAI2025_Program_${activeDay.toUpperCase()}.pdf`)
    } catch (err) {
      console.error("[PDF] Erreur export :", err)
      alert("Impossible de générer le PDF. Ouvrez la console (F12) et partagez l’erreur pour correction.")
    }
  }

  return (
    <section id="program" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        {/* Titre + légende */}
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

        {/* Actions */}
        <div className="flex items-center justify-end mb-3 gap-2">
          <Button variant="default" size="sm" onClick={exportPdf}>Exporter en PDF</Button>
          <Button variant="outline" size="sm" onClick={() => { setExpandAll(true); setAccordionNonce((n) => n + 1) }}>Tout dérouler</Button>
          <Button variant="outline" size="sm" onClick={() => { setExpandAll(false); setAccordionNonce((n) => n + 1) }}>Tout replier</Button>
        </div>

        {/* Programme (zone capturée) */}
        <div ref={printRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="day1" value={activeDay} onValueChange={handleTabChange} className="w-full">
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

              {days.map((day) => {
                const grouped = groupByTime(schedules[day.id])
                const blocks = Object.entries(grouped)
                return (
                  <TabsContent key={day.id} value={day.id} className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Program for {day.label} ({day.date})</CardTitle>
                        <CardDescription>All times are in Morocco Standard Time (Africa/Casablanca, UTC+1)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {blocks.map(([time, items]) => (
                            <Card key={`${time}-${accordionNonce}`} className="border-muted">
                              <CardHeader className="pb-2">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Clock className="h-4 w-4" />
                                  <span className="font-medium">{time}</span>
                                </div>
                                <CardTitle className="text-base md:text-lg">
                                  {items.length === 1 ? items[0].title : `Parallel block (${items.length} tracks)`}
                                </CardTitle>
                                {items.length === 1 && (
                                  <div className="flex items-center gap-2">
                                    <span className={`px-2 py-1 rounded-md text-xs ${typeStyles[items[0].type]}`}>
                                      {TypeLabel[items[0].type]}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      {items[0].room ? `${items[0].location} — ${items[0].room}` : items[0].location}
                                    </span>
                                  </div>
                                )}
                              </CardHeader>

                              <CardContent>
                                {items.length === 1 ? (
                                  (items[0].track || items[0].chair || items[0].details || (items[0].papers && items[0].papers.length > 0)) && (
                                    <Accordion type="multiple" defaultValue={expandAll ? ["details"] : []} className="w-full mt-1">
                                      <AccordionItem value="details">
                                        <AccordionTrigger className="text-sm">Details</AccordionTrigger>
                                        <AccordionContent>
                                          <div className="space-y-2">
                                            {items[0].track && <div className="text-sm text-muted-foreground"><span className="font-medium">Track:</span> {items[0].track}</div>}
                                            {items[0].chair && <div className="text-sm text-muted-foreground"><span className="font-medium">Chair:</span> {items[0].chair}</div>}
                                            {items[0].details && <p className="text-sm text-muted-foreground">{items[0].details}</p>}
                                            {items[0].papers && items[0].papers.length > 0 && (
                                              <div className="mt-2">
                                                <div className="text-sm font-medium">Papers</div>
                                                <ul className="list-disc ms-5 text-sm text-muted-foreground">
                                                  {items[0].papers.map((p, i) => <li key={i}>{p}</li>)}
                                                </ul>
                                              </div>
                                            )}
                                          </div>
                                        </AccordionContent>
                                      </AccordionItem>
                                    </Accordion>
                                  )
                                ) : (
                                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {items.map((it, idx) => (
                                      <div key={idx} className="rounded-lg border p-4">
                                        <div className="flex items-start justify-between gap-2">
                                          <div className="space-y-1">
                                            <h3 className="font-semibold leading-tight">{it.title}</h3>
                                            <div className="text-xs text-muted-foreground flex items-center gap-2">
                                              <MapPin className="h-3 w-3" />
                                              <span>{it.room ? `${it.location} — ${it.room}` : it.location}</span>
                                            </div>
                                          </div>
                                          <span className={`px-2 py-1 rounded-md text-[11px] ${typeStyles[it.type]}`}>{TypeLabel[it.type]}</span>
                                        </div>

                                        {(it.track || it.chair || it.details || (it.papers && it.papers.length > 0)) && (
                                          <Accordion type="multiple" defaultValue={expandAll ? [`details-${idx}`] : []} className="mt-2">
                                            <AccordionItem value={`details-${idx}`}>
                                              <AccordionTrigger className="text-xs">Details</AccordionTrigger>
                                              <AccordionContent>
                                                <div className="space-y-1">
                                                  {it.track && <div className="text-xs text-muted-foreground"><span className="font-medium">Track:</span> {it.track}</div>}
                                                  {it.chair && <div className="text-xs text-muted-foreground"><span className="font-medium">Chair:</span> {it.chair}</div>}
                                                  {it.details && <p className="text-xs text-muted-foreground">{it.details}</p>}
                                                  {it.papers && it.papers.length > 0 && (
                                                    <div>
                                                      <div className="text-xs font-medium">Papers</div>
                                                      <ul className="list-disc ms-5 text-xs text-muted-foreground">
                                                        {it.papers.map((p, i) => <li key={i}>{p}</li>)}
                                                      </ul>
                                                    </div>
                                                  )}
                                                </div>
                                              </AccordionContent>
                                            </AccordionItem>
                                          </Accordion>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )
              })}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
