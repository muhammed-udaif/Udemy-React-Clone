import React, { useEffect, useRef, useState } from 'react'
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
import tvPlay from '../assests/tvplay.svg'
import fullsection from '../assests/fullSection.svg'
import notes from '../assests/notes.svg'
import notesNew from '../assests/notes-1.svg'
import prize from '../assests/prize.svg'
import subtittle from '../assests/subtittle.svg'
import downloads from '../assests/downloads.svg'
import mobile from '../assests/mobile.svg'
import curly from '../assests/curly.svg'
import fiveStar from '../assests/fiveStar.svg'
import fourstar from '../assests/star-1.svg'
import courseData from '../Data/courseData'
import { useParams } from 'react-router-dom'

function CoursePage() {

   const { id } = useParams();
   const course = courseData.find(item => item.id === parseInt(id));

    const links = [
        {head:"Development", src:triangleArrow, className:"development"},
        {head:"Programming Languages", src:triangleArrow},
        {head:"React JS", className:"development"}
    ]
                 
   const [couponScroll, setCouponScroll] = useState(window.scrollY > 440)
                                  
   useEffect(() =>{
    const handleCoupon = () =>{
       
        setCouponScroll(window.scrollY > 440 )
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
                <Premium/>
                <CourseCoupon />
                <Coupon couponScroll={couponScroll} />
            </div>
        </div>     
        <div className="staight-separation-section"></div>
        <div className="below-coupon-learn-container">
            <div className="sub-below-coupon-learn-container">
                {course && <Learn learnContent = {course.learnContent}/>}  
                {course && <Topic exploreTopic = {course.exploreTopic}/>}        
                <CourseInclude
                includedItems ={
                    [
                        {head:"71 hours on-demand video", src:tvPlay},
                        {head:"37 coding exercises", src:fullsection},
                        {head:"Assignments", src:notes},
                        {head:"48 articles", src:notesNew},
                        {head:"62 downloadable resouses", src:downloads},
                        {head:"Access on mobile and TV", src:mobile},
                        {head:"Full lifetime access", src:curly},
                        {head:"Closed captions", src:subtittle},
                        {head:"Certificate of completion", src:prize}
                    ]
                }/>
                <Exercises/>
                <CourseSection
                javascriptItems = {
                    [
                    {welcome:{tittle:"Welcome To The Course!",duration:"01:07"}, react:{tittle:"What is React.js? And Why Would You Use It?",duration:"02:58"},vannilla:{tittle:`ReactJS vs "Vanilla JavaScript": Why Use React?`,duration:"10:02"},editing:{tittle:"Editing Our First React App",duration:"3:06"},about:{tittle:"About This Course & Course Outline",duration:"5:10"}},
                    {welcome:{tittle:"Module Introduction",duration:"8:02"},react:{tittle:"Starting Project",duration:"6:09"},vannilla:{tittle:"Adding JavaScript To A Page & How React Projects Differ",duration:"1:48"},editing:{tittle:"React Projects Use a Build Process",duration:"9:56"},about:{tittle:`"import" & "export"`,duration:"8:35"}},
                    {welcome:{tittle:"Module Introduction",duration:"9:47"}, react:{tittle:"it's All About Components! [Core Concept]",duration:"6:23"},vannilla:{tittle:"Setting Up The Starting Project",duration:"2:28"},editing:{tittle:"JSX & React Components [Core Concept]",duration:"5:40"},about:{tittle:"Creating & Using a First Custom Component",duration:"10:58"}},
                    {welcome:{tittle:"Module Introduction",duration:"4:10"},react:{tittle:"You Don't Have To Use JSX",duration:"7:29"},vannilla:{tittle:"Working with Fragments",duration:"8:54"},editing:{tittle:"When should You Split Components?",duration:"7:29"},about:{tittle:"Splitting Components By Feature & State",duration:"1:02"}},
                    {welcome:{tittle:"Module Introduction & A Challenge For You!",duration:"3:47"},react:{tittle:"Adding a Header Component",duration:"5:14"},vannilla:{tittle:"Getting Started with a User input Component",duration:"3:12"},editing:{tittle:"Handling Events & Using Two-Way-Binding",duration:"1:34"},about:{tittle:"Lifting State Up",duration:"5:10"}},
                    {welcome:{tittle:"Module Introduction & Starting Project",duration:"1:06"},react:{tittle:"Splitting CSS Code Across Multiple Files",duration:"6:10"},vannilla:{tittle:"Styling React Apps with Vanilla CSS-Pros & Cons",duration:"4:10"},editing:{tittle:"Vanilla CSS Styles Are NOT Scoped To Components!",duration:"1:20"},about:{tittle:"Styling React Apps with Inline Styles",duration:"7:10"}},
                    {welcome:{tittle:"Module Introduction",duration:"8:34"},react:{tittle:"The Starting Projec",duration:"5:37"},vannilla:{tittle:"Understanding React Error Messages",duration:"5:23"},editing:{tittle:"Using the Browser Debugger & Breakpoints",duration:"5:12"},about:{tittle:`Understanding React's "Strict Mode"`,duration:"4:32"}},
                    {welcome:{tittle:"Module Introduction & Starting Project",duration:"1:03"},react:{tittle:"Repetition: Managing User Input with State (Two-Way-Binding)",duration:"4:29"},vannilla:{tittle:"Repetition: Fragments",duration:"9:12"},editing:{tittle:"Introducing Refs: Connecting & Accessing HTML Elements via Refs",duration:"8:03"},about:{tittle:"Manipulating the DOM via Refs",duration:"7:14"}},
                    {welcome:{tittle:"Module Introduction & Starting Project",duration:"8:12"},react:{tittle:`Adding a "Projects Sidebar" Component`,duration:"1:02"},vannilla:{tittle:"Styling the Sidebar & Button with Tailwind CSS",duration:"7:45"},editing:{tittle:`Adding the "New Project" Component & A Reusable "Input" Component`,duration:"5:21"},about:{tittle:"Styling Buttons & Inputs with Tailwind CSS",duration:"2:10"}},
                    {welcome:{tittle:"Module Introduction",duration:"5:10"}, react:{tittle:"Understanding Prop Drilling & Project Overview",duration:"8:31"},vannilla:{tittle:"Prop Drilling: Component Composition as a Solution",duration:"4:37"},editing:{tittle:"Introducing the Context API",duration:"10:10"}, about:{tittle:"Creating & Providing The Context",duraiton:"4:10"}}
                    ]
                }
                javascriptHead = {
                    [
                        {head:"Getting Started"},
                        {head:"JavaScript Refresher"},
                        {head:"React Essentials - Components"},
                        {head:"React Essentials - Deep Dive"},
                        {head:"React Essentials - Practice Project"},
                        {head:"Styling React Componets"},
                        {head:"Debugging React Apps"},
                        {head:"Working With Refs & Portals"},
                        {head:"Practice Project: Project Management App(with Components, State , Refs & More)"},
                        {head:"React's Context API & useReducer - Advanced State Management"}
                    ]
                }/>
                <Requirement
                requirementItems = {
                    [
                        {head:"JavaScript + HTML + CSS fundamentals are absolutely required"},
                        {head:"You DON'T need to be a JavaScript expert to succeed in this course!"},
                        {head:"ES6 + JavaScipt knowledge is beneficial but not a must-have"},
                        {head:"NO prior React or any other JS framework experience is required"}
                    ]
                }/>
                <Description
                courseInclude= {
                    [
                        {head:"Students who want to lean how to build reactive and fast web apps"},
                        {head:"Anyone who's interested in learning an extremely popular technology used by leading teach companies like Netflix"},
                        {head:"Students who want to take their web development skills to the next level and learn a future-proof technology"}
                    ]
                }
                coursePara = {
                    [
                        `This bestselling course by the author of "Reacr Key Concepts" has turned more students into ReactJS developers than any other courses more than 900,000 and counting!`,
                        `-`,
                        `Updated December 2024`,
                        `Fully updated for React 19!`,
                        `- Added brand-new section on React Server Components(stable with React 19)`,
                        `- Updated multiple lectures to adjust for smaller changes due to React 19`,
                        `Updated earlier 2024:`,
                        `Added brand-new content (-3h) on the NextJs App Router`,
                        `Added a brand-new "Best Practices & Patterns" section`
                    ]
                }/>
                <BoughtCourse
                broughtItems = {
                    [
                        {head:"The Ultimate React Course 2025: React, Next.js, Redux & More",seller:"Bestseller",hour:"84 total hours",update:"Updated 5/2025",rating:"4.7",people:"143,829",price:"₹499",src:"https://img-c.udemycdn.com/course/100x100/4471614_361e_8.jpg"},
                        {head:"Complete React, Next.js & TypeScript Projects Course 2025",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹619",src:"https://img-c.udemycdn.com/course/100x100/2018828_41a9_3.jpg"},
                        {head:"Modern React with Redux",seller:"Premium",hour:"75.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"327,427",price:"₹589",src:"https://img-c.udemycdn.com/course/100x100/705264_caa9_13.jpg"},
                        {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,760",price:"₹499",src:"https://img-c.udemycdn.com/course/100x100/6375895_c850_2.jpg"},
                        {head:"React & TypeScript - The Practical Guide",seller:"Bestseller",hour:"7.5 total hours",update:"Updated 4/2025",rating:"4.6",people:"27,334",price:"₹499",src:"https://img-c.udemycdn.com/course/100x100/5620946_7c11.jpg"},
                        {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 4/2025",rating:"4.6",people:"250,235",price:"₹699",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
                        {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹479",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
                        {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹699",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"}
                    ]
                }/>                       
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
                <PeopleComment
                commentItems = {
                    [
                        {head:"Jürgen B.",src:fiveStar,days:"4 days ago",user:"JB",description:"Wow, what an outstanding course on React. Super well explained, very well structured, and really great examples and practice, and hands-on programming. This course is absolutely recommednded!!!"},
                        {head:"Olagoke O.",src:fourstar,days:"a month ago",user:"OL",description:"Max is a really good tutor. I would have given 5 stars but there are some unnecessary long videos. He could have explaned some concepts in a more concise way but he chose to drag it."},
                        {head:"Simon L.", src:fiveStar, days:"a month ago", user:"SL",description:"This is the most in depth and complete course on React out there. The author Knows exactly what you might find useful (TypeScript and JavaScript revisions - brilliant!) and the sheer scope is absolutely amazing. Thank you, Alexander!"},
                        {head:"Nicholas C.",src:fiveStar,days:"a month ago", user:"NI",description:"This was a beautiful, comprehensive course on React. it trully is complete, and I feel fully equipped to work on enterprise React applications after getting through this course!"},
                        {head:"Samir U.", src:fourstar,days:"2 weeks ago", user:"SA",description:"Hallo Maximilian, dein kurs fand ich gut, man konnte so unglaublich viellernen, es hat mich Monate gekostet, um ihn nebn dem Beruf zu absolvieren,genau so muss ein ausfuhrlicher kurs zu React etc. sein, den esist riesig und anfangs komplex.Jedoch fand ich bei..."},
                        {head:"Dilnawaz K.", src:fiveStar, days:"a month ago", user:"DI", description:"Just wrapped up the course, and I've got to say- it's one of the most well-paced and thoughtfully structured courses I've taken. Max walks you through everything from the basics of components and JSX to more advanced topics like state management, side effects, routing..."},
                        {head:"Asmaa B.", src:fiveStar, days:"2 months ago", user:"AB",description:"Highly recommended. This course is beginner-friendly and easy to follow, it covers everything you need to feel confident with React, from the fundamentals to more advanced tools. I especially appreciated the intro to Next.js. Big thanks to Maximilian for putting so much thought into the content."},
                        {head:"Usman N.", src:fiveStar, days:"a month ago", user:"UN",description:"yes it was really outstanding course"},
                        {head:"Sreetanu Ghosh D.",src:fiveStar, days:"2 months ago", user:"SD", description:"This course is really great for anyone, who wants to learn basics as well as want to dive deeper. Thanks to the author!"},
                        {head:"Uran M.",src:fiveStar, days:"6 months ago", user:"UM", description:"Спасибо автору за такой курс! этот курс очень детально описывает от основ Реакта до высоких возможностей, о котором я узнал благодаря этому курс"},
                        {head:"Christopher N.", src:fiveStar, days:"3 months ago", user:"CN", description:"I have zero knowledge about React.js when starting  this course. Honestly after the completion of this course, I'm now in a better position to build projects using React. Thank you for the hands on projects. Happy coding"},
                        {head:"Frederik S.", src:fiveStar, days:"a month ago", user:"FR", description:"Absolutely amazing course. Not only succeeded in retaining my attention but actually motivated me to finish the entire course."}
                    ]
                }/>
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