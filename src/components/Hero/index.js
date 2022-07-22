import React, {useState}from 'react'
import NavBar from '../NavBar'
import SiderBar from '../SiderBar'
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from './HeroElements'


const Hero = () => {
   const [isOpen, setIsOpen] = useState(false)

   const toggle = () => {
    setIsOpen(!isOpen)
   }

  return (
   <HeroContainer>
    <NavBar toggle={toggle}/>
    <SiderBar isOpen={isOpen} toggle={toggle}/>
    <HeroContent>
      <HeroItems>
        <HeroH1>Pizzas</HeroH1>
        <HeroP>Lista en 30 Minutos O Menos</HeroP>
        <HeroBtn>Pide Ahora!!</HeroBtn>
      </HeroItems>
    </HeroContent>
   </HeroContainer>
  )
}

export default Hero