import React from 'react'
import {FaTimes} from 'react-icons/fa'
import './Lightbox.css'

const Lightbox = ({images, setLightbox, currentImage, setCurrentImage}) => {

  return (
    <>
    <div className='lightbox'>
        <FaTimes className='lightbox-close' onClick={() => setLightbox(false)}/>

    </div>
    </>
  )
}

export default Lightbox