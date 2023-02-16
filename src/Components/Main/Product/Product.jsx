import React from 'react'
import ProductImages from './ProductImages'

import ProductProfile from './ProductProfile'

const Product = () => {
  return (
    <>
        <section className='product'>
            <ProductImages/>
            <ProductProfile/>
        </section>
    </>
  )
}

export default Product