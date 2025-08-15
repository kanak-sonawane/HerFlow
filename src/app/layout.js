// src/app/layout.js

import Navbar from './components/Navbar'
import Footer from './components/footer'
import Hero from './components/hero'
import Features from './components/features'
import './globals.css'

export const metadata = {
  title: 'HerFlow',
  description: 'Period care & wellness for all.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pink-50 text-pink-900">
        <Navbar />
        <Hero />          {/* Hero Section */}
        <Features />      {/* Features Section */}
        {children}        {/* Page-specific content */}
        <Footer />
      </body>
    </html>
  )
}
