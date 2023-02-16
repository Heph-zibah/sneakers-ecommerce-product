import React from 'react'
import {HiMinus,HiPlus} from 'react-icons/hi'

const ProductProfile = () => {
  return (
    <>
        <div className='product__content'>
            <h1>SNEAKER COMPANY</h1>
            <h2>Fall Limited Edition Sneakers</h2>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className='product__price'>
                <div className='product__'>
                    <p>$125.00</p>
                    <p>50%</p>
                </div>
                <p className='product__price--through'>$250.00</p>
            </div>
            <div className='content__product'>
                <div className=''>
                    <HiMinus className='product__add'/>
                    <p className='product__num'>0</p>
                    <HiPlus className='product__minus'/>

                </div>
                <button className='product__button'>Add to cart</button>
            </div>
         </div>
    </>
  )
}

export default ProductProfile