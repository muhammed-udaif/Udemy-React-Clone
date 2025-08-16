import React from 'react'
import '../Pages/Exercises.css'

function Exercises() {
  return (
    <>
    <div className="exercises-container">
        <div className="sub-exercises-container">
            <div className="coding-container">
               <h2 className='coding-head'>Coding Exercises</h2> 
               <p className='coding-pare'>This course includes our updated coding exercises so you can practice your skills as you learn.</p>
               <a className='demo-section'>See a demo</a>
            </div>
            <div className="coding-img-container">
                <img src="https://www.udemy.com/staticx/udemy/js/webpack/coding-exercises-demo-preview-mobile.04e7e0e4d59e0856f411e94eb766a558.png" alt="coding-img" className='coding-img' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Exercises