import React from 'react'
import './CoursePage.css'
import triangleArrow from '../assests/triangleArrow.svg'
import playIcon from '../assests/play-icon.svg'
import borderedExplamation from '../assests/bordered-explamation.svg'
import globe from '../assests/global.svg'
import text from '../assests/text.svg'
import Premium from './Premium'
import CourseCoupon from './CourseCoupon'
import Coupon from './Coupon'
import Learn from './Learn'

function CoursePage() {
    const links = [
        {head:"Development", src:triangleArrow, className:"development"},
        {head:"Programming Languages", src:triangleArrow},
        {head:"React JS", className:"development"}
    ]
  return (
    <>
    <main className="coursePage-container">
        <div className="sub-coursePage-container">
            <div className="inside-coursePage">
                <div className="coursePage-head">
                    <div className="inside-coursePage-head">
                        {links.map((item,index) => (
                        <>
                           <a className= {`programing ${index === 0 ? item.className :""}`} key={index} >{item.head}</a>
                           <img src={triangleArrow} alt="triangleArrow" className={`right-arrow ${index === 0 || index === 2? item.className : ""}`} /> 
                        </>                    
                         ))}
                    </div>
                </div>
                <div className="course-img-container">
                    <span className="inside-img-container">
                        <img src="https://img-c.udemycdn.com/course/750x422/1362070_b9a1_2.jpg" alt="react-img" className='router-react-img'/>
                    </span>
                    <span className='play-icon'>
                        <img src={playIcon} alt="play-icon" className='play-icon-img' />
                    </span>
                    <span className='preview-course'>Preview this course</span>
                </div>
                <div className="react-guide-container">
                    <div className="inside-react-guide">
                        <h1 className='react-head-container'>React - The Complete Guide 2025 (incl. Next.js, Redux) </h1>
                        <div className="inside-guide-para">Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!</div>
                        <div className="best-seller bg-bottom">Bestseller</div>
                        <div className="author-created-container">
                            <span className='author-created'>
                                <span className='created'>Created by</span>
                                <a className='author'>Academind by Maximilian Schwarzmüller</a>,
                                <a className='author'>Maximilian Schwarzmüller</a>
                            </span>
                        </div>
                        <div className="issue-container">
                            <div className="last-update">
                                <img src={borderedExplamation} alt="bordered-explamation" className='bordered-explamation' />
                                <span>Last updated 7/2025</span>
                            </div>
                            <div className="issue-english-container">
                                <img src={globe} alt="globe" className='bordered-explamation' />
                                English
                            </div>
                            <div className="issue-english-container">
                                <div className="inside-lang-container">
                                  <img src={text} alt="text" className='bordered-explamation' />
                                  <span>English [CC], Arabic [Auto]</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Premium/>
                <CourseCoupon/>
                <Coupon/>
                <div className="below-coupon-learn-container">
                    <div className="sub-below-coupon-learn-container">
                       <Learn/>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  ) 
}

export default CoursePage