import React from 'react'
import lightbox from '../../../Assets/image-product-1.jpg'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import thumbnail1 from '../../../Assets/image-product-1-thumbnail.jpg'
import thumbnail2 from '../../../Assets/image-product-2-thumbnail.jpg'
import thumbnail3 from '../../../Assets/image-product-3-thumbnail.jpg'
import thumbnail4 from '../../../Assets/image-product-4-thumbnail.jpg'

const ProductImages = () => {
  return (
    <>
      <div>
        <div className='product__img'>
            <IoIosArrowBack className='product__arrow product__arrow--left'/>
            <img src={lightbox} alt="shoe" />
            <IoIosArrowForward className='product__arrow product__arrow--right'/>
        </div>
        <div>
          <img src={thumbnail1} alt="show" />
          <img src={thumbnail2} alt="show" />
          <img src={thumbnail3} alt="show" />
          <img src={thumbnail4} alt="show" />
        </div>
       </div>
    </>
  )
}

export default ProductImages