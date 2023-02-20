import React from 'react'
import thumbnail from '../../Assets/image-product-1-thumbnail.jpg'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { productProfile } from '../Main/Product/ProductData'
import './Cart.css'


const Cart = ({cartItems, setCartItems}) => {
  return (
    <>
        <aside>
            <div className='cart'>
                <div className=''>
                    <p className='cart__header'>Cart</p>
                    {cartItems === 0 && <p className='cart__body'>Your cart is empty</p>}
                </div>
                {cartItems > 0 && 
                <div className='cart__container'> 
                    <div className='cart__items'>
                        <img src={thumbnail} alt='shoe' />
                        <div>
                            <p>{productProfile.productName}</p>
                            <span>${productProfile.discountPrice} x {cartItems}   </span>
                            <span>${productProfile.discountPrice * cartItems}</span>
                        </div>
                        <RiDeleteBin6Line onClick={() => setCartItems(0)}/>
                    </div>
                    <button>Checkout</button>
                </div>}
            </div>
        </aside>
    </>
  )
}

export default Cart