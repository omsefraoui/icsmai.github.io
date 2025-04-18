'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      {/* Bouton hamburger visible sur mobile */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        ☰
      </button>

      {/* Menu principal */}
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <Link href="#about" className="menuItem" onClick={() => setMenuOpen(false)}>À propos</Link>
        <Link href="#keynotes" className="menuItem" onClick={() => setMenuOpen(false)}>Keynotes</Link>
        <Link href="#topics" className="menuItem" onClick={() => setMenuOpen(false)}>Thèmes</Link>
        <Link href="#submission" className="menuItem" onClick={() => setMenuOpen(false)}>Soumission</Link>
        <Link href="#dates" className="menuItem" onClick={() => setMenuOpen(false)}>Dates</Link>
        <Link href="#contact" className="menuItem" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  )
}
