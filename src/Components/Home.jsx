import React from 'react'
import bannerbackground from '../images/bannerbackground.jpg'
import './Home.css'
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
  return (
    <div>
<div className='Home-img'>
    {/* <img src={bannerbackground} alt="" height="80%" width="98%" /> */}
    <div className='Home-bg'>
{/* /---------/     */}



<Carousel  className='Carousel' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className=" d-block "
          src="https://images4.alphacoders.com/131/thumb-1920-1311047.jpg"
          alt="First slide"
       />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/593/709/124/food-seafood-dish-lobster-wallpaper-preview.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.wallpapic.com/i9753-619-83/medium/food-fast-brunch-dinner-wallpaper.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



{/* //-----------------------------/ */}
{/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://5.imimg.com/data5/YS/TA/MY-13049124/restaurant-wallpaper-design.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/ba/36/31/ba363114cb86bdac0e73bf15a881dd40.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://wallpapercave.com/wp/wp1939182.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div> */}
{/* /-------------/ */}
{/* <div class="container">
  <div class="search-box col-md-6 my-5 mx-auto d-flex">
    <input type="text" id="query" class="form-control" placeholder="Search Food Item"/>
    <a href="/search=">
      <button class="btn btn-danger p-2 btn-rounded">Search</button></a>
      </div>
      <h1 class="text-white"> Food is Waiting For Your You</h1>
      </div> */}

    </div>
</div>
<Home2/>
<Home3/>
{/* <Home4/> */}
    </div>
  )
}
