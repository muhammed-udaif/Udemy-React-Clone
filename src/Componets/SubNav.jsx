import React, { useState } from 'react'
import './SubNav.css'
import arrow from '../assests/left-arrow.svg'

function SubNav() {
  const [head,setHead] = useState('react js')
  const reactItems = [
    {head:"React with Next.js and Redux"},
    {head:"React Native for Mobile Apps"},
    {head:"Full-Stack Development with React"},
    {head:"React and TypeScript Projects"}
  ]
  return (
    <div className='subNav-container'>
        <div className="inside-sub">
            <h1 className='recommended'><span>Recommended in </span><span className='bold'>{head}</span></h1>
            <div>
                <section className='first-section '>
                  <div className="under-first-section">
                    {reactItems.map((item,index) =>(
                      <div className="grid-container" key={index}>
                        <div className="grid-item">
                          <button className='recommended-btn'>
                            <img src={arrow} alt=""  className='arrow-img'/>
                            <span className="react-list">{item.head}</span>
                          </button> 
                        </div> 
                      </div>
                    ))}
                  </div>    
                </section>
            </div>
        </div>
    </div>
  )
}

export default SubNav