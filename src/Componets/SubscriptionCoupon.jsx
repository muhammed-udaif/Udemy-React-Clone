import React from 'react'
import borderTick from '../assests/border-tick.svg'
import heart from '../assests/heart.svg'
import { useParams } from 'react-router-dom'
import courseData from '../Data/courseData'

function SubscriptionCoupon() {

    const { id } = useParams();
    const course = courseData.find(item => item.id === parseInt(id));

    const shareCoupon = [
        {head:"Share"},
        {head:"Gift this course"},
        {head:"Apply coupon"}
    ]
  return (
    <>
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
                            <div className="cart-container">
                                <div className="price-cart-container">
                                    <div className="price-container">
                                        <div className="inside-price-container">
                                            <div className="price-item">{course.couponPrize}</div>
                                        </div>
                                    </div>
                                    <div className="add-cart-container">
                                        <div className="add-to-cart">
                                            <button className='add-cart-btn inside-start-subscription'>Add to cart</button>
                                        </div>
                                        <div>
                                            <button className="heart inside-start-subscription">
                                                <img src={heart} alt="heart-img" className='heart-img' />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="buy-now-container ">
                                        <button className='buy-now-btn inside-start-subscription'>Buy now</button>
                                    </div>
                                </div>
                                <div className="money-back-container">
                                    <div className="inside-money-back-container">
                                        <span className='money-back-days'>30-Day Money-Back Guarantee</span>
                                    </div>
                                </div>
                                <div className="share-gift-coupon-container">
                                    <div className="inside-share-gift-coupon">
                                        {shareCoupon.map((item,index) => (
                                             <button className='share' key={index}>{item.head}</button>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="redeem-straight"></div>
                                        <div className="redeemed-coupon">
                                            <div className="inside-redeemed-coupon">
                                                <div className="inside-udemy-coupon">
                                                    <ul>
                                                        <li>
                                                            <b>MT130825A</b>
                                                             is applied
                                                        </li>
                                                        <li>Udemy coupon</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <form  className="enter-coupon-container">
                                            <input type="text" placeholder='Enter Coupon' className='input-coupon' />
                                            <button className='apply-coupon inside-start-subscription'>Apply</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

    </>
  )
}

export default SubscriptionCoupon