import React from 'react'
import '../Pages/ProvidedCourse.css'
import fourstar from '../assests/star-1.svg'

function ProvidedCourse({ProvideItem,author}) {

  return (         
    <>
    <div className="provided-full-course-container">
     <h2 className='head-of-provided-course'>More Courses by <a className='change-color-head'>{author}</a></h2>
     <div>
        {ProvideItem.map((item,index) =>(
        <span className='single-provided-course-container' key={index} >
            <div className="inside-the-course-container">
                <div className="provided-img-and-description-container">
                    <div className="provided-img-container">
                        <img src={item.src} alt="provided-real-img" className='provided-real-img' />
                    </div>
                    <div className="provided-description-container">
                        <div>
                            <div className="head-of-the-provided-course">
                                <h3 className='flutter-dart-complete-guide'>{item.head}</h3>
                            </div>
                        </div>
                        <div className="provided-course-author-container">
                            {item.discriptionAuthor}
                        </div>
                        <div className="provided-course-rating-and-people-count">
                            <span className='provided-course-ratings-container'>
                                <span className='digital-rating-count'>{item.rating}</span>
                                <img src={fourstar} alt="provided-four-star-img" className='provided-four-star-img' />
                            </span>
                            <span className='provided-course-people-count'>{item.count}</span>
                        </div>
                        <div className="provided-hours-and-lecture-container">
                            <div className="inside-provided-hours-lecture-container">
                                <span className='provided-total-hour'>{item.hour}</span>
                                <span className='provided-total-lectures'>{item.lectures}</span>
                                <span className='provided-levels'>All Levels</span>
                            </div>
                        </div>
                       <div className="provided-price-container">
                           <div className="inside-provided-price-container">
                             <div className="provide-price">{item.Price}</div>
                           </div>
                       </div> 
                       <div className="provided-nothing-section-container">
                        <div className="inside-provided-nothing-section"></div>
                       </div>
                    </div>
                </div>
            </div>
        </span>
        ))}
     </div>
    </div>
    </>
  )
}

export default ProvidedCourse