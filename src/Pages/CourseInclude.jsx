import React, { useEffect, useState } from 'react'
import '../Pages/CourseInclude.css'


function CourseInclude({includedItems}) {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

    useEffect(() =>{
        const handleResize = () =>{
           setIsDesktop(window.innerWidth >= 768)
        }
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const filterCourseItem = isDesktop ? includedItems.filter(item => item.head !== "Full lifetime access") : includedItems;
    
  return (
    <>
    <div className="course-include-container">
        <div className="sub-course-include-container">
            <h2 className='course-include'>This course includes:</h2>
            <div className="extra-course-include">
            {!isDesktop && (
            <ul className='unordered-course-include'>
            {filterCourseItem.map((item,index) =>(
            <li key={index}>
                <div className="demand-video">
                   <img src={item.src} alt="demand-video-img" className='demand-video-img' />
                   <div className="coding-articles">{item.head}</div>
                </div>
           </li>                 
            ))}
            </ul>           
            )}
            {isDesktop && (
                <>
            <ul className='unordered-course-include'>
            {filterCourseItem.slice(0,4).map((item,index) =>(
            <li key={index}>
                <div className="demand-video">
                   <img src={item.src} alt="demand-video-img" className='demand-video-img' />
                   <div className="coding-articles">{item.head}</div>
                </div>
           </li>                 
            ))}
           </ul>  
           <ul className='unordered-course-include'>
             {filterCourseItem.slice(4).map((item,index) =>(
                <li key={index}>
                    <div className="demand-video">
                        <img src={item.src} alt="demand-video-img" className='demand-video-img' />
                        <div className="coding-articles">{item.head}</div>
                    </div>
                </li>               
             ))}
            </ul>   
            </>      
            )}          
            </div>
        </div>
    </div>
    </>
  )
}

export default CourseInclude

// note the below point
// when we use the event listner then first of all we need to add the useeffect hook to the code this is the side effect in the code 