import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function Layout ({children}){
	return(
          <div style={{ width: '100%', minHeight: '100vh' }}>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div> 
)}
