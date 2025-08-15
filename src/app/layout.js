// src/app/layout.js

import Navbar from './components/Navbar' // if in same folder level
import Footer from './components/footer'
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
        {children}
        <Footer />
      </body>
    </html>
  )
}

