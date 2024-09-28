import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div id='home' className='home-container'>
        <img className='home-image' src="https://wallpapercave.com/wp/wp1929458.jpg" alt="" />
        <h1 className='homeHead'>Best Food For Your Taste</h1>


 <nav>
    <input type="checkbox" id="check"/>
    <label for="check" className="checkbtn">
      <i className="fas fa-bars"></i>
    </label>
    <label className="logo"><a style={{textDecoration:'none' , color:'black'}} href="#home">Queso Queen</a></label>
    <ul>
      <li><a className="active menu" href="#home">HOME</a></li>
      <li><a className='menu' href="#">OFFER</a></li>
      <li><a className='menu' href="#">GALLERY</a></li>
      <li><a className='menu' href="#">BLOG</a></li>
      <li><a className='menu' href="#">ABOUT</a></li>
    </ul>
  </nav>
      </div>

    </>
  )
}

export default Home