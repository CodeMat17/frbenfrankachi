"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-scroll";

const links = [
  { to: "hero", label: "HOME" },
  { to: "about", label: "ABOUT ME" },
  { to: "experience", label: "EXPERIENCE & EDUCATION" },
  { to: "gallery", label: "GALLERY" },
  { to: "others", label: "OTHERS" },
];

const MobileMenu = () => {
  return (
    <div className='md:hidden'>
      {" "}
      <Menu as='div' className='relative inline-block text-left'>
        {({ open }) => (
          <>
            <Menu.Button
              aria-label='toggle mobile menu'
              className={`text-4xl transition transform duration-500 inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 p-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ${
                open ? "rotate-[360deg] text-red-700" : "text-[#D76F30]"
              }`}>
              {open ? (
                <MdOutlineClose
                  aria-hidden='true'
                  aria-label='mobile close button'
                />
              ) : (
                <BiMenuAltRight
                  aria-hidden='true'
                  aria-label='mobile menu button'
                />
              )}
            </Menu.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'>
              <Menu.Items className='absolute right-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-xl bg-[#8f2e85]/80 p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='px-1 py-1 space-y-2'>
                  {links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}>
                      <Menu.Item as={Fragment}>
                        {({ active }) => (
                          <button
                            className={`w-full transition-colors duration-500 ease-in mb-2 flex px-4 py-3 text-xl font-medium rounded-xl ${
                              active
                                ? "bg-yellow-600 text-[#8f2e85]"
                                : "bg-[#8f2e85] text-white"
                            }`}>
                            {link.label}
                          </button>
                        )}
                      </Menu.Item>
                    </Link>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default MobileMenu;
