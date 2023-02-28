import React from 'react'
import {FaTimes} from 'react-icons/fa'
import './Lightbox.css'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const Lightbox = ({images, setLightbox, currentImage, setCurrentImage}) => {

  return (
    <>
      <div className='lightbox__overlay'>
        <div className="lightbox">
          <FaTimes className='lightbox-close' onClick={() => setLightbox(false)}/>

          <div className='lightbox__img'>
            <IoIosArrowBack 
            className='lightbox__arrow lightbox__arrow--left' 
            onClick={() => 
              setCurrentImage((prev) => prev === 0 ? images.length -1 : prev -1)}/>
            <img 
            src={images[currentImage].png} 
            alt="shoe" 
            onClick={() => window.innerWidth > 800 && setLightbox(true)}/>
            <IoIosArrowForward 
            className='lightbox__arrow lightbox__arrow--right' 
            onClick={() =>
              setCurrentImage((prev) => prev === images.length - 1 ? 0 : prev + 1)}/>
          </div>

          <div className='lightbox__thumbnail--wrapper'>
            <div className="lightbox__thumbnail">
              <img 
              src={images[0].thumbnail} 
              alt="two shoes"
              onClick={() => setCurrentImage(0)} 
              />
            </div>
            <div className="lightbox__thumbnail">
              <img 
              src={images[1].thumbnail} 
              alt="two shoes on two branches with a dry branch beside" 
              onClick={() => setCurrentImage(1)}
              />
            </div>
            <div className="lightbox__thumbnail">
              <img 
              src={images[2].thumbnail} 
              alt="a shoes on two stacked stones" 
              onClick={() => setCurrentImage(2)}
              />
            </div>
            <div className="lightbox__thumbnail">
              <img 
              src={images[3].thumbnail} 
              alt="a shoe on two stacked stones" 
              onClick={() => setCurrentImage(3)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Lightbox