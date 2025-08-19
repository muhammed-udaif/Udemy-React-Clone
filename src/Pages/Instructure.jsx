import React from 'react'
import '../Pages/Instructure.css'
import blackShadedStar from '../assests/blackShaded-star.svg'
import grade from '../assests/grade.svg'
import user from '../assests/user.svg'
import blackPlay from '../assests/blackPlay.svg'
import upArrow from '../assests/upArrow.svg'
import downArrow from '../assests/downarrow.svg'

function Instructure() {
    
   const instructorItem = [
    {src:blackShadedStar, head:"4.6 Instructor Rating"},
    {src:grade, head:"808,761 Reviews"},
    {src:user, head:"3,363,355 Students"},
    {src:blackPlay, head:"48 Courses"}
   ]

  return (
    <>
    <div className="instructure-container">
      <span className='instructor-section-container'>
        <h2 className='instructor-head'>Instructors</h2>
        <div className="online-instructor-container">
            <div>
                <div className="academind-the-online-educator">Academind by Maximilian Schwarzmüller</div>
                <div className="online-educators">Online Education</div>
            </div>
            <div className="online-educator-picture-containig-container">
                <a className='educator-img-section'>
                    <img src="https://img-c.udemycdn.com/user/200_H/31926668_94e7_6.jpg" alt="Maximilian-img" className='maximilian-img' />
                </a>
                <ul className='unordered-list-of-educator'>
                    <li>
                    <div className="instructor-rating-container">
                        <img src="" alt="black-shaded-star" className='black-shaded-star' />
                        <div className="instructor-rating-description">4.6 Instructor Rating</div>
                    </div>
                    </li>
                </ul>
            </div>
            <div className="instructor-discription-container">
                <div className="inside-instructor-discription-container">
                    <div className="full-details-of-the-instructor">
                        <div>
                            <p>Bundling the courses and know how of successful instructors, Academind strives to deliver high quality online education.</p>
                            <p>Online Education, Real-Life Success- that's what Academind stands for. Learn topics like web development, data analyses and more in a fun and engaging way.</p>
                            <p>We've taught more than 3,000,000 students on a broad variety of topics. We'd love to teach you as well :)</p>
                            <p>Keep learning</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='instructor-show-btn'>
                <span>Show more</span>
                <img src={downArrow} alt="instuctor-UpArrow-DownArrow" className='instructor-uparrow-downarrow' />
            </button>
        </div>
      </span>
    </div>
    </>
  )
}

export default Instructure