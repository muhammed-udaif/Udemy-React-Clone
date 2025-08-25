import React from 'react'
import './Coupon.css'
import playIcon from '../assests/play-icon.svg'
import SubscriptionCoupon from './SubscriptionCoupon'

function Coupon({couponScroll, course}) {  
  return (    
    <>
    <div className={`coupon-top-container ${couponScroll ? "sticky-fixed" : ""}`} >
      <div className="coupon-section-container">
        <div className="full-coupon-container">
          <div>           
            {couponScroll ? "" :
            <div className={`coupon-img-container`}>
              <div className="inside-coupon-img-container">
                 <button className='coupon-play-container'>
                  <span className='coupon-image-section'>
                    <img src={course.desktopSrc} alt="coupon-img-play" className='coupon-img-play' />
                  </span>
                  <span className='play-icon'>
                        <img src={playIcon} alt="play-icon" className='play-icon-img' />
                    </span>
                    <span className='preview-course'>Preview this course</span>
                 </button>
              </div>
            </div>  
            }                                                         
          </div>
          <div className={`below-play-coupon-container `}>
            <div className="personal-tearm-coupon-container">
              <div className='inside-personal-tearm-coupon'>
                <div className="personal-coupon">
                  <button className='personal-coupon-btn'>Personal</button>
                </div>
                <div className="tearm-coupon-btn">
                  <button className='personal-coupon-btn'>Teams</button>
                </div>
              </div>
              <SubscriptionCoupon/>
            </div>
          </div>
        
        </div>          
      </div>
    </div>
                                        
    </>
  )
}

export default Coupon


                                                                           
