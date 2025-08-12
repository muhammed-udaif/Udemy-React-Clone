import React from 'react'
import './Navbar.css'
import menuIcon from '../assests/menu_btn.svg'
import search from '../assests/search.svg'
import cart from '../assests/cart.svg'
import udemy from '../assests/Udemy.svg'
import heart from '../assests/heart.svg'
import bell from  '../assests/bell.svg'




function Navbar({toggleButton}) {
  const udemyItems =[
      {head:"Udemy Business", className:"udemy-business"},
      {head:"Teach on Udemy"},
      {head:"My learning"},
      {icon:heart},
      {icon:cart},
      {icon:bell}
  ]
  return (
    <>
    <div className='navbar'>
      <div className="under-nav">
        <button className='three-line' onClick={toggleButton} >
         <img src={menuIcon} alt="" />
        </button>
        <div className="space"></div>
        <div className="udemy">
            <img src={udemy} alt="" className='udemy-img'/>
        </div>
        <div className="search">
           <img src={search} alt="" />
        </div>
        <a className='cart'>
          <img src={cart} alt="" />
        </a>
      </div>
    </div>
    <div className="new-nav-container ">
      <a className='new-udemy'>
        <img src={udemy} alt="new-udemy" />
      </a>
      <button className='explore-btn'>
        <span className='explore'>Explore</span>
      </button>
      <div className="search-bar">
        <form className='for-search'>
          <input type="text" className='input-search explore' placeholder='Search for anything' />
          <button className='input-search-btn explore-btn'>
            <img src={search} alt="search"  className='search-inside-input'/>
          </button>
        </form>
      </div>
      {udemyItems.map((item,index) =>(
        
        <div className='teach-container' key={index}>
          <a className={`under-teach-container explore-btn ${index === 3 || index === 4 || index === 5?"padding": ""} ${item.className || ""}`}>
             {item.icon?
             <img src={item.icon} alt="heart-img"  />:
             <span className='explore'>{item.head}</span>
             }
          </a>
          </div>
      ))}
      <div className="teach-container">
        <a className='under-heart-container explore-btn ' id='jm-container'>
          <div className="name-container">
            MU
          </div>
          <span className="rounded-circle"></span>
        </a>
      </div>
    </div>
   </> 
  )
}

export default Navbar