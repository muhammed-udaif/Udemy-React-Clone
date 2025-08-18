import React, { useState } from 'react'
import '../Pages/CourseSection.css'
import tvPlay from '../assests/tvplay.svg'
import blackPlay from '../assests/blackPlay.svg'
import upArrow from '../assests/upArrow.svg'
import downArrow from '../assests/downarrow.svg'
import react from 'react'

function CourseSection() {    

 const javascriptItems = [
    { welcome:{tittle:"Welcome To The Course!",duration:"01:07"}, react:{tittle:"What is React.js? And Why Would You Use It?",duration:"02:58"},vannilla:{tittle:`ReactJS vs "Vanilla JavaScript": Why Use React?`,duration:"10:02"},editing:{tittle:"Editing Our First React App",duration:"3:06"},about:{tittle:"About This Course & Course Outline",duration:"5:10"}},
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
 const javascriptHead = [
    {head:"Getting Started"},
    {head:"JavaScript Refresher"},
    {head:"React Essentials - Components"},
    {head:"React Essentials - Deep Dive"},
    {head:"React Essentials - Practice Project"},
    {head:"Styling React Components"},
    {head:"Debugging React Apps"},
    {head:"Working With Refs & Portals"},
    {head:"Practice Project: Project Management App(with Components, State , Refs & More)"},
    {head:"React's Context API & useReducer - Advanced State Management"}
 ]  
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




