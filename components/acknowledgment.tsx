"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


import React from 'react';
import Head from 'next/head';

const Acknowledgment = () => {
  return (
    <>
      <Head>
        <title>Acknowledgment – ICSMAI 2025</title>
        <meta name="description" content="Acknowledgment for ICSMAI 2025 submissions" />
      </Head>
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Acknowledgment</h1>
        <p>
          By submitting to ICSMAI 2025, authors confirm that their work is original, has not been published previously,
          and is not under consideration elsewhere. Authors agree to abide by the ethical standards and review process
          of the conference.
        </p>
      </main>
    </>
  );
};

export default Acknowledgment;
