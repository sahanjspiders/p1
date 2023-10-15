import React from 'react'
import Card1 from '../images/Card1.jpg'
import './Home3.css'
import pngwing1 from '../images/pngwing1.png'
import Chef from '../images/Chef.png'
import home123 from '../images/home123.png'




export default function Home3() {
  return (
    <div className='Home3'>

    <h1>  Why You Chose Us!</h1>
<input type="text" className='inputline mb-5' />
<h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci. Nostrum quia soluta vel distinctio delectus!</h4>

<div className='Home3Container mt-5'>

   <div className="C1">
      <div className="card " style={{width: "30rem"}} >
  <img className="card-img-top"  height="480px"   src={pngwing1} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title">Quick Delivery</h4>
    <p class="card-text">
        <h6>
        Where every flavor tells a story.
For the love of delicious food.
Sensory indulgence unlocked.
Your culinary adventure awaits.
Low cost. High quality.
We are always here to serve you.
Life is short, make it sweet.
A taste you'll remember.
        </h6>
    </p>
    {/* <a href="#" className="Hide">See more</a> */}
  </div>
      </div>
    </div>
{/* ---------------- */}
<div className="C1 ">
      <div className="card" style={{width: "30rem"}} >
  <img class="card-img-top" src={Chef} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title">A Good Auto Responder</h4>
    <p class="card-text">
    <h6>
        Where every flavor tells a story.
For the love of delicious food.
Sensory indulgence unlocked.
Your culinary adventure awaits.
Low cost. High quality.
We are always here to serve you.
Life is short, make it sweet.
A taste you'll remember.
        </h6>
        </p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
      </div>
    </div>
{/* --------------------- */}
<div className="C1">
      <div className="card" style={{width: "30rem"}} >
  <img class="card-img-top" src={home123} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title">Home Delivery</h4>
    <p class="card-text">
    <h6>
        Where every flavor tells a story.
For the love of delicious food.
Sensory indulgence unlocked.
Your culinary adventure awaits.
Low cost. High quality.
We are always here to serve you.
Life is short, make it sweet.
A taste you'll remember.
        </h6>
    </p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
      </div>
    </div>
{/* ------- */}
</div>

    </div>


  )
}
