import React, { useState } from 'react'
import './Learn.css'
import tick from '../assests/ticked.svg'
import downArrow from '../assests/downarrow.svg'
import upArrow from '../assests/upArrow.svg'

function Learn() {

    const [showAll, setShowAll] = useState(false)
        
    const learnContent = [
        {head:"Learn React from the ground up and finish the course as an advanced React developer"},
        {head:"Build multiple high-quality demo apps, including a fullstack app built with NextJS"},
        {head:"Join more than 900,000 students in this course & more than 3,000,000 students I taught across all my courses"},
        {head:"Follow along locally or in a cloud development environment"},
        {head:"Learn all about React Hooks and Reaact Components"},
        {head:"Manage complex state efficiently with React's Context API & React Redux"},
        {head:"Build standalone React apps & applications connected to a bacjend via HTTP"},
        {head:"Learn about routing & route related data fetching with React Router"},
        {head:"Implement user authentication in React apps"},
        {head:"Get started with React unit Testing"}
    ]
    const visibleItems = showAll ? learnContent : learnContent.slice(0,4);
  return (  
    <>
    <div className="learn-container">
        <h2 className='head-learn'>what you'll learn</h2>
        <div className="learn-description-container">
            <div className="under-learn-description-container">
                <ul className='list-learning-item'>
                    {visibleItems.map((item,index) =>(
                    <li key={index}>
                    <div className="learning-content" >
                        <img src={tick} alt="learning-tick" className='learning-tick' />
                        <div className="react-learning-content">{item.head}</div>
                    </div>
                    </li>      
                    ))}
                </ul>
            </div>
        </div>   
        {learnContent.length > 4 && (        
        <button className='Show-more-show-less-btn' onClick={() => setShowAll(prev => !prev)}>
            <span>
               <span className='show-more'>
                {showAll ? 'Show less' : 'Show more' }
               </span>
            </span>
            <img src={showAll ? upArrow : downArrow} alt="down-show-arrow" className='down-show-arrow' />
        </button>
        )} 
    </div>
    </>
  )
}

// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

                                                                                  
export default Learn