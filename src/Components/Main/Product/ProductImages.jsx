import React from 'react'
import lightbox from '../../../Assets/image-product-1.jpg'

const ProductImages = () => {
  return (
    <>
        <div className='product__img'>
            <img src={lightbox} alt="shoe" />
        </div>
    </>
  )
}

export default ProductImages