import Image from "next/image";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const NavBar = () => {
  return (
    <div className='px-4 py-2 sticky top-0 z-50 bg-[#521d4d]'>
      <div className='max-w-6xl mx-auto flex items-center justify-between'>
        <div>
          <Image
            alt='logo'
            priority
            width={50}
            height={50}
            src='/logo.webp'
            className='rounded-full'
          />
        </div>
        <div>
          <MobileMenu />
          <DesktopMenu />
       </div>
      </div>
    </div>
  );
};

export default NavBar;
