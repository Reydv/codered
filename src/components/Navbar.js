import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 bg-gradient-to-b from-black via-black/60 to-transparent w-full pt-4 sm:pt-6 z-[999] sm:backdrop-blur-xs">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-[#D0D0D0] text-[0.9rem] sm:text-[22px] tracking-[0.1em] hover:opacity-70 transition-opacity duration-300">
          Code
          <span className="text-accent">Red</span>
        </div>

        {/* Hamburger */}
        <button
          className="sm:hidden text-[#D0D0D0] focus:outline-none transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop */}
        <ul className="hidden sm:flex space-x-6 text-[0.9rem] uppercase">
          <li>
            <a
              href="/aturan"
              className="ext-[#D0D0D0] no-underline tracking-[0.1em] hover:opacity-70 transition-opacity duration-300"
            >
              Aturan
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[#D0D0D0] no-underline tracking-[0.1em] hover:opacity-70 transition-opacity duration-300"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/profil"
              className="text-[#D0D0D0] no-underline tracking-[0.1em] hover:opacity-70 transition-opacity duration-300"
            >
              Profil Web
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div
        className={`sm:hidden bg-transparent backdrop-blur-sm mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[200px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-[0.9rem] uppercase px-4 pt-6 mb-[10px]">
          <li>
            <a
              href="/aturan"
              className="block w-full text-[#D0D0D0] no-underline tracking-[0.1em] hover:opacity-70 transition-opacity duration-300 py-2"
            >
              Aturan
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block w-full text-[#D0D0D0] no-underline tracking-[0.1em] hover:opacity-70 transition-opacity duration-300 py-2"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/profil"
              className="block w-full text-[#D0D0D0] no-underline tracking-[0.1em] hover:opacity-70 transition-opacity duration-300 py-2"
            >
              Profil
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
