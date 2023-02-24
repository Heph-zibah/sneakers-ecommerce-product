import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Lightbox = ({images, setLightbox, currentImage, setCurrentImage}) => {

  return (
    <>
    <div>
        <FaTimes onClick={() => setLightbox(false)}/>

    </div>
    </>
  )
}

export default Lightbox