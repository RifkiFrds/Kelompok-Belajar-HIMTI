import React from 'react'
import HeroSection from './components/Molecules/HeroSection'
import Card from './components/Molecules/Card'
import Theme from './components/Atoms/Theme'
import ButtonPrimary from './components/Atoms/ButtonPrimary'

function App() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center gap-8 p-8">
      <h1 className="text-4xl font-bold mb-4">Portofolio React - Satu Halaman</h1>
      <Theme />
      <HeroSection />
      <Card />
      <ButtonPrimary> Klik Saya </ButtonPrimary>
    </div>
  )
}

export default App
