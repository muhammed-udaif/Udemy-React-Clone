import React from 'react'
import './CourseCoupon.css'
import borderTick from '../assests/border-tick.svg'
import heart from '../assests/heart.svg'
import SubscriptionCoupon from './SubscriptionCoupon'

function CourseCoupon() {
    const shareCoupon = [
        {head:"Share"},
        {head:"Gift this course"},
        {head:"Apply coupon"}
    ]
  return (
    <>
    <div className="course-coupon-container">
        <div className="inside-course-coupon-container">
            <div className="under-inside-coupon-container">
                <div>
                    <div className="personal-team-container">
                        <div className="personal-container">
                            <button className='personal-btn'>
                                <span className="personal">Personal</span>
                            </button>
                        </div>
                        <div className='teams-container'>
                            <button className='personal-btn'>
                                <span className='teams'>Teams</span>
                            </button>
                        </div>
                    </div>
                    <SubscriptionCoupon/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CourseCoupon