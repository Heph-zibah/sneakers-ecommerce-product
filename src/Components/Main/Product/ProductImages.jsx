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
          <IoIosArrowBack 
          className='product__arrow product__arrow--left' 
          onClick={() => 
            setCurrentImage((prev) => prev === 0 ? images.length -1 : prev -1)}/>
          <img 
          src={images[currentImage].png} 
          alt="shoe" 
          onClick={() => window.innerWidth > 800 && setLightbox(true)}/>
          <IoIosArrowForward 
          className='product__arrow product__arrow--right' 
          onClick={() =>
            setCurrentImage((prev) => prev === images.length - 1 ? 0 : prev + 1)}/>
        </div>
        <div className='product__thumbnail--wrapper'>
          <div className="product__thumbnail">
            <img 
            src={images[0].thumbnail} 
            alt="two shoes"
            onClick={() => setCurrentImage(0)} 
            />
          </div>
          <div className="product__thumbnail">
            <img 
            src={images[1].thumbnail} 
            alt="two shoes on two branches with a dry branch beside" 
            onClick={() => setCurrentImage(1)}
            />
          </div>
          <div className="product__thumbnail">
            <img 
            src={images[2].thumbnail} 
            alt="a shoes on two stacked stones" 
            onClick={() => setCurrentImage(2)}
            />
          </div>
          <div className="product__thumbnail">
            <img 
            src={images[3].thumbnail} 
            alt="a shoe on two stacked stones" 
            onClick={() => setCurrentImage(3)}
            />
          </div>
        </div>
       </div>
       {lightbox && <Lightbox images={images} setLightbox={setLightbox} currentImage={currentImage} setCurrentImage={setCurrentImage}/>}
    </>
  )
}

export default ProductImages