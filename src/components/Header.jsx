import React from 'react'

export default function Header () {
	return(
          <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Gagnetic</h1>
            <nav className="space-x-4">
             <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
             <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
             <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
          </header> 
)}
