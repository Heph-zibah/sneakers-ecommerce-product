# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![Project preview](/src/Assets/Design/Sneakers%20EE-commerce%20App.png)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6/hub)
- Live Site URL: [Live site URL](https://sneakers-ecommerce-product.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

```html
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
                            <span>${productProfile.discountPrice}.00 x {cartItems}   </span>
                            <span className='cart__items--bold'>${productProfile.discountPrice * cartItems}.00</span>
                        </div>
                        <RiDeleteBin6Line onClick={() => setCartItems(0)} className='cart__items--delete' />
                    </div>
                    <button onClick={() => setCartToggle(!cartToggle)}>Checkout</button>
                </div>}
            </div>
```
```css
.lightbox__arrow {
    position: absolute;
    background-color: white;
    top: 50%;
    padding: 10px;
    border-radius: 50%;
    font-size: 35px;
    cursor: pointer;
}
```
```js
<Header cartItems={cartItems} setCartItems={setCartItems}/>
<main>
  <Product itemCount={itemCount} setItemCount={setItemCount} setCartItems={setCartItems}/>
</main>
```

### Continued development
- Props management in react
- Documentation
- React hooks
- CSS A nimation


### Useful resources

- [Box Shadow CSS Generator](https://cssgenerator.org/box-shadow-css-generator.html) - This helped me to genrate box shadow. I really liked this pattern and will use it going forward.
- [Sang Le](https://www.frontendmentor.io/solutions/ecommerce-product-page-with-reactjs-BJynD7RBc) - This is an amazing solution which helped me finally understand lightbox. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Oluwatosin A Daramola](https://medium.com/@oluwatosinhephzibah)
- Frontend Mentor - [@Heph-zibah](https://www.frontendmentor.io/profile/Heph-zibah)
- Twitter - [@undaunted_pen](https://twitter.com/undaunted_pen)