import React, { useState } from 'react'
import ProductImages from './ProductImages'
import './Product.css'

import ProductProfile from './ProductProfile'

const Product = ({itemCount, setItemCount}) => {
  return (
    <>
        <section className='product'>
            <ProductImages/>
            <ProductProfile itemCount={itemCount} setItemCount={setItemCount}/>
        </section>
    </>
  )
}

export default Product