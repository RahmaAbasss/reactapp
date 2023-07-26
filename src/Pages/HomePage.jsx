import React from 'react'
import MainSlider from '../components/MainSlider/MainSlider'
import CategorySlider from '../components/CategorySlider/CategorySlider'
import Products from '../components/Products/Products'

export default function HomePage() {
  return (
    <>
      <MainSlider/>
      <CategorySlider/>
      <Products/>
    </>
  )
}
