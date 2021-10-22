import React from 'react'

import ProductList from '../../core/modules/productList'

const data = [
  {
    title: 'Product 1',
    id: '01',
    description: 'asionf uihdio ajsoidjasoidjasoi jdoiaskljnsfj ansf'
  },
  {
    title: 'Product 2',
    id: '02',
    description: 'asionf uihdio ajsoidjasoidjasoi jdoiaskljnsfj ansf'
  },
  {
    title: 'Product 3',
    id: '03',
    description: 'asionf uihdio ajsoidjasoidjasoi jdoiaskljnsfj ansf'
  },
  {
    title: 'Product 4',
    id: '04',
    description: 'asionf uihdio ajsoidjasoidjasoi jdoiaskljnsfj ansf'
  }
]

const Homepage = () => {
  // State
  const [cartAmount, setCartAmount] = React.useState([])

  // handle adding product
  const handleProductClick = (product) => {
    const newState = [...cartAmount, product]

    setCartAmount(newState)
  }

  // Render
  return <>
    <ProductList
      data={data}
      handleProductClick={handleProductClick}
      variant='5by5' />

    <div style={{ padding: '50px 0' }}>
      Amount of products: {cartAmount.length}
    </div>

    {
      cartAmount && cartAmount.length > 0 && cartAmount.map(product => {
        return <div key={`product-list-${product.id}`}> 
          {product.title} - {product.id}
        </div>
      })
    }
  </>
}
export default Homepage