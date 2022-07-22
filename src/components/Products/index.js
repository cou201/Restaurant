import React from 'react'
import { ProductBottom, ProductCard, ProductDesc, ProductImg, ProductInfo, ProductPrice, ProductsContainer, ProductsWeadding, ProductsWrapper, ProductTitle } from './ProductsElements'

const Products = ({heading, data}) => {
  return (
    <ProductsContainer>
        <ProductsWeadding>{heading}</ProductsWeadding>
        <ProductsWrapper>
            {data.map((product, index) => {
              return (
                <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt}/>
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductBottom>{product.button}</ProductBottom>
                </ProductInfo>
                </ProductCard>
              )
            })}
        </ProductsWrapper>
    </ProductsContainer>
  )
}

export default Products