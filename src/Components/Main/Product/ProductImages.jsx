import React, { useState } from 'react'
import {images} from '../../HEADER/data'
import Lightbox from '../Lightbox/Lightbox'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const ProductImages = () => {
  const [lightbox, setLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(0)
  return (
    <>
      <div className='product__images'>
        <div className='product__img'>
            <IoIosArrowBack className='product__arrow product__arrow--left'/>
            <img src={images[currentImage].png} alt="shoe" onClick={() => window.innerWidth > 800 && setLightbox(true)}/>
            <IoIosArrowForward className='product__arrow product__arrow--right'/>
        </div>
        <div className='product__thumbnail--wrapper'>
          <div className="product__thumbnail">
            <img src={images[0].thumbnail} alt="" />
          </div>
          <div className="product__thumbnail">
            <img src={images[1].thumbnail} alt="" />
          </div>
          <div className="product__thumbnail">
            <img src={images[2].thumbnail} alt="" />
          </div>
          <div className="product__thumbnail">
            <img src={images[3].thumbnail} alt="" />
          </div>
        </div>
       </div>
       {lightbox && <Lightbox images={images} setLightbox={setLightbox} currentImage={currentImage} setCurrentImage={setCurrentImage}/>}
    </>
  )
}

export default ProductImages