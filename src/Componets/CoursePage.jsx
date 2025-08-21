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
import blackShadedStar from '../assests/blackShaded-star.svg'
import grade from '../assests/grade.svg'
import user from '../assests/user.svg'
import blackPlay from '../assests/blackPlay.svg'
import PeopleComment from '../Pages/PeopleComment'
import ProvidedCourse from '../Pages/ProvidedCourse'
import Report from '../Pages/Report'

function CoursePage() {
    const links = [
        {head:"Development", src:triangleArrow, className:"development"},
        {head:"Programming Languages", src:triangleArrow},
        {head:"React JS", className:"development"}
    ]

   const [couponScroll, setCouponScroll] = useState(false)

   useEffect(() =>{
    const handleCoupon = () =>{
        setCouponScroll(window.scrollY > 519)
    }
     window.addEventListener("scroll", handleCoupon);

     return () => window.removeEventListener("scroll", handleCoupon);

   },[]);

  return (
    <>
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
                        <img src="https://img-c.udemycdn.com/course/750x422/1362070_b9a1_2.jpg" alt="react-img" className='router-react-img'/>
                    </span>
                    <span className='play-icon'>
                        <img src={playIcon} alt="play-icon" className='play-icon-img' />
                    </span>
                    <span className='preview-course'>Preview this course</span>
                </div>
                <div className="react-guide-container">
                    <div className="inside-react-guide">
                        <h1 className='react-head-container'>React - The Complete Guide 2025 (incl. Next.js, Redux) </h1>
                        <div className="inside-guide-para">Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!</div>
                        <div className="best-seller bg-bottom">Bestseller</div>
                        <div className="author-created-container">
                            <span className='author-created'>
                                <span className='created'>Created by</span>
                                <a className='author'>Academind by Maximilian Schwarzmüller</a>,
                                <a className='author'>Maximilian Schwarzmüller</a>
                            </span>
                        </div>
                        <div className="issue-container">
                            <div className="last-update">
                                <img src={borderedExplamation} alt="bordered-explamation" className='bordered-explamation' />
                                <span>Last updated 7/2025</span>
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
                <Premium/>
                <CourseCoupon />
                <Coupon couponScroll={couponScroll}/>
            </div>
        </div>
        <div className="staight-separation-section"></div>
        <div className="below-coupon-learn-container">
            <div className="sub-below-coupon-learn-container">
                <Learn/>
                <Topic/>
                <CourseInclude/>
                <Exercises/>
                <CourseSection/>
                <Requirement/>
                <Description/>
                <BoughtCourse/>
                <Instructure 
                mainHead="Instructors"
                head="Academind by Maximilian Schwarzmüller"
                role= "Online Education"
                instructorList = {[
                    {src:blackShadedStar,head:"4.6 Instructor Rating"},
                    {src:grade, head:"808,761 Reviews"},
                    {src:user, head:"3,363,355 Students"},
                    {src:blackPlay, head:"48 Courses"}
                ]}
                description ={
                    ["Bundling the courses and know how of successful instructors, Academind strives to deliver high quality online education",
                     "Online Education, Real-Life Success- that's what Academind stands for. Learn topics like web development, data analyses and more in a fun engaging way.",
                     "We.ve taught more than 3,000,000 students on a broad variety of topics. We'd love to teach you as well :)",
                     "Keep learning "
                    ]
                }/>   
                <Instructure 
                head="Maximilian Schwarzmüller"
                role="AWS certified, Professional Web Developer and Instructor"
                instructorList={[
                    {src:blackShadedStar, head:"4.6 Instructor Rating"},
                    {src:grade, head:"1,240,545 Reviews"},
                    {src:user, head:"3,407,110 Students"},
                    {src:blackPlay, head:"66 Courses"}
                ]}
                description={
                    [
                        "Starting out at the age of 12 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well, Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant, The success and fun I have in this job is inmense and really keeps that passion burningly alive.",
                        "Starting web development on the backend (PHP with Larvel, NodeJS, Python) I also become more and more of a frontend developer using modern framework like React, Angular or VueJS in a lot of projects. I love both worlds nowadays!",
                        "I also build full-stack applications and acquired expert DevOps and cloud computing knoledge proven by the many AWS certifications I hold(incl. the top-level Solutions Architect Professional certification).",
                        "As a self-taught developer I had the chance t broaden my horizon by studying Business Administration where I hold a Master's degree. That enabled me to work in a major strategy consultancy as well as a bank. While learning, that I enjoy development more than these fields, the time in this sector greatly improved my overall experience and skills"
                    ] 
                }/>   
                <PeopleComment/>
                <div className="provided-course-container">
                    <div className="sub-provided-course-container">
                        <ProvidedCourse
                        author = "Academind by Maximilian Schwarzmüller"
                        ProvideItem = {
                            [
                                {head:"Flutter & Dart - The Complete Guide[2025 Edition]",rating:"4.6",count:"(87,168)",hour:"30 total hours",lectures:"309 lectures",Price:"₹589",src:"https://img-c.udemycdn.com/course/100x100/1708340_7108_5.jpg"},
                                {head:"Docker & Kubernetes: The Practical Guide [2025 Edition]", rating:"4.7",count:"(34,373)",hour:"23.5 total hours", lectures:"264 lectures", Price:"₹589", src:"https://img-c.udemycdn.com/course/100x100/3490000_d298_2.jpg"},
                                {head:"NodeJS- The Complete Guide (MVC, REST APIs, GraphQL, Deno)",rating:"4.6",count:"(34,373)",hour:"40.5 total hours", lectures:"544 lectures", Price:"₹589", src:"https://img-c.udemycdn.com/course/100x100/1879018_95b6_3.jpg"}
                            ]
                        }/>
                        <ProvidedCourse 
                        author="Maximilian Schwarzmüller"
                        ProvideItem= {
                            [
                                {head:"Angular - The Complete Guide (2025 Edition)",rating:"4.7",count:"(217,749)",hour:"56 total hours", lectures:"758 lectures", Price:"₹499",src:"https://img-c.udemycdn.com/course/100x100/756150_c033_4.jpg"},
                                {head:"Flutter & Dart - The Complete Guide[2025 Edition]", rating:"4.6",count:"(87,168)",hour:"30 total hours", lectures:"309 lectures",Price:"₹589",src:"https://img-c.udemycdn.com/course/100x100/1708340_7108_5.jpg"},
                                {head:"Docker & Kubernetes: The Practical Guide [2025 Edition]", rating:"4.7",count:"(34,373)",hour:"23.5 total hours", lectures:"264 lectures", Price:"₹589", src:"https://img-c.udemycdn.com/course/100x100/3490000_d298_2.jpg"}
                            ]
                        }/>
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