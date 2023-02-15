import React from 'react'
import logo from '../../Assets/logo.svg'
import {FaBars} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {links} from './linkData'
import avatar from '../../Assets/image-avatar.png'
import './header.css'
const Header = () => {
  return (
    <>
     <nav>
       <div className='nav__head'>
        <div className='nav__logo'>
              <FaBars className='menu__icon'/>
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
          <AiOutlineShoppingCart className='nav__cart'/>
          <img src={avatar} alt="avatar"  className='nav__avatar'/>
        </div>
     </nav>
    </>
  )
}

export default Header