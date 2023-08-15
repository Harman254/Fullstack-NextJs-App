import Navbar from '@/components/navbar/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'
import { ThemeProvider } from '@/context/Themecontext'
import AuthProvider from '../components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gerich Code Academy',
  description: 'Building the next generation of tech enthusiasts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
        <div className='container'>
        <Navbar />{children}
      <Footer />
      

        </div>
        </AuthProvider>
        </ThemeProvider>
      
      </body>
    </html>
  )
}
