import React from 'react'
import { CloseIcon, Icon, MenuSiderBar, SiderBarContainer, SiderBarLink, SiderBarRoute, SliderBtnWrapper } from './SideBarElements'

const SiderBar = ({isOpen, toggle}) => {
  return (
   <SiderBarContainer isOpen={isOpen} toggle={toggle}> 
    <Icon onClick={toggle}>
        <CloseIcon/>
    </Icon>
    <MenuSiderBar>
        <SiderBarLink to = "/">Pizzas</SiderBarLink>
        <SiderBarLink to = "/">Desserts</SiderBarLink>
        <SiderBarLink to = "/">Full Menu</SiderBarLink>
    </MenuSiderBar>
    <SliderBtnWrapper>
        <SiderBarRoute to = "/">Ordena Ahora!</SiderBarRoute>
    </SliderBtnWrapper>
   </SiderBarContainer>
  )
}

export default SiderBar