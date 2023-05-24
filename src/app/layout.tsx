import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


export const metadata = {
  title: 'JoaquinIDLT',
  description: 'Portfolio created by Joaquin Ignacio De la Torre',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-full bg-sky-950'>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
