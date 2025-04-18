'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white w-full shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Conférence</div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-600">À propos</a>
          <a href="#keynotes" className="hover:text-blue-600">Keynotes</a>
          <a href="#topics" className="hover:text-blue-600">Thèmes</a>
          <a href="#submission" className="hover:text-blue-600">Soumission</a>
          <a href="#dates" className="hover:text-blue-600">Dates</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
          <a href="#about">À propos</a>
          <a href="#keynotes">Keynotes</a>
          <a href="#topics">Thèmes</a>
          <a href="#submission">Soumission</a>
          <a href="#dates">Dates</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  )
}
