import React, { useState } from 'react'
import '../Pages/Description.css'
import upArrow from '../assests/upArrow.svg'
import downArrow from '../assests/downarrow.svg'

function Description({courseInclude, coursePara}) {

  const [showDiscription, setShowDescription] = useState(false)
   
  return (
    <>  
    <div className="full-description-container">
       <h2 className="description-count-head">Description</h2>
       <div className="below-description-count-head">
          <div className={`more-para-containg-container ${showDiscription ? "expand-discription" : ""}`}>   
            {coursePara.map((item,index) =>(
            <>
            {index === 2 || index === 6 ? 
            <p className={`${index === 0 ? "" : "paragraph-margin-section"}`}><strong>{item}</strong></p> :
            <p className={`${index === 0 ? "" : "paragraph-margin-section"}`}>{item}</p>
          }
            </>
          ))}
          <div className="paragraph-course-inlcudes">
            <h2 className='course-include-head'>Who this course is for:</h2>      
            <ul className='unordered-course-includes'>
              {courseInclude.map((item,index) => (
                <>
              <li key={index}>{item.head}</li>
              </>
              ))}
            </ul>
          </div>
          </div>
          <button className='praghraph-show-btn' onClick={() => setShowDescription(prev => !prev)}>  
            <span className='paragraph-show-more-show-less-btn' >{showDiscription ? 'Show less' : 'Show more'}</span>
            <img src={showDiscription ? upArrow : downArrow} alt="paragraph-upArrow-downArrow" className='paragraph-upArrow-downArrow' />
          </button>
       </div>
    </div>
    </>
  )
}
                                                                 
export default Description 

