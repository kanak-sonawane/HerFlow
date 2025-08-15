// src/app/layout.js
import Navbar from './components/Navbar';
import Footer from './components/footer';
import './globals.css';

export const metadata = {
  title: 'HerFlow',
  description: 'Period care & wellness for all.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pink-50 text-pink-900">
        <Navbar />
        {children}   {/* Page-specific content */}
        <Footer />
      </body>
    </html>
  );
}
