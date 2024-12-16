import Image from 'next/image';
import logo from '../../assets/TechSquare_logo.png';
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="flex items-center rounded-xl border justify-between max-w-[80%] w-full mx-auto h-nav text-white px-4 font-custom relative"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      {/* Logo */}
      <div className="logo p-2">
        <Link href="/">
          <Image
            src={logo}
            alt="Company Logo"
            width={150}
            height={50}
          />
        </Link>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden">
        <button
          className="focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i
            className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}
            style={{
              color: isMobileMenuOpen ? '#FF5733' : '#3498DB', // Toggle between colors
              transition: 'color 0.3s ease',
            }}
          />
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex text-sm gap-4 sm:gap-8">
        {['About', 'Services', 'Team', 'Blog', 'Contact', 'Career'].map((item) => (
          <li
            key={item}
            className="hover:text-yellow-500 cursor-pointer transition-colors duration-300"
          >
            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <ul
          className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 z-50"
          style={{
            backgroundColor: '#1A1A1A',
          }}
        >
          {['About', 'Services', 'Team', 'Blog', 'Contact', 'Career'].map((item) => (
            <li
              key={item}
              className="hover:text-green-400 text-white cursor-pointer transition-colors duration-300"
              style={{
                color: '#FFFFFF', // Default link color
              }}
            >
              <Link href={`/${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
