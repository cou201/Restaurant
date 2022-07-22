import React from 'react'
import { FeatureButton, FeatureContainer } from './FeatureElements'

const Feature = () => {
  return (
    <FeatureContainer>
        <h1>Pasta</h1>
        <p>Pasta 4 quesos de la casa </p>
        <FeatureButton>Ordena Ahora</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature