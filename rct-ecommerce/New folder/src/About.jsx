import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './Context/ProductContext';

const About = () => {

  const {myName}= useProductContext(); 

  const data={
    name:'Saurav Ecommerce'
  }
  return (
    <>
    {myName}
    <HeroSection myData={data} />
    </>
  )
} 

export default About