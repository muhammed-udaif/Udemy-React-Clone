import React from 'react'
import '../Pages/ProvidedCourse.css'
import fourstar from '../assests/star-1.svg'

function ProvidedCourse() {
  return (
    <>
    <div className="provided-full-course-container">
     <h2 className='head-of-provided-course'>More Courses by <a className='change-color-head'>Academind by Maximilian Schwarzmüller</a></h2>
     <div>
        <span className='single-provided-course-container'>
            <div className="inside-the-course-container">
                <div className="provided-img-and-description-container">
                    <div className="provided-img-container">
                        <img src="https://img-c.udemycdn.com/course/100x100/1708340_7108_5.jpg" alt="provided-real-img" className='provided-real-img' />
                    </div>
                    <div className="provided-description-container">
                        <div>
                            <div className="head-of-the-provided-course">
                                <h3 className='flutter-dart-complete-guide'>Flutter & Dart - The Complete Guide [2025 Edition]</h3>
                            </div>
                        </div>
                        <div className="provided-course-author-container">
                            Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller
                        </div>
                        <div className="provided-course-rating-and-people-count">
                            <span className='provided-course-ratings-container'>
                                <span className='digital-rating-count'>4.6</span>
                                <img src={fourstar} alt="provided-four-star-img" className='provided-four-star-img' />
                            </span>
                            <span className='provided-course-people-count'>(87,151)</span>
                        </div>
                        <div className="provided-hours-and-lecture-container">
                            <div className="inside-provided-hours-lecture-container">
                                <span className='provided-total-hour'>30 total hours</span>
                                <span className='provided-total-lectures'>309 lectures</span>
                                <span className='provided-levels'>All Levels</span>
                            </div>
                        </div>
                       <div className="provided-price-container">
                           <div className="inside-provided-price-container">
                             <div className="provide-price">₹589</div>
                           </div>
                       </div> 
                       <div className="provided-nothing-section-container">
                        <div className="inside-provided-nothing-section"></div>
                       </div>
                    </div>
                </div>
            </div>
        </span>
     </div>
    </div>
    </>
  )
}

export default ProvidedCourse