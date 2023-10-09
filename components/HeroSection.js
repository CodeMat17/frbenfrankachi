import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiMailSend,
} from "react-icons/bi";
import {FaXTwitter} from 'react-icons/fa6'


const HeroSection = () => {
  return (
    <div
      id='hero'
      className='w-full bg-[#521d4d] pt-6 pb-12 px-6 flex flex-col md:flex-row items-center justify-around gap-8'>
      <div className='wfull md:w-[50%]'>
        <p className='text-white/60 text-xl  tracking-widest font-medium'>
          Welcome, I am
        </p>
        <h1 className='text-white text-5xl lg:text-6xl font-semibold py-2'>
          Rev. Fr. Benjamin Achi
        </h1>
        <h2 className='text-yellow-600 text-3xl font-medium'>
          Director, Directorate of Communications,{" "}
          <span className='text-white/60'>
            {" "}
            Godfrey Okoye University, Enugu
          </span>
        </h2>
        <div className='pt-6 flex gap-6'>
          <Link href='mailto:benfrankachi@gmail.com'>
            <div className='transition-all duration-300 ease-in bg-yellow-600/10 hover:bg-yellow-600/40 w-[50px] h-[50px] rounded-full flex items-center justify-center '>
              <BiMailSend className='text-yellow-600 text-3xl' />
            </div>
          </Link>
          <Link href='https://wa.me/2348036765992' target='_blank'>
            <div className='transition-all duration-300 ease-in bg-yellow-600/10 hover:bg-yellow-600/40 w-[50px] h-[50px] rounded-full flex items-center justify-center '>
              <BiLogoWhatsapp className='text-yellow-600 text-3xl' />
            </div>
          </Link>
          <Link href='https://twitter.com/BenjaminAchi75' target='_blank'>
            <div className='transition-all duration-300 ease-in bg-yellow-600/10 hover:bg-yellow-600/40 w-[50px] h-[50px] rounded-full flex items-center justify-center '>
              <FaXTwitter className='text-yellow-600 text-2xl' />
            </div>
          </Link>
          <Link href='https://facebook.com/benfrankachi' target='_blank'>
            <div className='transition-all duration-300 ease-in bg-yellow-600/10 hover:bg-yellow-600/40 w-[50px] h-[50px] rounded-full flex items-center justify-center '>
              <BiLogoFacebook className='text-yellow-600 text-3xl' />
            </div>
          </Link>
          <Link href='https://www.instagram.com/benfrankachi' target='_blank'>
            <div className='transition-all duration-300 ease-in bg-yellow-600/10 hover:bg-yellow-600/40 w-[50px] h-[50px] rounded-full flex items-center justify-center '>
              <BiLogoInstagram className='text-yellow-600 text-3xl' />
            </div>
          </Link>
        </div>
      </div>

      <div className='relative w-[350px] h-[391px] overflow-hidden rounded-full'>
        <Image alt='logo' fill priority src='/fr-achi.webp' />
      </div>
    </div>
  );
};

export default HeroSection;
