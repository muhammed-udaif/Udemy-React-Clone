import React, { useState } from 'react'
import '../Pages/BoughtCourse.css'
import star from '../assests/star.svg'
import user from '../assests/user.svg'

function BoughtCourse({broughtItems}) {

   const [showBrought, setShowBrought] = useState(false)
                            
  return (
    <>        
    <div className="bought-course-container">
        <h2 className='student-bought'>Students also bought</h2>
        <div className="bought-contents-container">
            <div className={`bought-courses-container ${showBrought ? "expandBrought" : ""}`}>
               <div className="inside-bought-courses-container">
                {broughtItems.map((item,index) =>(
                   <div className="ultimate-react-bought-course" key={index}>
                   <div className="bought-description-container">
                     <a className='ultimate-bought-react-head'>{item.head}</a>
                     <div className="bought-btn-rating-container">
                         <div className="best-seller-bought-container">
                             <div className="best-seller">{item.seller}</div>
                         </div>                                                
                         <div className="bought-hour-container">
                             <span className="bought-hour-section">{item.hour}</span>
                             <span className="bought-updated">{item.update}</span>
                         </div>
                     </div>
                     </div>
                     <div className="bought-rating-people-container">
                         <span className="inside-bought-rating">
                             <span className='bought-rating'>{item.rating}</span>
                             <img src={star} alt="bought-star-img" className='bought-star-img'/>
                         </span>
                         <span className='inside-bought-people-count'>
                             <img src={user} alt="bought-user-img"  className='bought-user-img'/>
                             <span className='bought-people-count'>{item.people}</span>
                         </span>
                         <div className="bought-price-container">
                             <div className="inside-bought-price-container">
                                 <span>{item.price}</span>         
                             </div>
                         </div>
                     </div>    
                     <div className="bought-img-container">
                         <img src={item.src} alt="brought-img-section" className='brought-img-section' />
                     </div>
                </div>                
                 ))}
                </div> 
            </div>
            <button className='brought-show-more-less-btn' onClick={() => setShowBrought(prev => !prev)}>
                <span className='brought-show-more-less'>{showBrought ? "Show less": "Show more"}</span>
            </button>
        </div>
    </div>
    </>
  )
}     

export default BoughtCourse