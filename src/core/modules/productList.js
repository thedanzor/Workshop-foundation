import React from 'react'
import styled from 'styled-components'

// core
import ProductCard from '../../core/compositions/productCard'

// Styling
const ProductListWrapper = styled.div`
  > div {
    width: 25%;
    display: inline-block;
    vertical-align: top;

    ${props => props.variant && props.variant === '5by5'
      ? 'width: 20%' 
      : ''
    }
  }  
`

// modules
const ProductListModule = ({ data, variant, handleProductClick }) => {
  return <ProductListWrapper variant={variant}>
    {
      data.map((productItem, index) => {
        return <ProductCard
          key={productItem.id}
          title={productItem.title}
          description={productItem.description}
          handleClick={() => {
            handleProductClick(productItem)
          }}
        />
      })
    }
  </ProductListWrapper>
}
export default ProductListModule