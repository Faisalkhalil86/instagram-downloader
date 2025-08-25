import { useState } from 'react'
import './App.css'
import HeroSection from './components/Hero'
import Download from './components/Download'
import HowToDownload from './components/HowToDownload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
      <Download/>
      <HowToDownload />
    </>
  )
}

export default App
