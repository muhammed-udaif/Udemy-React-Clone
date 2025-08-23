import React from 'react'
import '../Pages/PeopleComment.css'
import star from '../assests/star.svg'
import dot from '../assests/dot.svg'
import like from '../assests/like.svg'
import dislike from '../assests/dislike.svg'
import threedot from '../assests/threedot.svg'

function PeopleComment({commentItems}) {

  return (                                                         
    <>
    <div className="people-comment-container">
        <div className="comment-rating-head">
            <img src={star} alt="comment-star" className='comment-star' />
            <span className='comment-rate'>4.6 course rating</span>
            <img src={dot} alt="comment-dot" className='comment-dot' />
            <span className='comment-rating-count'>233k ratings</span>
        </div>            
        <div>                                                  
            <section className='comment-card-container'>
                <div className="inside-commnet-card-container">
                    {commentItems.map((item,index) =>(
                    <div className="rated-comment-card" key={index}>
                        <div className="inside-rated-comment-card">
                            <div className="rated-comment-head-container">
                                <div className="inside-rated-comment-head-container">
                                    <div className="rated-comment-name-and-days-container">
                                        <p className='rated-para-head'>{item.head}</p>
                                        <div className="rated-and-days-container">
                                            <span className='inside-rated-and-days-container'>
                                                  <img src={item.src} alt="rated-five-star" className='rated-five-star' />
                                                  <span className='rated-commend-days'>{item.days}</span>
                                            </span>
                                        </div>
                                    </div>                            
                                    <div className="comment-rounded-name-container">{item.user}</div>
                                </div>
                            </div>
                            <div className="rated-comment-discription-container">
                                <span>{item.description}</span>
                            </div>
                            <div className="rated-comment-like-container">
                                <div className="inside-rated-comment-like-container">
                                    <span className='rated-comment-helpfull'>Helpful?</span>
                                    <div className="rated-like-dislike-container">
                                        <button className='rated-like-btn'>
                                            <img src={like} alt="rated-like-btn-img" className='rated-like-btn-img'/>
                                        </button>
                                        <button className='rated-like-btn'>
                                            <img src={dislike} alt="rated-like-btn-img" className='rated-like-btn-img' />
                                        </button>
                                    </div>
                                </div>
                                <div className="rated-three-dot-container">
                                    <button className='rated-comment-three-dot-btn'>
                                        <img src={threedot} alt="rated-three-dot-img" className='rated-like-btn-img' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>                                                          
            </section>
        </div>          
        <div className="extra-rated-comment-container">        
            {commentItems.slice(0,4).map((item,index) =>(      
            <div className="single-extra-rated-comment-container" key={index}>
                <div className="single-extra-comment-head-section">
                    <div className="extra-user-comment-rated-container">
                        <div className="inside-extra-user-comment-rated-container">
                            <p className='extra-container-user'>{item.head}</p>
                            <div className="extra-rated-and-month-container">
                                <span className='extra-rated-section'>
                                    <img src={item.src} alt="extra-rated-img" className='extra-rated-img' />
                                </span>
                                <span className='extra-month-section'>{item.days}</span>
                            </div>
                        </div>
                        <div className="comment-rounded-name-container">{item.user}</div>
                    </div>
                    <div className="rated-three-dot-container">
                        <button className='rated-comment-three-dot-btn'>
                            <img src={threedot} alt="extra-three-dot-img" className='rated-like-btn-img' />
                        </button>
                    </div>
                </div>
                <div className="extra-para-comment-rated-container rated-comment-discription-container">
                    <span>{item.description}</span>
                </div>
                <div className="extra-like-dislike-container rated-comment-like-container">
                    <div className="inside-rated-comment-like-container">
                        <span className='rated-comment-helpfull'>Helpful?</span>
                        <div className="rated-like-dislike-container">
                            <button className='extra-like-btn rated-like-btn'>
                                <img src={like} alt="extra-like-btn" className='rated-like-btn-img' />
                            </button>
                            <button className='extra-like-btn rated-like-btn'>
                                <img src={dislike} alt="extra-dislike-btn" className='rated-like-btn-img' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default PeopleComment