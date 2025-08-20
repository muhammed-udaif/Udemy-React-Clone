import React from 'react'
import '../Pages/PeopleComment.css'
import fiveStar from '../assests/fiveStar.svg'
import star from '../assests/star.svg'
import dot from '../assests/dot.svg'
import like from '../assests/like.svg'
import dislike from '../assests/dislike.svg'
import threedot from '../assests/threedot.svg'
import fourstar from '../assests/star-1.svg'

function PeopleComment() {

  const commentItems = [
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

  return (
    <>
    <div className="people-comment-container">
        <div className="comment-rating-head">
            <img src={star} alt="comment-star" className='comment-star' />
            <span className='comment-rate'>4.6</span>
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
    </div>
    </>
  )
}

export default PeopleComment