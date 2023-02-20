import React from 'react'
import {HiMinus,HiPlus} from 'react-icons/hi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {productProfile} from './ProductData.js'
import './Product.css'

const ProductProfile = ({itemCount, setItemCount, setCartItems}) => {
    
    const handleAdd = () => {
        setCartItems((prev) => prev + itemCount)
        setItemCount(0)
    }

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
                    <div className='product__action--minus' onClick={() => {
                            setItemCount((prev => (prev !== 0 ? prev - 1 : 0)))
                        }}>
                        <HiMinus />
                    </div>
                    <p className='product__action--num'>{itemCount}</p>
                    <div className='product__action--add' onClick={() => {
                            setItemCount((prev) => prev + 1)
                        }}>
                        <HiPlus />
                    </div>

                </div>
                <div className='product__action--btn'>
                    <button onClick={handleAdd}>
                        <AiOutlineShoppingCart/>
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
         </div>
    </>
  )
}

export default ProductProfile