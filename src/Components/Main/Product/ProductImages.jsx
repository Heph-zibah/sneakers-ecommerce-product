import React, { useState } from 'react'
import img from '../../../Assets/image-product-1.jpg'
import {images} from '../../HEADER/data'
import Lightbox from '../Lightbox'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const ProductImages = () => {
  const [lightbox, setlightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(0)
  return (
    <>
      <div className='product__images'>
        <div className='product__img'>
            <IoIosArrowBack className='product__arrow product__arrow--left'/>
            <img src={images[currentImage].png} alt="shoe" onClick={() => window.innerWidth > 800 && setlightbox(true)}/>
            <IoIosArrowForward className='product__arrow product__arrow--right'/>
        </div>
        <div className='product__thumbnail'>
         
        </div>
       </div>
       {lightbox && <Lightbox images={images} setlightbox={setlightbox} currentImage={currentImage} setCurrentImage={setCurrentImage}/>}
    </>
  )
}

export default ProductImages