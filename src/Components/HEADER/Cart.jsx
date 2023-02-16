import React from 'react'
import thumbnail from '../../Assets/image-product-1-thumbnail.jpg'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { productProfile } from '../Main/Product/ProductData'
import './Cart.css'
const Cart = () => {
  return (
    <>
        <aside className='cart'>
        <div className=''>
            <p className='cart__header'>Cart</p>
            <p className='cart__body'>Your cart is empty</p>
        </div>
        <div className='cart__container'> 
            <div className='cart__items'>
                <img src={thumbnail} alt='shoe' />
                <div>
                    <p>{productProfile.productName}</p>
                    <p>${productProfile.discountPrice} x ${productProfile.discountPrice}</p>
                </div>
                <RiDeleteBin6Line/>
            </div>
            <button>Checkout</button>
        </div>
        </aside>
    </>
  )
}

export default Cart