import NavBar from '@/components/NavBar'
import './globals.css'
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({ subsets: ['latin'] })
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Rev. Fr. Benjamin Achi",
  description: "This is the profile page of Rev. Fr. Benjamin Achi.",
  openGraph: {
    title: "Rev. Fr. Benjamin Achi",
    description: "This is the profile page of Rev. Fr. Benjamin Achi.",
    siteName: "Rev. Fr. Benjamin Achi Profile Page",
    url: "https://frbenfrankachi.vercel.app",
    images: [
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1696803255/logos/frbenachi.webp",
        width: 369,
        height: 403,
      },
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1696803255/logos/frbenachi.webp",
        width: 369,
        height: 403,
        alt: "Rev. Fr. Benjamin Achi",
      },
    ],
    locale: "en_US",
    type: "website",
    authors: [ 'Matthew Chukwu'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={urbanist.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
