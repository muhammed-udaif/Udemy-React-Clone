import React from 'react'
import './FilterPanel.css'
import starFirst from '../assests/star-1.svg'
import starSecond from '../assests/star-2.svg'
import starThird from '../assests/star-3.svg'
import starFourth from '../assests/star-4.svg'
import cross from '../assests/cross.svg'

function FilterPanel({filterOpen, closeSidebar, isRating, isLanguage, isPractice, isDuration, isTopic, isLevel, isTitle, isPrice, setIsRating, setIsLanguage, setIsPractice, setIsDuration, setIsTopic, setLevel, setTitle, setPrice}) {

    const ClearFilter = () =>{
        setIsRating("");
        setIsLanguage([]);
        setIsPractice([]);
        setIsDuration([]);
        setIsTopic([]);
        setLevel([]);
        setLevel([]);
        setTitle([]);
        setPrice([]);
    }

    const ratingItems = [
        {src:starFirst, rating:"4.5 & up", number:"(6,037)"},
        {src:starSecond,rating:"4.0 & up", number:"(10,000)"},
        {src:starThird, rating:"3.5 & up", number:"(10,000)"},
        {src:starFourth,rating:"3.0 & up", number:"(10,000)"}
    ]

    const languageItems = [
        {language:"English",viewers:"(7,539)"},
        {language:"Español",viewers:"(1,604)"},
        {language:"Türkçe",viewers:"(561)"},
        {language:"Português",viewers:"(1,149)"}
    ]
    const PracticeItem = [
        {label:"Quizzes", viewers:"(2,377)"},
        {label:"Coding Exercises", viewers:"(491)"},
        {label:"Practice Tests", viewers:"(774)"},
        {label:"Role Plays", viewers:"(40)"}
    ]
    const videoItems = [
        {label:"0-1 Hour", viewers:"(1,496)"},
        {label:"1-3 Hours", viewers:"(3,796)"},
        {label:"3-6 Hours", viewers:"(2,968)"},
        {label:"6-17 Hours", viewers:"(4,073)"}
    ]
    const topicItems = [
        {label:"JavaScript", viewers:"(1,260)"},
        {label:"Web Development", viewers:"(804)"},
        {label:"React JS", viewers:"(790)"},
        {label:"HTML", viewers:"(781)"}
    ]
    const levelItem = [
        {label:"All Levels", viewers:"(6,628)"},
        {label:"Beginner", viewers:"(5,639)"},
        {label:"Intermediate", viewers:"(2,173)"},
        {label:"Expert", viewers:"(199)"}
    ]
    const titleItem = [
        {label:"English", viewers:"(6,289)"},
        {label:"Español", viewers:"(1,811)"},
        {label:"Português", viewers:"(1,255)"},
        {label:"日本語", viewers:"(644)"}
    ]
    const priceItem = [
        {label:"Paid", viewers:"(10,000)"},
        {label:"Free", viewers:"(1,984)"}
    ]
    const getItemForSection = (head) =>{
        switch(head){
            case "Ratings":
                return ratingItems;
            case "Language":
                return languageItems;
            case "Hands-on Practice":
                return PracticeItem;
            case "Video Duration":
                return videoItems;
            case "Topic":
                return topicItems;
            case "Level":
                return levelItem;
            case "Subtitles":
                return titleItem;
            case "Price":
                return priceItem;
            default:
                return languageItems;
        }
    } 

    const ratingSection =[
        {head:"Ratings", type:"radio" },
        {head:"Language", type:"checkbox"},
        {head:"Hands-on Practice", type:"checkbox"},
        {head:"Video Duration", type:"checkbox"},
        {head:"Topic", type:"checkbox"},
        {head:"Level", type:"checkbox"},
        {head:"Subtitles", type:"checkbox"},
        {head:"Price", type:"checkbox"}
    ]

  return (
    <>
    <div className={`filter-panel-blur-container ${filterOpen? "open":""}`} >
        <div className="filter-panel-side-container">
            <nav className='inside-filter-panel-container'>
                <div className="inside-filter-panel-nav">
                    <div className="filter-panel-head">
                        <span className='filter-panel'>Filters</span>
                        <button className='clear-up' onClick={() => ClearFilter()}>
                            <img src={cross} alt="clear-cross" className='clear-cross' />
                            <span className='filter-clear'>Clear all filters</span>
                        </button>
                    </div>
                    <div className="under-filter-panel-head-container">
                        <div className="sub-under-filter-panel-head">
                            <fieldset className='fieldset-filter-panel'>
                                <div>
                                    <label className='inside-fieldset'>
                                        View certification prep courses only
                                        <span className='toggle-radio'></span>
                                    </label>
                                </div>
                            </fieldset>                                                              
                            {ratingSection.map((section,outerIndex) =>(
                            <div className="repeatedly-filter-panel-container" key={outerIndex}>
                                <label className='rating-filter'>{section.head}</label>
                                <div className="inside-ratings">
                                    <div className="fist-rating-section-container">
                                        <div>                               
                                            { getItemForSection(section.head).map((item,innerIndex) =>(
                                            <label className='radio-rating' key={innerIndex}>
                                                { section.head === "Ratings" ? 
                                                <>                              
                                                <input type={section.type} className='radio-circle' name='radio' checked={isRating === item.rating.split(" ")[0]} onChange = {() => setIsRating(item.rating.split(" ")[0])}/>
                                                <span className='rating-pic-container'>
                                                    <img src={item.src} alt="most-rated-star" className='most-rated-star'/>         
                                                </span>
                                                 {item.rating}
                                                 <span className='rating-numbers'>{item.number}</span>
                                                </>
                                                :              
                                                <>                                                                                                                                  
                                                <input type="checkbox" className='radio-circle' 
                                                checked={ 
                                                    section.head === "Language"? isLanguage.includes(item.language):
                                                    section.head === "Hands-on Practice" ? isPractice.includes(item.label):
                                                    section.head === "Video Duration" ? isDuration.includes(item.label):
                                                    section.head === "Topic" ? isTopic.includes(item.label):
                                                    section.head === "Level" ? isLevel.includes(item.label):
                                                    section.head === "Subtitles" ? isTitle.includes(item.label):
                                                    section.head === "Price" ? isPrice.includes(item.label):
                                                    false }        
                                                onChange={() =>{   
                                                    if(section.head === "Language"){
                                                        if(isLanguage.includes(item.language)){
                                                           setIsLanguage(isLanguage.filter(lang => lang !== item.language))
                                                        }else{
                                                           setIsLanguage([...isLanguage,item.language])
                                                        }           
                                                    }else if(section.head === "Hands-on Practice"){
                                                        if(isPractice.includes(item.label)){
                                                            setIsPractice(isPractice.filter(prev => prev !== item.label))
                                                        }else{
                                                            setIsPractice([...isPractice,item.label])
                                                        }
                                                    }else if(section.head === "Video Duration"){
                                                        if(isDuration.includes(item.label)){
                                                            setIsDuration(isDuration.filter(prev => prev !== item.label))
                                                        }else{
                                                            setIsDuration([...isDuration, item.label])
                                                        }
                                                    }else if(section.head === "Topic"){
                                                        if(isTopic.includes(item.label)){
                                                            setIsTopic(isTopic.filter(prev => prev !== item.label)) 
                                                        }else{
                                                            setIsTopic([...isTopic,item.label])
                                                        }
                                                    }else if(section.head === "Level" ){
                                                        if(isLevel.includes(item.label)){
                                                            setLevel(isLevel.filter(prev => prev !==  item.label))
                                                        }else{
                                                            setLevel([...isLevel,item.label])
                                                        }
                                                    }else if(section.head === "Subtitles"){
                                                        if(isTitle.includes(item.label)){
                                                            setTitle(isTitle.filter(prev => prev !== item.label))
                                                        }else{
                                                            setTitle([...isTitle,item.label])
                                                        }
                                                    }else if(section.head === "Price"){
                                                        if(isPrice.includes(item.label)){
                                                            setPrice(isPrice.filter(prev => prev !== item.label))
                                                        }else{
                                                            setPrice([...isPrice, item.label])
                                                        }
                                                    }
                                            }}    
                                                />
                                                 {item.label || item.language}
                                                 <span className='rating-numbers'>{item.viewers}</span>
                                                  </>
                                                }
                                            </label>                                           
                                         ))}
                                        </div>
                                    </div>
                                </div>
                            </div>                           
                         ))}
                        </div>
                    </div>
                </div>
            </nav>
            <button className='close-btn' onClick={closeSidebar}>
                <img src={cross} alt="cross-image" className='cross-image' />
            </button>
        </div>
    </div>
    </>
  )
}

export default FilterPanel