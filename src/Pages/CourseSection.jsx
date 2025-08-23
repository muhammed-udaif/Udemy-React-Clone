import React, { useState } from 'react'
import '../Pages/CourseSection.css'
import tvPlay from '../assests/tvplay.svg'
import blackPlay from '../assests/blackPlay.svg'
import upArrow from '../assests/upArrow.svg'
import downArrow from '../assests/downarrow.svg'

function CourseSection({javascriptItems,javascriptHead}) {    

 const [showSection, setShowSection] = useState(Array(javascriptHead.length).fill(true))
               
                                                                  
  return (             
    <>
    <div className="course-section-container">
      <span className='sub-course-section'></span>
      <div className="course-content-container">
        <h2 className='cousrse-head'>Course content</h2>
        <div className="all-sections">
            <div className="total-section">
                <span className='under-total-section'>40 sections  • 726 lectures  •  71h 22m total length </span>
            </div>
            <button className='expand-btn'>Expand all sections</button>
        </div>
        <div>
          {javascriptHead.map((item,index) => (
           <div className="getting-started" key={index}>
           <div className="sub-getting-started-container">
               <h3 className='getting-started-head'>
                   <span className='sub-getting-started-head'>{item.head}</span>
                   <span className='getting-lectures'>11 lectures  •  42min</span>
               </h3>
               <img src={showSection[index] ? downArrow : upArrow} alt="getting-arrow" className='getting-arrow' 
               onClick={() => setShowSection((prev) =>{ const updatedState = [...prev]
                                                        updatedState[index] = !updatedState[index]
                                                        return updatedState;

               })} />                           
           </div >                                
           <div className={`under-getting-lists ${showSection[index] ? "showSection": "" }`}>
               <div className="inside-getting-lists">
                   <ul className='unordered-getting-items'>
                    {Object.entries(javascriptItems[index]).map(([key,value]) =>(
                       <li key={key}>                                      
                       <div className="welcome-to-course">
                           <img src={tvPlay} alt="play-course" className='play-course' />
                           <div className="getting-preview-course">
                               <div className='parent-display'>      
                                   <div className="the-preview-content">{value.tittle}</div>
                                   <span className='getting-straight-space'></span>
                                   <button className='getting-preview-btn'>
                                       <span className='preview-play-container'>
                                           <img src={blackPlay} alt="play-preview" className='play-preview' />
                                           Preview                                                                
                                       </span> 
                                   </button>
                                   <span className='preview-duration'>{value.duration}</span>
                               </div>
                           </div>
                       </div>        
                       </li>                      
                    ))}                                  
                   </ul>       
               </div>
           </div>
          </div>          
        ))}    
        </div>
      </div>
    </div>
    </>
  )
}

export default CourseSection




