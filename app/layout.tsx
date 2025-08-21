import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeContext'
// import { Chatbot } from '@/components/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RealEstate - Find Your Dream Property',
  description: 'Discover amazing properties for rent and sale. Professional real estate services with expert guidance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
          {/* <Chatbot/> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
