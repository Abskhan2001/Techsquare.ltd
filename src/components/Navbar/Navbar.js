import Image from 'next/image';
import logo from '../../assets/TechSquare_logo.png';
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <nav
      className="flex items-center rounded-xl border justify-between w-[80%] mx-auto h-nav  text-white px-4 font-custom"
      style={{
        backgroundColor: 'var(--background)', 
        color: 'var(--foreground)', 
      }}
    >
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
      <ul className="flex text-14 gap-8">
        <li className="hover:custom-hover cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:custom-hover cursor-pointer">
          <Link href="/services">Services</Link>
        </li>
        <li className="hover:custom-hover cursor-pointer">
          <Link href="/team">Team</Link>
        </li>
        <li className="hover:custom-hover cursor-pointer">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="hover:custom-hover cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:custom-hover cursor-pointer">
          <Link href="/career">Career</Link>
        </li>
      </ul>
      {/* Search Icon */}
      <div className="search mr-5">
        <button className="focus:outline-none">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
