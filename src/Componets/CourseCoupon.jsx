import React from 'react'
import './CourseCoupon.css'
import SubscriptionCoupon from './SubscriptionCoupon'

function CourseCoupon() {
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