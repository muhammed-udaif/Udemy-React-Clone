import React from 'react'
import './FilterButton.css'
import filter from '../assests/allfiltering.svg'
import question from '../assests/question.svg'
import brakets from '../assests/brakets.svg'
import pen from '../assests/pen.svg'
import users from '../assests/user.svg'
import downarrow from '../assests/downarrow.svg'

function FilterButton({handleFilter, filterPractice}) {
  const filterButtons = [
    {icon:question, head:"Quizzes"},
    {icon:brakets, head:"Coding Exercises"},
    {icon:pen, head:"Practice Tests"},
    {icon:users, head:"Role Plays"}
  ]
  const extraFilterContainer = [
    {head:"Language"},
    {head:"Ratings"},
    {head:"Level"}
  ]
  return (
    <>
    <div className='filter-full-container'>
    <header className='filter-container'>
      <div>
      <span className="under-filter-container">
        Results for 
        <span className="react-js">“react js”</span>
        <span className='results'>(10,000 results)</span>
      </span>
      </div>
    </header>
    <form className='filter-btn'>
      <div className="under-filter-btn-container">
        <div className="all-filters">
          <div className="inside-all-filters">
            <button className="inside-all-filters-btn" onClick={(e) =>{e.preventDefault(); handleFilter();}}>
               <img src={filter} alt="" />
               <span className='filter'><strong>All filters</strong></span>
            </button>
          </div>     
          <div className="relevant ">
            <select className='most-relevant' id="sort-relevant">
              <option value="Most relevant" className='sort-option'>Most Relevant</option>
              <option value="Highest Rated" className='sort-option'>Highest Rated</option>
              <option value="Most Reviewed" className='sort-option'>Most Reviewed</option>
              <option value="Newest" className='sort-option'>Newest</option>
            </select>        
          </div>                                                                                                                                                           
        </div>                                                 
        <div className="filter-btn-series">
          <section className='select-btn-series'>
            <div className="filter-grid-container ">
             {filterButtons.map((item,index) =>(
              <div className="quizzes-container" key={index}>
                <button className='quizzes-btn'  onClick={(e) =>{e.preventDefault(); filterPractice(item.head)}}>
                  <img src={item.icon} alt="rounded-question" className='rounded-question' />
                  <span className='quizzes'>{item.head}</span>
                </button>
              </div> 
             ))}
            </div>
          </section>
        </div>
        <div className="gap-needed"></div>
        <div className="extra-filter">
        {extraFilterContainer.map((item, index) => (
          <div className={`inside-extra-filter ${index === 0?"language":"other-btn" }`} key={index}>
            <button className='quizzes-btn'>
              <span className="quizzes">{item.head}</span>
              <img src={downarrow} alt="downarrow-img" className='downarrow-img' />
            </button>
          </div>
        ))}
        </div>
      </div>
      <div className="new-relevant ">
        <select className='most-relevant' id="sort-relevant">
          <option value="Most relevant" className='sort-option'>Most Relevant</option>
          <option value="Highest Rated" className='sort-option'>Highest Rated</option>
          <option value="Most Reviewed" className='sort-option'>Most Reviewed</option>
          <option value="Newest" className='sort-option'>Newest</option>
        </select>
      </div> 
    </form>
    </div>
    </>
  )
}

export default FilterButton