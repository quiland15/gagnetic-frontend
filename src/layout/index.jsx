import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function Layout ({children}){
	return(
          <div>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div> 
)}
