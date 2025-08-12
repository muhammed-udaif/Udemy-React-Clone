import React, { useEffect, useState } from 'react'
import './LearningCard.css'
import './FilterButton.css'
import star from  '../assests/star.svg'
import explamation from '../assests/expalmation.svg'


function LearningCard({isRating, isLanguage, isPractice, isDuration, isTopic, isLevel, isTitle , isPrice}) {
    const listItem = [
        {head:"232,300 ratings"},
        {head:"71.5 total hours"},
        {head:"726 lectures"},
        {head:"All Levels"}
    ]
    const relatedSearch = [
        {head:"react typescript"},
        {head:"typescript react"},
        {head:"next.js"},
        {head:"jonas schmedtmann"},
        {head:"complete web development course"},
        {head:"nextjs 15"},
        {head:"nextjs"},
        {head:"next js 15"}
    ]
        const [cardItem, setCardItem] = useState([]);

        useEffect(() =>{
            const fetchData = async () =>{
                try{
                    const response = await fetch('/data/learningData.json')
                    const data = await response.json();
                    setCardItem(data);
                }catch (error){
                    console.error('failed to fetch the data ', error)
                }
            }
            fetchData();
        },[])

        const filteredCourse = cardItem.filter(cardItem => {
             const matchRating = isRating === "" || cardItem.rating >= parseFloat(isRating);
             const matchLanguage = isLanguage.length === 0 || isLanguage.includes(cardItem.language);
             const matchPractice = isPractice.length === 0 || isPractice.includes(cardItem.practice);
             const matchDuration = isDuration.length === 0 || isDuration.includes(cardItem.duration);
             const matchTopic = isTopic.length === 0 || isTopic.includes(cardItem.topic);
             const matchLevel = isLevel.length === 0 || isLevel.includes(cardItem.level);
             const matchTitle = isTitle.length === 0 || isTitle.includes(cardItem.subTittle);
             const matchPrice = isPrice.length === 0 || isPrice.includes(cardItem.priceStatus);
             return matchRating && matchLanguage && matchPractice && matchDuration && matchTopic && matchLevel && matchTitle && matchPrice;
        })
  return (
    <>
    <main className='main-container filter-full-container'>
        <div className="sub-main-container">
                <div className="sub-grid-container">
                    {filteredCourse.map((item,index) =>(
                        <div className="card-container" key={index}>
                        <div className="card-sub-container">
                            <section className='card-section-container'>
                                <div className="under-card-section">
                                    <div className="image-card-section">
                                        <img src={item.src} alt="cards-img"  className='card-img'/>
                                    </div>
                                        <div className="inside-img-head-container">
                                            <div>
                                                <img src={item.src} alt="new-card-img" className='new-card-img'/>
                                            </div>
                                            <div className='head-author-container'>
                                            <div>
                                                <h3 className='card-head'>{item.head}</h3>
                                            </div>
                                            <div>
                                                <div className="description-container">
                                                    {item.description}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="author-container">
                                                    {item.author}
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className='btn-price-container'>
                                        <div className="btn-container">
                                            <div>
                                                <ul className="unordered-btn">
                                                    <li>
                                                        {item.seller ?
                                                        <div className="btn-list-item">
                                                            {item.isSeller ? <div className="best-seller">{item.seller}</div>:<div className="best-seller color-change">{item.seller}</div>} 
                                                        </div>: ""} 
                                                    </li>
                                                    <li>
                                                        <div className="btn-list-item for-border" >
                                                            <span className='sub-rating-container'>
                                                                <span className="rating">{item.rating}</span>
                                                                <img src={star} alt="star" className='star-img' />
                                                            </span>
                                                        </div>
                                                    </li>
                                                    {listItem.map((item,index) =>(
                                                        <li>
                                                           <div className="btn-list-item for-border" key={index}>{item.head}</div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="price-btn-container">
                                            <div>
                                                <div className="inside-price-container">
                                                    <span className='price'>{item.price}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='add-cart'>Add to cart</button>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    ))}
                    {/* <div className="margin-section"></div> */}
                    <div className="related-search-container">
                        <div>
                         <div className="under-rel-search">Related searches
                            <div className="explamation-container">
                                <img src={explamation} alt="explamation-img" className='explamation-img'/>
                            </div>
                         </div>
                        </div>
                        <div className="search-related-container">
                            {relatedSearch.map((item,index) =>(
                            <a className='related-items' key={index}>
                                <button className='related-item-btn'>
                                    <span className='next-js'>{item.head}</span>
                                </button>
                            </a>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    </main>
    </>
  )
}

export default LearningCard