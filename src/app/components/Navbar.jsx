// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-pink-100 px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-600">HerFlow</h1>
      <ul className="flex space-x-6 text-pink-700 font-medium">
        <li><a href="#" className="hover:text-pink-900">Home</a></li>
        <li><a href="#" className="hover:text-pink-900">About</a></li>
        <li><a href="#" className="hover:text-pink-900">Features</a></li>
        <li><a href="#" className="hover:text-pink-900">Contact</a></li>
      </ul>
    </nav>
  );
}
