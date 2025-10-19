"use client"

import { useState, useRef, type ReactElement } from "react"
import { motion } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Coffee, MapPin, Presentation, Users } from "lucide-react"

/**
 * ICSMAI 2025 — Program Component (color coded, structured)
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

  // --- PROGRAMME (synthèse) — corrected data ---
  const schedules: Record<DayId, ItemType[]> = {
    day1: [
      {
        time: "14:00 – 15:00",
        title: "Welcome and Registration",
        location: "Main Conference Registration",
        type: "registration",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "15:00 – 16:00",
        title: "Official Opening Ceremony",
        location: "Conference Hall",
        type: "ceremony",
        chair: "Moderator: Prof. Kamal GHOUMID",
        details: [
          "President of Mohammed Premier University",
          "Director of ENSA Oujda",
          "Dean of Faculty of Science",
          "Dean of Faculty of Medicine & Pharmacy",
          "Director of CHU",
          "Organizing Committee",
        ].join(" | "),
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "16:00 – 19:00",
        title: "Keynotes Block #1",
        location: "Conference Hall",
        type: "keynote",
        track: "HADDIYA; AKHLOUFI; MESTARI",
        details: [
          "Keynote #1 – Prof. Intissar HADDIYA: Environmental determinants of hypertension. Moderator: Prof. K. GHOUMID",
          "Keynote #2 – Prof. Moulay AKHLOUFI: Advances and Challenges in AI for Healthcare. Moderator: Prof. O. SEFRAOUI",
          "Keynote #3 – Prof. Mohammed MESTARI: From Complexity and Network Science to Graph Representation Learning: A Graph Neural Network Approach to Polypharmacy Side Effects. Moderator: Prof. A. NAJI",
        ].join(" | "),
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "19:00 – 20:30",
        title: "Session 1: AI in Healthcare & Medical Diagnosis",
        location: "Parallel Sessions",
        room: "Room 1",
        type: "session",
        chair: "M. H. Sebbar, A. Saddari, and K. Alaoui",
        papers: [
          "Faysal ETROUFI — Benchmarking Machine Learning Models for Early Detection of Chronic Kidney Disease",
          "Abderrazak SADDARI — Comparative Analysis of Machine Learning Approaches for Antimicrobial Resistance Prediction and Multi-Drug Resistance Classification",
          "Maryam BENHEDDI — Detection of a rare mutation in exon 20 of the EGFR gene by EasyPGX™ real-time PCR in a case of non-small cell lung cancer at the Oujda pathology laboratory",
          "Maryam BENHEDDI — The Experience of the Pathology Laboratory at Mohammed VI University Hospital of Oujda in the Molecular Analysis of Colorectal Cancers: A Retrospective Study of RAS Status Assessment by Real-Time PCR with TaqMan Probes",
          "Jihane BENBRIK — Machine Learning Approaches for Predicting Vitamin D Levels: Comparative Analysis",
          "Oumaima AAMAROUCHI — Optimizing Brain Tumor Detection: A Novel Approach Using Mixed Initialization Kernels and Genetic Algorithms in Convolutional Neural Networks",
          "Omar SEFRAOUI — Artificial Intelligence for Diagnosis and Analysis of Multiple Sclerosis: A Data-Driven Approach",
          "Oussama ABALI — Temporomandibular Joint Osteoarthritis Pathology and Artificial Intelligence: A Brief Systematic Review",
          "Fatima FATIH — Adaptive optimization of CNN architectures using Tree-structured Parzen Estimator for the diagnosis of lung diseases",
          "Youssef RAFIK — Cardiovascular diseases prediction by machine learning techniques",
          "Ali ARBAOUI — Predicting Autoimmune Flares Using AI and Emotional Analysis",
        ],
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "20:30 – 22:00",
        title: "Dinner break",
        location: "Hotel Restaurants",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
    ],

    day2: [
      {
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
        track: "BENTATA; VOSHMGIR",
        details: [
          "Keynote #4 – Prof. Yassamine BENTATA: The Future of Medicine: Horizons and Limits!. Moderator: Prof. M.A. MADANI",
          "Keynote #5 – Prof. Shermin VOSHMGIR: Web3 at the Intersection of Blockchain, AI & IoT. Moderator: Prof. A. KERKRI",
        ].join(" | "),
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "11:00 – 12:30",
        title: "Session 2: IoT & Edge AI for Smart Systems",
        location: "Parallel Sessions",
        room: "Room 1",
        type: "session",
        chair: "H. Bouali, S. Daoudi and R. Malek",
        papers: [
          "Kishan Reddy BHIMAVARAM — IoT-Based Urban Agriculture Container Farm Design and Implementation for Localized Produce Supply",
          "Vinay DANDAMRAJ — Smart IoT based Hydroponics Farming",
          "Mirthika B — Intelligent Wildlife Monitoring and Repulsion Using YOLOv8-Based Bounding Box",
          "Hicham TIKAOUI — An IoT-Based Comparative Study of Machine Learning and Statistical Models for Energy Consumption Forecasting in Moroccan Buildings",
          "Sidi Omar EL KETTANI — IoT-Edge AI with ISO 42001 Governance for CNC Predictive Maintenance: Multisensor Fusion, Calibration, and Clause-Level Traceability",
          "Chakib TAYBI — A Dual-Band Reconfigurable Antenna Using a PIN Diode for 2.4 GHz and 5 GHz IoT Applications",
          "Belaoufi Yassine — SmartRoute+: Toward Intelligent Road Maintenance Ecosystems through Deep Learning and Mobile Crowdsensing in Morocco",
          "El Miloud AR-REYOUCHI — BAI-PLF: A Blockchain–AI–IoT Framework for Energy-Efficient and Predictive Logistics and Healthcare in Africa",
          "Vighnan KUMAR — AgroHeal – Intelligent Agricultural Assistant for Early Disease Identification and Organic Pesticide Recommendation.",
        ],
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "11:00 – 12:30",
        title: "Session 3: AI for Biomedical Research & Drug Design",
        location: "Parallel Sessions",
        room: "Room 2",
        type: "session",
        chair: "M. Yandouzi and M. Grari",
        papers: [
          "Kaoutar M'RHAR — Exploring Deep Learning for De Novo Drug Design: A Brief Review of Chemical Property Optimization",
          "Oussama GRARI — Harnessing artificial intelligence to tackle biofilm infections: Advances, challenges, and perspectives",
          "El Miloud AR-REYOUCHI — Q2OPT-MED: A Hybrid AI–Heuristic Approach to Healthcare Pathway Optimization",
          "Nazih ASSABBANE - AI in Aesthetic Medicine: From Subjective Judgment to Algorithmic Precision",
          "Nazih ASSABBANE — SVHRSP for Skin Ageing: Bioinformatics Rationale and a Microneedle-Delivered Cosmetic Strategy",
          "Mouad ALAOUI MHAMMEDI — Physics-Constrained Generative Inverse Design for Food-Grade Encapsulation Systems",
          "Manale CHAKIR — An experimental evaluation of GRU-based architecture for ICD-9 code assignment using MIMIC-III clinical notes",
          "Omar SEFRAOUI — Integrating IoT and AI for Smart Medical Systems: Tools, Algorithms, and Challenges in Real-World Healthcare Applications",
          "Alaoui KHADIJA — An extensive categorization of triplestores",
        ],
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "11:00 – 12:30",
        title: "Session 4: Smart Hospitals & Clinical Decision Support",
        location: "Parallel Sessions",
        room: "Room 3",
        type: "session",
        chair: "D. El Moujtahide and M. Zeryouh",
        papers: [
          "N. HAREESH — AI Stethoscope: Revolutionizing Home Healthcare using Machine Learning",
          "Oussama GRARI — Precision and measurement uncertainty verification of procalcitonin assay for AI-enhanced sepsis management in smart hospitals",
          "Dounia EL MOUJTAHIDE — Comparative Analysis of Machine Learning Algorithms for Predicting Creatinine Levels from Blood Parameters",
          "Dounia EL MOUJTAHIDE — Temporal Stability of Biochemical Phenotypes: A Four-Year Analysis of Blood Biomarker Clusters",
          "Sara RAMDANI — Artificial Intelligence and the Internet of Things in Smart Hypertension Management: A State-of-the-Art Review and Future Directions",
          "Yassmine EL MOUSSAOUI — AI-Powered Simulation Platforms for Healthcare Communication Training: Scoping review",
          "Hakim NASAOUI — MedACT-CL: Knowledge-Enhanced Tri-Modal Contrastive Learning for Medical Action Recognition",
          "Youssef BADININI — Public–private partnership for bringing healthcare services closer together and digitizing them: The example of connected mobile medical units.",
          "Nour El Houda BENKADDOUR — KidneyLab 2.0: Innovative Integration of Arduino Technology for Immersive Teaching in Renal Hydrosodic Regulation",
          "Hind MOUMNI — Use and Perception of AI for Psychological Self-Help Among Medical Students in Morocco",
        ],
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "12:30 – 15:30",
        title: "Lunch break",
        location: "Dining Hall",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "15:30 – 17:00",
        title: "Keynotes Block #3 (Healthcare Innovations)",
        location: "Conference Hall",
        type: "keynote",
        details: ["Keynote #6 – Prof. Abdelkrim DAOUDI: Telemedicine in the Eastern region."].join(" | "),
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "17:00 – 20:00",
        title: "Session 5: AI, NLP & Cybersecurity",
        location: "Parallel Sessions",
        room: "Room 1",
        type: "session",
        chair: "A. KERKOUR ELMIAD and R. Naciri",
        papers: [
          "Omar SEFRAOUI — Adaptive AI Pipeline for Real-Time Cybersecurity Alert Classification: A Multi-Dataset Approach",
          "Ayoub JIBOUNI — Similarity Redefined: A Robust Metric for Predicting Links in Complex Networks",
          "Anas CHAHID — An Advanced Conversational AI System for Medical Specialty Triage Featuring a RAG-based Dialogue Engine",
          "Abdelmounaim KERKRI — Bridging Semantic Gaps: Cross-Lingual Alignment Through Contrastive Subword Regularization",
          "Abdelmounaim KERKRI — Stochastic-Approximation Reinforcement Learning for Urban Traffic Lights with Low-Cost Sensing",
          "Abdelmounaim KERKRI — Event-Driven Reinforcement Learning on Streams: Drift-Aware Policy Optimization with Reservoir-Constrained Replay",
        ],
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "17:00 – 20:00",
        title: "Session 6: Energy Management & Industrial Optimization",
        location: "Parallel Sessions",
        room: "Room 2",
        type: "session",
        chair: "M.A. Kassmi and D. Bahia",
        papers: [
          "Sidi Omar EL KETTANI — AI-Powered Energy Management Diagnostics: A Comprehensive Framework for Industrial Predictive Maintenance with Large Language Model Integration",
          "Sidi Omar EL KETTANI — Enhanced AI-Powered Energy Management Diagnostics: Expert System Integration with LLM for Predictive Maintenance",
          "Mohammed Ali ARBAOUI — Preliminary design choices for a Green Hydrogen production system",
          "Ali ARBAOUI — Advanced Control Study of a Heat Exchanger: Efficiency Modeling and Analysis for Control Optimization",
          "Hicham TIKAOUI — Vision-Based Angle Detection for Industrial Quality Inspection",
          "Hicham TIKAOUI — Few-Shot Learning Hybrid Approach for Visual Quality Inspection with Limited Data",
          "Hanae EL FAHFOUHI — Enhancing Solar Radiation Forecasting with Informer Architecture and Bayesian Hyperparameters Selection",
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
        time: "09:00 – 12:00",
        title: "Session 7: AI in Education, Ethics & Society",
        location: "Parallel Sessions",
        room: "Room 1",
        type: "session",
        chair: "A. El Mezouari, M. Benhaddou and J. Oubaha",
        papers: [
          "Nouhaila CHAREF — Artificial Intelligence in Medical Writing: A Systematic Review of Current Practices",
          "Anas TALHAOUI — Automated Role Classification in Security Policies: A Comparative Study of NLP Approaches",
          "Somaia EL GHAZI — Artificial Intelligence in Medical Education: An Umbrella Review",
          "Manal BOUDIH — NLP-based exploratory study of interviews on blood donation awareness campaigns: evidence from the University of Oujda (2023–2024)",
          "Hicham ARRID — Modeling the Impact of Patient Experience Attributes on Satisfaction: Generalized Additive Models Approach",
          "Boulerhcha BRAHIM — Sentiment analysis in social media with artificial intelligence",
          "Hasnae AMNOUN — AI and Big Data in Marketing Decision-Making: A PRISMA-Guided Systematic Review of Scopus-Indexed Studies",
          "BOUBCHEUR Hanane — Ethical and Pedagogical Dimensions of AI-Assisted Mathematics Teaching for Students with Hearing and Speech Impairments",
          "Kaoutar GHOMARI — Electrolyte Disorders in Emergency and Intensive Care Units at Mohammed VI University Hospital Center Oujda: Prevalence, Seasonality and Associated Factors (Year 2022)",
          "Bilal BOURKHA — Artificial intelligence and hospital management: between strategic imitation and innovation – The case of chain clinics in Morocco",
          "Bilal BOURKHA — Artificial intelligence in hospital management: balancing strategic imitation and contextual innovation in moroccan private hospitals",
          
        ],
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "09:00 – 12:00",
        title: "Session 8: Smart Cities, Mobility & Environment",
        location: "Parallel Sessions",
        room: "Room 2",
        type: "session",
        chair: "H. Barboucha and E.M. Ar-Reyouchi",
        papers: [
          "Asmae EL MEZOUARI — AI-Driven Radiomics in Oncology: From Early Detection to Personalized Treatment",
          "Meryem ELKADI — Groundwater Level Prediction in the Triffa Plain (Morocco) Using Machine Learning Approaches",
          "Hanae SENBA — Travel Time Optimization in the Old Medina of Fez",
          "Rohit SHITOLE — YOLOv9 Meets CBAM: A Real-Time Smart Traffic Signal System for Emergency Response Optimization",
          "Loubna AZIZI — Toward the Integration of Urban Green Spaces and Smart Technologies: An Approach to Strengthening the Sustainability of Smart Cities",
          "Elmehdi HASSANI — Towards a Paperless Environment: AI for Smart Invoice Processing",
          "Meryem BENKADDOUR — Verification of the First Principle through Joule's Experiments: Determining the Calorie Equivalent in Joules (J) Using Computer-Assisted Experimentation (CAEx)",
          "Salwa KHALYL — An Empirical Comparison of Topic Models: LDA, NMF, and BERTopic Applied to Hotel Customer Reviews",
        ],
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "12:00",
        title: "Closing Ceremony",
        location: "Conference Hall",
        type: "closing",
        icon: <Presentation className="h-5 w-5" />,
      },
    ],
  }

  // ======= OUVRIR LE PDF HÉBERGÉ (au lieu d'exporter côté client) =======
  // Placez votre fichier dans /public : public/ICSMAI2025_Program_Combined_v2__A4.pdf
  // Il sera servi à /ICSMAI2025_Program_Combined_v2__A4.pdf
  const PDF_URL =
    process.env.NEXT_PUBLIC_PROGRAM_PDF_URL || "/ICSMAI2025_Program_Timeline_Modern__V2.pdf"
    //process.env.NEXT_PUBLIC_PROGRAM_PDF_URL || "/ICSMAI2025_Program_Combined_v2__A4.pdf"

  const exportPdf = () => {
    const w = window.open(PDF_URL, "_blank", "noopener,noreferrer")
    if (!w) window.location.href = PDF_URL
  }
  // =======================================================================

  return (
    <section id="program" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6" ref={printRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Conference Program
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Schedule of Events</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore the confirmed keynotes, technical sessions, special tracks and workshops for ICSMAI 2025.
          </p>
          {/* Legend */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            {(
              [
                "keynote",
                "session",
                "workshop",
                "panel",
                "ceremony",
                "registration",
                "break",
                "social",
                "closing",
              ] as ItemType["type"][]
            ).map((t) => (
              <span key={t} className={`px-2 py-1 rounded-md text-xs ${typeStyles[t]}`}>
                {TypeLabel[t]}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex items-center justify-end mb-3 gap-2">
          <Button variant="default" size="sm" onClick={exportPdf}>
            Exporter en PDF
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setExpandAll(true)
              setAccordionNonce((n) => n + 1)
            }}
          >
            Tout dérouler
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setExpandAll(false)
              setAccordionNonce((n) => n + 1)
            }}
          >
            Tout replier
          </Button>
        </div>

        {/* Printable program */}
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
                      <CardDescription>
                        All times are in Morocco Standard Time (Africa/Casablanca, UTC+1)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {blocks.map(([time, items]) => (
                          <Card key={`${day.id}-${time}-${accordionNonce}`} className="border-muted">
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
                                (items[0].track ||
                                  items[0].chair ||
                                  items[0].details ||
                                  (items[0].papers && items[0].papers.length > 0)) && (
                                  <Accordion
                                    type="multiple"
                                    defaultValue={expandAll ? ["details"] : []}
                                    className="w-full mt-1"
                                  >
                                    <AccordionItem value="details">
                                      <AccordionTrigger className="text-sm">Details</AccordionTrigger>
                                      <AccordionContent>
                                        <div className="space-y-2">
                                          {items[0].track && (
                                            <div className="text-sm text-muted-foreground">
                                              <span className="font-medium">Track:</span> {items[0].track}
                                            </div>
                                          )}
                                          {items[0].chair && (
                                            <div className="text-sm text-muted-foreground">
                                              <span className="font-medium">Chair:</span> {items[0].chair}
                                            </div>
                                          )}
                                          {items[0].details && (
                                            <p className="text-sm text-muted-foreground">{items[0].details}</p>
                                          )}
                                          {items[0].papers && items[0].papers.length > 0 && (
                                            <div className="mt-2">
                                              <div className="text-sm font-medium">Papers</div>
                                              <ul className="list-disc ms-5 text-sm text-muted-foreground">
                                                {items[0].papers.map((p, i) => (
                                                  <li key={i}>{p}</li>
                                                ))}
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
                                        <span className={`px-2 py-1 rounded-md text-[11px] ${typeStyles[it.type]}`}>
                                          {TypeLabel[it.type]}
                                        </span>
                                      </div>

                                      {(it.track || it.chair || it.details || (it.papers && it.papers.length > 0)) && (
                                        <Accordion
                                          type="multiple"
                                          defaultValue={expandAll ? [`details-${idx}`] : []}
                                          className="mt-2"
                                        >
                                          <AccordionItem value={`details-${idx}`}>
                                            <AccordionTrigger className="text-xs">Details</AccordionTrigger>
                                            <AccordionContent>
                                              <div className="space-y-1">
                                                {it.track && (
                                                  <div className="text-xs text-muted-foreground">
                                                    <span className="font-medium">Track:</span> {it.track}
                                                  </div>
                                                )}
                                                {it.chair && (
                                                  <div className="text-xs text-muted-foreground">
                                                    <span className="font-medium">Chair:</span> {it.chair}
                                                  </div>
                                                )}
                                                {it.details && (
                                                  <p className="text-xs text-muted-foreground">{it.details}</p>
                                                )}
                                                {it.papers && it.papers.length > 0 && (
                                                  <div>
                                                    <div className="text-xs font-medium">Papers</div>
                                                    <ul className="list-disc ms-5 text-xs text-muted-foreground">
                                                      {it.papers.map((p, i) => (
                                                        <li key={i}>{p}</li>
                                                      ))}
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
    </section>
  )
}
