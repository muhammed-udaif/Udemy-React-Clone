import React, { useState } from 'react'
import './Learn.css'
import tick from '../assests/ticked.svg'
import downArrow from '../assests/downarrow.svg'
import upArrow from '../assests/upArrow.svg'

function Learn({learnContent}) {

    const [showAll, setShowAll] = useState(false)
    
    const visibleItems = showAll ? learnContent : learnContent.slice(0,4);
  return (  
    <>
    <div className="learn-container">
        <h2 className='head-learn'>what you'll learn</h2>
        <div className="learn-description-container">
            <div className={`under-learn-description-container ${showAll ? "expand":""}`}>
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
    </div>
    </>
  )
}

// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

                                                                                  
export default Learn