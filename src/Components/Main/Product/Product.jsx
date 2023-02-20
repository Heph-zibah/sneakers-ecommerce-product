import React from 'react'
import ProductImages from './ProductImages'
import './Product.css'

import ProductProfile from './ProductProfile'

const Product = ({itemCount, setItemCount, setCartItems}) => {
  return (
    <>
        <section className='product'>
            <ProductImages/>
            <ProductProfile itemCount={itemCount} setItemCount={setItemCount} setCartItems={setCartItems}/>
        </section>
    </>
  )
}

export default Product