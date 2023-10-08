import React from 'react'
import PageTitle from './PageTitle';
import Link from 'next/link';
import { BiLogoFacebook, BiLogoInstagram, BiLogoWhatsapp, BiMailSend } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';

const ContactMe = () => {
  return (
    <div id='about' className='bg-purple-50  text-[#521d4d] px-4 py-12'>
      <PageTitle title=' Contact ME' />

      <div className='pt-8 max-w-lg mx-auto flex flex-col gap-12'>
        <div className='flex flex-col items-center gap-6'>
          <p className='text-xl font-medium'>Contact me via</p>
          <div className='flex gap-8'>
            <Link href='mailto:benfrankachi@gmail.com'>
              <div className='transition-all duration-300 ease-in bg-yellow-600/10 hover:bg-yellow-600/40 w-[50px] h-[50px] rounded-full flex items-center justify-center '>
                <BiMailSend className='text-yellow-600 text-4xl' />
              </div>
            </Link>
            <Link href='https://wa.me/2348063856120' target='_blank'>
              <div className='transition-all duration-300 ease-in bg-yellow-600/10 hover:bg-yellow-600/40 w-[50px] h-[50px] rounded-full flex items-center justify-center '>
                <BiLogoWhatsapp className='text-yellow-600 text-4xl' />
              </div>
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-center gap-6'>
          <p className='text-xl font-medium'>Follow me on</p>
          <div className='flex gap-8'>
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
      </div>
    </div>
  );
}

export default ContactMe