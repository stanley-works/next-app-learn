import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './NavBar'
import AuthProvider from './auth/Provider';
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  openGraph:{
    title:"Our web",
    description:"yoyo"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" data-theme="winter">
      <Script async src="alert('aaa')"/>
      <body className={inter.className}>
        <AuthProvider>
          <>
            <Navigation/>
            <main className='p-5'>{children}</main>
          </>
        </AuthProvider>
      </body>
    </html>
    
  )
}