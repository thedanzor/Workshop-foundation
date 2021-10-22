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
  return <ProductList data={data} />
}
export default Homepage