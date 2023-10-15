import './Home4.css'
import React from 'react'
import foodlogo from '../images/foodlogo.png'



export default function Home4() {
  return (
    <div>
    <div className='Home4'>

        <div className='nav-logo'>
            <img src={foodlogo} alt=""  height="210px" width="200px"/>
        </div>

        <div className=''>
        <a href="#" className='text-white'>
        <h4 className='text-white'>About Online Food</h4>
                <h4 className='text-white'>Read Our Blog</h4>
                <h4 className='text-white'>Sign up to deliver</h4>
                <h4 className='text-white'>Add your restaurant</h4>
        </a>
            
             

        </div>

        
        <div>
            <a href="#" className='text-white' >
            <h4 className='text-white'>Get Help</h4>
                <h4 className='text-white'>Read FAQ</h4>
                <h4 className='text-white'>View All Cities</h4>
                <h4 className='text-white'>Restaurants near me</h4>

            </a>
                

        </div>
     

    </div>

    <div className='homeend'>
        <h4 className='Copyright  text-white'>Copyright © 2023 . Created by Sahan Gasti ❤️</h4>
    <h4 className='home4last text-white'>  Privacy PolicyTerms of UsePricing</h4>
</div>

</div>
  )
}
