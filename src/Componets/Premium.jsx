import React from 'react'
import './Premium.css'
import borderTick from '../assests/border-tick.svg'
import rating from '../assests/star-1.svg'
import user from '../assests/user.svg'

function Premium() {
  return (
    <>
    <div className="premium-container">
      <div className="inside-premium-container">
        <div className="sub-premium-container">
            <div className="premium-tick-container">
              <img src={borderTick} alt="border-tick" className='border-tick' />
            </div>
            <span className='premium-original'>Premium</span>
        </div>
        <div className="access-container">
          <span className="inside-access-container">
            <span>Access this top-rated course, plus 26,000+ more top-rated courses, with a Udemy plan.</span>
            <a className='plan-pricing'>See Plans & Pricing</a>
          </span>
        </div>
        <div className="straight-line"></div>
        <div className="rating-count-container">
            <div className="inside-rating-count-container">
                <span className='inside-premium-rating'>4.6</span>
                <span className='inside-star-rating'>
                  <img src={rating} alt="rating" className='above-four-rating' />
                </span>
            </div>
            <a className='people-rated'>232,874 ratings</a>
        </div>
        <div className="straight-line-second"></div>
        <div className="people-count-container">
            <div className="inside-people-count">
                <img src={user} alt="user-img" className='bordered-explamation user-img' />
                <span className='people-count'>978,388</span>
            </div>
            <span className='learners'>learners</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Premium