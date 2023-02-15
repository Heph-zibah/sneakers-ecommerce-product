import React from 'react'
import lightbox from '../../Assets/image-product-1.jpg'
import {HiMinus,HiPlus} from 'react-icons/hi'

const Content = () => {
  return (
    <>
        <section>
            <div>
                <img src={lightbox} alt="shoe" />
            </div>
            <div>
                <h1>SNEAKER COMPANY</h1>
                <h2>Fall Limited Edition Sneakers</h2>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div>
                    <div>
                        <p>$125.00</p>
                        <p>50%</p>
                    </div>
                    <p>$250.00</p>
                </div>
                <div>
                    <div>
                        <HiMinus/>
                        <p>0</p>
                        <HiPlus/>

                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Content