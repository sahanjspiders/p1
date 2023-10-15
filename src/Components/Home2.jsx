import React from 'react'
import './Home2.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Card1 from '../images/Card1.jpg'
import Card2 from '../images/Card2.png'
import Card3 from '../images/Card3.png'
import { useState } from 'react';




export default function Home2() {



// let [brackfast,setBrackfast] = useState([])
// let [lunch,setLunch] = useState([])
// let [dinner,setDinner] = useState([])






  return (
    <center>
<h1 className='mt-5'><em> ꧁☆Food Menu☆꧂</em></h1>
<input type="text"  className='foodmenu' />
    <div className='Home2'>
      <div className="Home2C1 p-3">
      <div className="card" style={{width: "25rem"}} >
  <img class="card-img-top" src={Card1} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Break-Fast</h5>
    <p class="card-text">There's magic in the morning, pep in my step and joy within me all because of you…breakfast!.</p>
    <a href="#" class="btn btn-primary">Break-Fast Menu</a>
  </div>
      </div>
    </div>
      <div className="Home2C2 p-3">
      <div className="card" style={{width: "25rem"}}>
  <img class="card-img-top" src={Card2}  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Lunch Menu</h5>
    <p class="card-text">Feasting my way through life, one bite at a time, Food is not just fuel; it's an experience..</p>
    <a href="#" class="btn btn-primary"> Lunch Menu</a>
  </div>
      </div>
      </div>
      
      <div className="Home2C3  p-3">
      <div className="card" style={{width: "25rem"}}>
  <img class="card-img-top" src={Card3}  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Dinner Menu</h5>
    <p class="card-text">“Eat breakfast like a king, lunch like a prince, and dinner like a pauper.”,“The oldest form of theater is the dinner table.</p>
    <a href="#" class="btn btn-primary">Dinner Menu</a>
  </div>
</div>
      </div>
    </div>
    </center>
  )
}




