import React, { useState } from 'react'
import logo from '../../Assets/logo.svg'
import {FaBars, FaTimes} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {links} from './linkData'
import avatar from '../../Assets/image-avatar.png'
import './header.css'
import Cart from './Cart'
const Header = ({cartItems, setCartItems}) => {
  const [nav, setNav] = useState(false);
  const [cartToggle, setCartToggle] = useState(false)
  return (
    <>
     <header>
      <nav>
        <div className='nav__head'>
          <div className='nav__logo'>
                <FaBars className='menu__icon' onClick={() => setNav(!nav)}/>
                <img src={logo} alt='sneakers logo' />
            </div>
            <ul className='nav__links'>
            {links.map((link) => {
                  const {url, id, text} = link;
                  return <li className='nav__link' key={id}><a href={url}>{text}</a></li>
                })}
            </ul>
        </div>
          <div className='nav__action'>
            <div className='nav__cart--div'>
              <AiOutlineShoppingCart className='nav__cart' onClick={() => setCartToggle(!cartToggle)}/>
              {cartItems > 0 && <span className='nav__cart--count'>{cartItems}</span>}
            </div>
            <img src={avatar} alt="avatar"  className='nav__avatar'/>
          </div>

          
      </nav>
     </header>
     <div className={!nav ?'mobile__nav' : 'show__nav'}>
        <div className='mobile__nav--div'>
          <FaTimes className='mobile__nav--icon' onClick={() => setNav(!nav)}/>
          <ul className='mobile__nav--links'>
            {links.map((link) => {
                const {url, id, text} = link;
                  return <li className='mobile__nav--link' key={id}><a href={url}>{text}</a></li>
                })}
          </ul>
        </div>
      </div>
      {cartToggle && <Cart cartItems={cartItems} setCartItems={setCartItems} cartToggle={cartToggle} setCartToggle={setCartToggle}/>}
    </>
  )
}

export default Header