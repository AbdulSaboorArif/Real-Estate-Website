import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Properties from '@/components/Properties'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Hero />
      <Features />
       <Properties />
      <About />
      {/* <Testimonials /> */}
      <Contact /> 
      <Footer />
    </main>
  )
}

