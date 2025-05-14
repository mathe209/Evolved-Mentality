import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">EM</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/mentorship" className="hover:text-gray-400">Mentorship</a></li>
          <li><a href="/about" className="hover:text-gray-400">About</a></li>
          <li><a href="/event" className="hover:text-gray-400">Events</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2" onClick={() => setOpen(!open)}>
        <span className="text-sm uppercase tracking-wide">Menu</span>
          {open ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden bg-black px-4 pb-4 space-y-2">
          <li><a href="/" className="block hover:text-gray-400">Home</a></li>
          <li><a href="/mentorship" className="block hover:text-gray-400">Mentorship</a></li>
          <li><a href="/about" className="block hover:text-gray-400">About</a></li>
          <li><a href="/event" className="block hover:text-gray-400">Events</a></li>
        </ul>
      )}
    </nav>
  );
}
