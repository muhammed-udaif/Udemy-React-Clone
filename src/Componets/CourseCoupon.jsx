import React from 'react'
import './CourseCoupon.css'
import borderTick from '../assests/border-tick.svg'

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
                    <div className="subscription-container">
                        <div className="premium-subscription-container">
                           <img src={borderTick} alt="border-tick" className='border-tick' />
                           <span className='premium-course-subscription'>This Premium course is included in plans</span>
                        </div>
                        <div>
                            <div className="udemy-top-course-subscription">
                                <div>
                                    <div className="subscribe-to-udemy">Subscribe to Udemy’s top courses</div>
                                    <div className="subscription-description">Get this course, plus 26,000+ of our top-rated courses, with Personal Plan.
                                        <a className='description-learn'>Learn more</a>
                                    </div>
                                </div>
                                <div className="start-subscription-container">
                                    <a className='inside-start-subscription'>
                                        <div className='start-subscription'>Start subscription</div>
                                    </a>
                                    <div className="start-subscription-description">
                                        <div>
                                            <div className="starting-container">Starting at ₹400 per month</div>
                                            <div className="cancel-anytime-container">Cancel anytime</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="or-container">or</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CourseCoupon