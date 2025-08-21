import React from 'react'
import '../Componets/StickyNav.css'
import star from '../assests/star.svg'

function StickyNav() {
  return (
    <>
    <div className="sticky-navbar-container">
       <div className="sub-sticky-navbar-container">
          <div className="inside-sticky-navbar-container">
            <div className="sticky-react-guide">React - The Complete Guide 2025 (incl. Next.js, Redux)</div>
            <div className="sticky-rating-count-container">
                <div className="sticky-best-seller-btn-container">
                    <div className="best-seller">Bestseller</div>
                </div>
                <a className='sticky-rating-section'>
                    <span className='sticky-one-star-rating'>
                        <span className='sticky-rate'>4.6</span>
                        <img src={star} alt="sticky-star" className='sticky-star' />
                        <span className='sticky-rating-count'>(233,184 ratings)</span>
                    </span>
                </a>
                <div className="sticky-student-count">
                    <span>979,901 students</span>
                </div>
            </div>
          </div>
       </div>
    </div>
    </>
  )
}

export default StickyNav