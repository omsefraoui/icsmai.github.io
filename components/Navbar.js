'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Conférence</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="#about">À propos</Link>
          <Link href="#keynotes">Keynotes</Link>
          <Link href="#topics">Thèmes</Link>
          <Link href="#submission">Soumission</Link>
          <Link href="#dates">Dates</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Hamburger button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu mobile">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col space-y-3 shadow">
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
