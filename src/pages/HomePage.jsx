import React from 'react'
import HeroSection from '../component/HeroSection'
import LanguageSlider from '../component/LanguageSlider'
import Olympaid from '../component/Olympaid'
import WorkSection from '../component/WorkSection'

function HomePage() {
  return (
    <div className=''>
      <HeroSection />
      <LanguageSlider />
      <Olympaid />
      <WorkSection />
    </div>
  )
}

export default HomePage
