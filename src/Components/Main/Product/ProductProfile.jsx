import React from 'react'
import {HiMinus,HiPlus} from 'react-icons/hi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {productProfile} from './ProductData.js'
import './Product.css'

const ProductProfile = () => {
  return (
    <>
        <div className='product__content'>
            <div className='product__intro'>
                <h1>SNEAKER COMPANY</h1>
                <h2>{productProfile.productName}</h2>
                <p>{productProfile.productDesc}</p>
            </div>
            <div className='product__price'>
                <p className='product__discount--price'>${productProfile.discountPrice}.00</p>
                <p className='product__discount--percent'>{productProfile.discountPercent}%</p>
               
                <p className='product__original--price'>${productProfile.originalPrice}.00</p>
            </div>
            <div className='product__action'>
                <div className='product__action--modify'>
                    <HiMinus className='product__action--add'/>
                    <p className='product__action--num'>0</p>
                    <HiPlus className='product__aaction--minus'/>

                </div>
                <div className='product__action--btn'>
                    <button>
                        <AiOutlineShoppingCart/>
                        Add to cart
                    </button>
                </div>
            </div>
         </div>
    </>
  )
}

export default ProductProfile