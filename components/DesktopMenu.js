'use client'

import { Link } from "react-scroll";

const links = [
  { to: "hero", label: "HOME" },
  { to: "about", label: "ABOUT ME" },
  { to: "experience", label: "EXPERIENCE & EDUCATION" },
  { to: "gallery", label: "GALLERY" },
  { to: "others", label: "OTHERS" },
];

const DesktopMenu = () => {
  return (
    <div className='hidden md:flex '>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='transition-colors duration-300 ease-in text-yellow-600 hover:bg-black/20 hover:text-white px-2.5 py-1.5 rounded-xl whitespace-nowrap font-medium text-xl cursor-pointer'>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default DesktopMenu;
