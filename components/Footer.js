import Link from "next/link"

const Footer = () => {
  return (
    <div className='bg-gray-900 px-4 py-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-white text-center'>
          &copy; Rev. Fr. Benjamin Achi, 2023. All Rights Reserved.
        </h2>
        <p className='mt-4 text-sm text-center text-white/60'>
          This profile page is designed and developed by{" "}
          <Link
            href='https://soft-lutions.com.ng'
            target='_blank'
            className='text-blue-600'>
            CodeMat Soft-lutions
          </Link>
          . For business talk, click{" "}
          <Link
            href='https://wa.me/2348063856120'
            target='_blank'
            className='text-blue-600'>
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Footer