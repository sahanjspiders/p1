import React from 'react'
// import   fast from '../images/fast.png'
import { BiRestaurant} from 'react-icons/bi'
import {IoFastFoodSharp} from 'react-icons/io5'
import {FaShoppingCart} from 'react-icons/fa'
import './Navbar.css'
import foodlogo from '../images/foodlogo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <center>
    <div className='Nav-container'>

        <div className='nav-logo'>
          <Link to="/">
          <img src={foodlogo} alt=""  height="110px" width="120px"/>
          </Link>
           
        </div>
{/* ---------------------- */}
        <div className='Nav-icon text-decoration-none'>
        <div className='text-decoration-none'>
         <Link to="Explore">
         <h2 className='p-2'>
         <BiRestaurant/> Explore
         </h2>
         </Link>  
       </div>
       <div>
       <Link to="Myorder">
        <h2 className='p-2'>
        <IoFastFoodSharp/> My Orders
        </h2>
       
      </Link> 
       
      
        </div>    
        <div>
        <Link to="Cart">
        <h2 className='p-2'>
        <FaShoppingCart/> Cart
        </h2>
          
         
         </Link> 
         
    
        </div>

        <div>
          <Link to="Login">
          <button className='button btn btn-outline-dark '> <h4>login/SignUp</h4></button>
          </Link>
           
        </div>
        </div>


    </div>
    </center>
  )
}
