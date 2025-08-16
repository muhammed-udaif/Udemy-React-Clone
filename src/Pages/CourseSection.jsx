import React from 'react'
import '../Pages/CourseSection.css'
import tvPlay from '../assests/tvplay.svg'
import blackPlay from '../assests/blackPlay.svg'
import upArrow from '../assests/upArrow.svg'
import react from 'react'

function CourseSection() {

 const javascriptItems = [
    {head:"Getting Started", welcome:"Welcome To The Course!", react:"What is React.js? And Why Would You Use It?",vannilla:`ReactJS vs "Vanilla JavaScript": Why Use React?`,editing:"Editing Our First React App",about:"About This Course & Course Outline"},
    {head:"JavaScript Refresher",welcome:"Module Introduction",react:"Starting Project",vannilla:"Adding JavaScript To A Page & How React Projects Differ",editing:"React Projects Use a Build Process",about:`"import" & "export"`},
    {head:"React Essentials - Components, JSX, Props, State & More",welcome:"Module Introduction", react:"it's All About Components! [Core Concept]",vannilla:"Setting Up The Starting Project",editing:"JSX & React Components [Core Concept]",about:"Creating & Using a First Custom Component"},
    {head:"React Essentials - Deep Dive",welcome:"Module Introduction",react:"You Don't Have To Use JSX",vannilla:"Working with Fragments",editing:"When should You Split Components?",about:"Splitting Components By Feature & State"},
    {head:"React Essentials - Practice Project",welcome:"Module Introduction & A Challenge For You!",react:"Adding a Header Component",vannilla:"Getting Started with a User input Component",editing:"Handling Events & Using Two-Way-Binding",about:"Lifting State Up"},
    {head:"Styling React Componets", welcome:"Module Introduction & Starting Project",react:"Splitting CSS Code Across Multiple Files",vannilla:"Styling React Apps with Vanilla CSS-Pros & Cons",editing:"Vanilla CSS Styles Are NOT Scoped To Components!",about:"Styling React Apps with Inline Styles"},
    {head:"Debugging React Apps",welcome:"Module Introduction",react:"The Starting Projec",vannilla:"Understanding React Error Messages",editing:"Using the Browser Debugger & Breakpoints",about:`Understanding React's "Strict Mode"` },
    {head:"Working with Refs & Portals",welcome:"Module Introduction & Starting Project",react:"Repetition: Managing User Input with State (Two-Way-Binding)",vannilla:"Repetition: Fragments",editing:"Introducing Refs: Connecting & Accessing HTML Elements via Refs",about:"Manipulating the DOM via Refs"},
    {head:"Practice Project: Project Managements App (with Components, State , Refs & More)", welcome:"Module Introduction & Starting Project",react:`Adding a "Projects Sidebar" Component`,vannilla:"Styling the Sidebar & Button with Tailwind CSS",editing:`Adding the "New Project" Component & A Reusable "Input" Component`,about:"Styling Buttons & Inputs with Tailwind CSS"},
    {head:"React's Context API & useReducer - Advanced State Management",welcome:"Module Introduction", react:"Understanding Prop Drilling & Project Overview",vannilla:"Prop Drilling: Component Composition as a Solution",editing:"Introducing the Context API", about:"Creating & Providing The Context"}
 ]
                                     
  return (
    <>
    <div className="course-section-container">
      <span className='sub-course-section'></span>
      <div className="course-content-container">
        <h2 className='cousrse-head'>Course content</h2>
        <div className="all-sections">
            <div className="total-section">
                <span className='under-total-section'>40 sections  • 726 lectures  •  </span>
            </div>
            <button className='expand-btn'>Expand all sections</button>
        </div>
        <div>

           <div className="getting-started">
            <div className="sub-getting-started-container">
                <h3 className='getting-started-head'>
                    <span className='sub-getting-started-head'>Getting Started</span>
                </h3>
                <img src={upArrow} alt="getting-arrow" className='getting-arrow' />
            </div>
            <div className="under-getting-lists">
                <div className="inside-getting-lists">
                    <ul className='unordered-getting-items'>
                        <li>
                        <div className="welcome-to-course">
                            <img src={tvPlay} alt="play-course" className='play-course' />
                            <div className="getting-preview-course">
                                <div>
                                    <div className="the-preview-content">Welcome To the Course! </div>
                                    <span className='getting-straight-space'></span>
                                    <button className='getting-preview-btn'>
                                        <span className='preview-play-container'>
                                            <img src={blackPlay} alt="play-preview" className='play-preview' />
                                            Preview                                                     
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>        
                        </li>                      
                    </ul>
                </div>
            </div>
           </div>
               
        </div>
      </div>
    </div>
    </>
  )
}

export default CourseSection