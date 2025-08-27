import React, { useEffect, useState } from 'react'
import './CoursePage.css'
import triangleArrow from '../assests/triangleArrow.svg'
import playIcon from '../assests/play-icon.svg'
import borderedExplamation from '../assests/bordered-explamation.svg'
import globe from '../assests/global.svg'
import text from '../assests/text.svg'
import Premium from './Premium'
import CourseCoupon from './CourseCoupon'
import Coupon from './Coupon'
import Learn from './Learn'
import Topic from '../Pages/Topic'
import CourseInclude from '../Pages/CourseInclude'
import Exercises from '../Pages/Exercises'
import CourseSection from '../Pages/CourseSection'
import Requirement from '../Pages/Requirement'
import Description from '../Pages/Description'
import BoughtCourse from '../Pages/BoughtCourse'
import Instructure from '../Pages/Instructure'
import PeopleComment from '../Pages/PeopleComment'
import ProvidedCourse from '../Pages/ProvidedCourse'
import Report from '../Pages/Report'
import courseData from '../Data/courseData'
import { useParams } from 'react-router-dom'
import StickyNav from './StickyNav'

function CoursePage() {

   const { id } = useParams();
   const course = courseData.find(item => item.id === parseInt(id));

    const links = [
        {head:"Development", src:triangleArrow, className:"development"},
        {head:"Programming Languages", src:triangleArrow},
        {head:"React JS", className:"development"}
    ]
                 
   const [couponScroll, setCouponScroll] = useState(window.scrollY > 440  && window.scrollY < 4600)
                                  
   useEffect(() =>{
    const handleCoupon = () =>{
       
        const scrollRange = window.scrollY > 440 && window.scrollY < 4600
        setCouponScroll(scrollRange)
    }
     window.addEventListener("scroll", handleCoupon);

     return () => window.removeEventListener("scroll", handleCoupon);

   },[]);
    
   const [stickyNav, setStickyNav] = useState(false);
   useEffect(() =>{
      
    const handleScroll = () =>{
        setStickyNav(window.scrollY > 42)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
     
   })


  return (                                 
    <>  
    {stickyNav && <StickyNav course={course}/>}
    <main className="coursePage-container">
        <div className="sub-coursePage-container">
            <div className="inside-coursePage">
                <div className="coursePage-head">
                    <div className="inside-coursePage-head">
                        {links.map((item,index) => (
                        <>
                           <a className= {`programing ${index === 0 ? item.className :""}`} key={index} >{item.head}</a>
                           <img src={triangleArrow} alt="triangleArrow" className={`right-arrow ${index === 0 || index === 2? item.className : ""}`} /> 
                        </>                    
                         ))}
                    </div>
                </div>
                <div className="course-img-container">
                    <span className="inside-img-container">
                        <img src={course.src} alt="react-img" className='router-react-img'/>
                    </span>
                    <span className='play-icon'>
                        <img src={playIcon} alt="play-icon" className='play-icon-img' />
                    </span>
                    <span className='preview-course'>Preview this course</span>
                </div>
                <div className="react-guide-container">
                    <div className="inside-react-guide">
                        <h1 className='react-head-container'>{course.mainHead}</h1>
                        <div className="inside-guide-para">{course.subHead}</div>
                        <div className="best-seller bg-bottom">Bestseller</div>
                        <div className="author-created-container">
                            <span className='author-created'>  
                                <span className='created'>Created by</span>
                                <a className='author'>{course.firstCreator}</a>,
                                <a className='author'>{course.secondCreator}</a>
                            </span>
                        </div>
                        <div className="issue-container">
                            <div className="last-update">
                                <img src={borderedExplamation} alt="bordered-explamation" className='bordered-explamation' />
                                <span>{course.updated}</span>
                            </div>
                            <div className="issue-english-container">
                                <img src={globe} alt="globe" className='bordered-explamation' />
                                English
                            </div>
                            <div className="issue-english-container">
                                <div className="inside-lang-container">
                                  <img src={text} alt="text" className='bordered-explamation' />
                                  <span>English [CC], Arabic [Auto]</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Premium course={course}/>
                <CourseCoupon />
                <Coupon couponScroll={couponScroll}  course={course}/>
            </div>    
        </div>     
        <div className="staight-separation-section"></div>
        <div className="below-coupon-learn-container">
            <div className="sub-below-coupon-learn-container">
                {course && <Learn learnContent = {course.learnContent}/>}  
                {course && <Topic exploreTopic = {course.exploreTopic}/>}   
                {course && <CourseInclude includedItems={course.includedItems}/>}
                <Exercises/>
                {course && <CourseSection javascriptItems = {course.javascriptItems} javascriptHead = {course.javascriptHead}/>}
                {course && <Requirement requirementItems = {course.requirementItems}/> }
                {course && <Description courseInclude= {course.courseInclude} coursePara = {course.coursePara}/>}
                {course && <BoughtCourse broughtItems = {course.broughtItems}/>}                
                {course.profile.map((instructorItem, index) => (            
                    <Instructure  
                       key={index}                      
                       mainHead={instructorItem.instructorHead}
                       head={instructorItem.instructorSubHead}
                       role={instructorItem.role}        
                       instructorList = {instructorItem.instructorList}
                       description ={instructorItem.about}
                       instructorSrc={instructorItem.instructorSrc}
                    /> 
                ))} 
                {course && <PeopleComment commentItems = {course.commentItems}/>}
                <div className="provided-course-container">
                    <div className="sub-provided-course-container">
                        {course.providedCourseSection.map((courseSection, index) =>(
                            <ProvidedCourse
                                key={index}
                                author ={courseSection.author}
                                ProvideItem = {courseSection.ProvideItem}
                            />
                        ))}
                        <Report/>
                    </div>
                </div>
            </div>
        </div>        
    </main>
    </>
  ) 
}
                                                                                                      
export default CoursePage




