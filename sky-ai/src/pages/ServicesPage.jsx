import React from 'react'
import Services from '../components/Services'
import Management from '../components/Management'
import ServicesHero from '../components/ServicesHero'

const ServicesPage = () => {
  return (
    <div>
      <ServicesHero/>
      <Services/>
      <Management/>
    </div>
  )
}

export default ServicesPage
