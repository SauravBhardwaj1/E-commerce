import React, { useContext, useState } from 'react'
import styled from "styled-components"
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi"
import {CgMenu, CgClose} from "react-icons/cg"
import { useCartContext } from '../Context/Cart_context';
 
const Navbar = () => {

  const {total_item} = useCartContext()

  const [change, setChange] = useState()
 
  const Nav=styled.nav`
    .navbar-list {
      display:flex;
      gap: 4rem;
      align-items: center;


    .navbar-link{
      &:link,
      &:visited {
        display:inline-block;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme })=> theme.colors.black};
        transition: color 0.3s linear;
      }

      &: hover,
      &:active {
        color: ${({ theme })=> theme.colors.helper};
      }
    }
  }
    .mobile-navbar-btn{
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .mobile-nav-icon[name="close-outline"]{
      display:none;
    }
    
    .close-outline{
      display: none; 
    }
    .cart-trolley--link{
      position: relative;
      
      .cart-trolley{
        position: relative;
        font-size: 2rem;
      }
      .cart-total--item{
        width:1.4rem;
        height: 1.5rem;
        position: absolute;
        background-color: lightblue;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -65%;
        left: 95%;
        background-color: ${({ theme })=> theme.colors.blue }
      }
    }
    
    

    @media (max-width: ${({ theme })=> theme.media.mobile}){
      .mobile-navbar-btn{
        display: inline-block;
        z-index: 9999;
        border: ${({ theme })=> theme.colors.black}

        .mobile-nav-icon{
          font-size: 4.2rem;
          color:${({ theme })=> theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme })=> theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline{
        display: inline-block;
      }
      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top:0;
        left: 0;
        background-color: #fff;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all 3s linear;
      }

      .active .navbar-list{
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index:999;
        transform-origin: right;
        transition: all 4s linear

        .navbar-link {
          font-size: 4.2rem;
        } 
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 1.8rem;
          height: 1.8rem;
          font-size: 1.3rem
        }
      }
    }
  `;
  return (
    <Nav>
      <div className={change ? "navbar active" : "navbar"}>
         <ul className='navbar-list'>
          <li>
            <NavLink to="/" className="navbar-link"
            onClick={()=> setChange(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link"
            onClick={()=> setChange(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link"
            onClick={()=> setChange(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link"
            onClick={()=> setChange(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolly" />
              <span className='cart-total--item'>{total_item}</span>
            </NavLink>
          </li>
         </ul>
         {/* two button required for open and close the menu */}
         <div className='mobile-navbar-btn'>
            <CgMenu name="menu-outline" className="mobile-nav-icon" 
            onClick={()=> setChange(true)}
            />
            <CgClose name="close-outline" className="mobile-nav-icon close-outline" 
            onClick={()=> setChange(false)}
             />
         </div>
      </div>
    </Nav>
  )
}

export default Navbar