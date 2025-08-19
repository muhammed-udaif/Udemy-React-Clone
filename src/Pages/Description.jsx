import React, { useState } from 'react'
import '../Pages/Description.css'
import upArrow from '../assests/upArrow.svg'
import downArrow from '../assests/downarrow.svg'

function Description() {

  const courseInclude = [
    {head:"Students who want to lean how to build reactive and fast web apps"},
    {head:"Anyone who's interested in learning an extremely popular technology used by leading tech companies like Netflix"},
    {head:"Students who want to take their web development skills to the next level and learn a future-proof technology"}
  ]

  const [showDiscription, setShowDescription] = useState(false)
   
  return (
    <>
    <div className="full-description-container">
       <h2 className="description-count-head">Description</h2>
       <div className="below-description-count-head">
          <div className={`more-para-containg-container ${showDiscription ? "expand-discription" : ""}`}>
            <p>This bestselling course by the author of "React Key Concepts" has turned more students into ReactJS developers than any other courses - <strong>more than 900,000 and counting!</strong></p>
            <p className='paragraph-margin-section'>-</p>
            <p className='paragraph-margin-section'><strong><em>Updated December 2024</em></strong></p>
            <p className='paragraph-margin-section'>Fully updated for React 19!</p>
            <p className='paragraph-margin-section'>- Added brand-new section on React Server Components(stable with React 19)</p>
            <p className='paragraph-margin-section'>- Updated multiple lectures to adjust for smaller changes due to React 19</p>
            <p className='paragraph-margin-section'><strong><em>Updated earlier 2024:</em></strong></p>
            <p className='paragraph-margin-section'>Added brand-new content (-3h) on the  NextJs App Router</p>
            <p className='paragraph-margin-section'>Added a brand-new "Best Practices & Patterns" section</p>
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

