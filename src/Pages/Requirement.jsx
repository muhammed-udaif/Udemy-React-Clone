import React, { useState } from 'react'
import '../Pages/Requirement.css'
import upArrow from '../assests/upArrow.svg'
import dot from '../assests/dot.svg'
import downArrow from '../assests/downarrow.svg'

function Requirement({requirementItems}) {
 
    const [showRequirement, setShowRequirement] = useState(true)

  return (     
    <>
    <div className="requirement-container">
      <div className="sub-requirement-container">
        <div className="inside-requrement">
            <h3 className="requirement">Requirement</h3>
            <img src={showRequirement ? downArrow : upArrow} alt="requirement-arrow-img" className='requirement-arrow-img' onClick={() =>{setShowRequirement(prev => !prev)}}/>
        </div>
        <div className={`requirement-description-container ${showRequirement ? "requireExpant" : ""}`}>
            <div className="inside-requirement-description-container">
                <ul className='unordered-requirement-items'>
                    {requirementItems.map((item,index) =>(
                    <li key={index}>
                       <div className="requirement-list-items">
                         <img src={dot} alt="dot-requirement-img" className='dot-requirement-img' />
                         <div className="requirement-description-first-items">{item.head}</div>
                      </div>
                   </li>                    
             ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Requirement