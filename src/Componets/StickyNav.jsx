import React from 'react'
import '../Componets/StickyNav.css'
import star from '../assests/star.svg'

function StickyNav({course}) {
  return (
    <>
    <div className="sticky-navbar-container">
       <div className="sub-sticky-navbar-container">
          <div className="inside-sticky-navbar-container">
            <div className="sticky-react-guide">{course.mainHead}</div>
            <div className="sticky-rating-count-container">
                <div className="sticky-best-seller-btn-container">
                    <div className="best-seller">Bestseller</div>
                </div>
                <a className='sticky-rating-section'>
                    <span className='sticky-one-star-rating'>
                        <span className='sticky-rate'>{course.PremiumRating}</span>
                        <img src={star} alt="sticky-star" className='sticky-star' />
                        <span className='sticky-rating-count'>{course.PremiumRatingCount}</span>
                    </span>
                </a>
                <div className="sticky-student-count">
                    <span>{course.premiumCount} students</span>
                </div>
            </div>
          </div>
       </div>
    </div>
    </>
  )
}

export default StickyNav