'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MonSite</div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600">Accueil</a>
          <a href="#" className="hover:text-blue-600">À propos</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Menu hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-2 space-y-2">
          <a href="#" className="hover:text-blue-600">Accueil</a>
          <a href="#" className="hover:text-blue-600">À propos</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  )
}
