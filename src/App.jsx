import { useState } from 'react'
import './App.css'
import HeroSection from './components/Hero'
import Download from './components/Download'
import HowToDownload from './components/HowToDownload'
import InstagramDownloader from './components/Downloader'
import FAQ from './components/Faq'
import Footer from './components/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
      <Download/>
      <HowToDownload />
      <InstagramDownloader />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
