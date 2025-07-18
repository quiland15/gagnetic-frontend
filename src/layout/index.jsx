import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function Layout ({children}){
	return(
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div> 
)}
