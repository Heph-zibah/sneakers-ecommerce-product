import React from 'react'
import lightbox from '../../../Assets/image-product-1.jpg'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const ProductImages = () => {
  return (
    <>
        <div className='product__img'>
            <IoIosArrowBack className='product__arrow product__arrow--left'/>
            <img src={lightbox} alt="shoe" />
            <IoIosArrowForward className='product__arrow product__arrow--right'/>
        </div>
    </>
  )
}

export default ProductImages