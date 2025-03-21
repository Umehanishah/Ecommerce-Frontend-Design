import React from 'react'
import Subscription from './components/subscription'
import Suppliers from './components/suppliers'
import Services from './components/services'
import Products from './components/products'
import Inquiry from './components/inquiry'
import Items from './components/items'
import Deals from './components/deals'
import Hero from './components/hero'

const page = () => {
  return (
    <div>
      <Hero/>
      <Deals/>
      <Items/>
      <Inquiry/>
      <Products/>
      <Services/>
      <Suppliers/>
      <Subscription/>
    </div>
  )
}

export default page