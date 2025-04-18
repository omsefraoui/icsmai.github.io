'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Conférence</div>

        {/* Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="#about">À propos</Link>
          <Link href="#keynotes">Keynotes</Link>
          <Link href="#topics">Thèmes</Link>
          <Link href="#submission">Soumission</Link>
          <Link href="#dates">Dates</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-3 bg-white shadow">
          <Link href="#about" onClick={() => setIsOpen(false)}>À propos</Link>
          <Link href="#keynotes" onClick={() => setIsOpen(false)}>Keynotes</Link>
          <Link href="#topics" onClick={() => setIsOpen(false)}>Thèmes</Link>
          <Link href="#submission" onClick={() => setIsOpen(false)}>Soumission</Link>
          <Link href="#dates" onClick={() => setIsOpen(false)}>Dates</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
