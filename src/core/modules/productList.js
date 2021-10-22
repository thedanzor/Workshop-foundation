import React from 'react'

// core
import ProductCard from '../../core/compositions/productCard'

// modules
const ProductListModule = ({ data }) => {
  const [activeProduct, setActiveProduct] = React.useState(null)

  console.log('activeProduct', activeProduct)

  return <>
    {
      data.map((productItem, index) => {
        return <ProductCard
          key={productItem.id}
          title={productItem.title}
          description={productItem.description}
          handleClick={() => {
            setActiveProduct(productItem)
          }}
        />
      })
    }
  </>
}
export default ProductListModule