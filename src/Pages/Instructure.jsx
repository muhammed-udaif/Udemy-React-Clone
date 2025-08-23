import React, { useState } from 'react'
import '../Pages/Instructure.css'
import upArrow from '../assests/upArrow.svg'
import downArrow from '../assests/downarrow.svg'

function Instructure({mainHead,head,role,instructorList,description}) {

   const [showInstructor, setShowInstructor] = useState(false)
          
  return (
    <>
    <div className="instructure-container">
      <span className='instructor-section-container'>
        <h2 className='instructor-head'>{mainHead}</h2>
        <div className="online-instructor-container">
            <div>
                <div className="academind-the-online-educator">{head}</div>
                <div className="online-educators">{role}</div>
            </div>
            <div className="online-educator-picture-containig-container">
                <a className='educator-img-section'>
                    <img src="https://img-c.udemycdn.com/user/200_H/31926668_94e7_6.jpg" alt="Maximilian-img" className='maximilian-img' />
                </a>
                <ul className='unordered-list-of-educator'>
                    {instructorList.map((item,index) => (
                    <li key={index}>
                    <div className="instructor-rating-container">
                        <img src={item.src} alt="black-shaded-star" className='black-shaded-star' />
                        <div className="instructor-rating-description">{item.head}</div>
                    </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="instructor-discription-container">
                <div className="inside-instructor-discription-container">
                    <div className={`full-details-of-the-instructor ${showInstructor ? "expandInstructor" : ""}`}>
                        {description.map((para,index) =>(
                            <div key={index}>
                                <p className={`${index === 0 ? "": "instructor-margin-section" }` }>{para}</p>    
                            </div>
                        ))}
                    </div>
                </div>                                
            </div>                                                   
            <button className='instructor-show-btn' onClick={() => setShowInstructor(prev => !prev)}>
                <span>{showInstructor ? "Show less" : "Show more"}</span>
                <img src={showInstructor ? upArrow : downArrow} alt="instuctor-UpArrow-DownArrow" className='instructor-uparrow-downarrow' />
            </button>                                             
        </div>
      </span>
    </div>
    </>
  )
}
                    
export default Instructure