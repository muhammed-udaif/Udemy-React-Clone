import React, { useState } from 'react'
import '../Pages/BoughtCourse.css'
import star from '../assests/star.svg'
import user from '../assests/user.svg'

function BoughtCourse() {

   const broughtItems = [
    {head:"The Ultimate React Course 2025: React, Next.js, Redux & More",seller:"Bestseller",hour:"84 total hours",update:"Updated 5/2025",rating:"4.7",people:"143,829",price:"₹499",src:"https://img-c.udemycdn.com/course/100x100/4471614_361e_8.jpg"},
    {head:"Complete React, Next.js & TypeScript Projects Course 2025",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹619",src:"https://img-c.udemycdn.com/course/100x100/2018828_41a9_3.jpg"},
    {head:"Modern React with Redux",seller:"Premium",hour:"75.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"327,427",price:"₹589",src:"https://img-c.udemycdn.com/course/100x100/705264_caa9_13.jpg"},
    {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,760",price:"₹499",src:"https://img-c.udemycdn.com/course/100x100/6375895_c850_2.jpg"},
    {head:"React & TypeScript - The Practical Guide",seller:"Bestseller",hour:"7.5 total hours",update:"Updated 4/2025",rating:"4.6",people:"27,334",price:"₹499",src:"https://img-c.udemycdn.com/course/100x100/5620946_7c11.jpg"},
    {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 4/2025",rating:"4.6",people:"250,235",price:"₹699",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
    {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹479",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
    {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹699",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"}
   ]

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