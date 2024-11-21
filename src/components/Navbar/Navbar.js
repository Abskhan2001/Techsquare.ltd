import Image from 'next/image';
import logo from '../../assets/logo.png';
import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="flex items-center rounded-xl border justify-between w-[80%] mx-auto h-nav bg-primary text-white px-4 font-custom"
      style={{
        backgroundColor: 'var(--background)', 
        color: 'var(--foreground)', 
      }}
    >
      <div className="logo">
        <Image 
          src={logo} 
          alt="Company Logo"  
          width={150} 
          height={50} 
        />
      </div>
      <ul className="flex gap-8">
        <li className="hover:custom-hover cursor-pointer">About</li>
        <li className="hover:custom-hover cursor-pointer">Services</li>
        <li className="hover:custom-hover cursor-pointer">Team</li>
        <li className="hover:custom-hover cursor-pointer">Blog</li>
        <li className="hover:custom-hover cursor-pointer">Contact</li>
        <li className="hover:custom-hover cursor-pointer">Career</li>
      </ul>
      <div className="search">
        <i className="fas fa-search"></i>
      </div>
    </nav>
  );
};

export default Navbar;
