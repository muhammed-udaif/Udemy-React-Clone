import React from 'react'
import './Sidebar.css'
import triangle from '../assests/triangleArrow.svg'
import global from '../assests/global.svg'
import cross from '../assests/cross.svg'

function Sidebar({isOpen, closeSidebar}) {
    const sidebarData = [
        {
            head:"Explore by Goal",
            items:[
                'Learn AI',
                'Launch a new career',
                'Prepare for a certification',
                'Practice with Role Play'
            ]
        },
        {
            head:"Most popular",
            items:[
                'Web Development',
                'Mobile Development',
                'Game Development',
                'Entrepreneurship',
                'Business Analytics & intelligence',
                'Finance',
                'IT certifications',
                'Personal Transformation',
                'Graphic Design & Illustration',
                'Digital Marketing',
                'All categories'
            ]
        },
        {
            head:"More from Udemy",
            items:[
                'Udemy Business',
                'Get the app',
                'Invite friends',
                'Help and Support'
            ]
        }
    ]
  return (
    <>
    <div className ={`sidebar-full-container ${isOpen? "open":""}`}>
        <div className="sidebar-container">
            <div className="under-sidebar-container">
                <ul className='sidebar-top-list'>
                    <li>
                    <button className='sidebar-top-button for-btn'>
                        <div className="top-user-container">
                            <div className="sidebar-jm-container">
                                MU
                            </div>
                            <span className='inside-rounded-sidebar'></span>
                            <div className="for-top-greeting-name">
                                <span className='greeting'>Hi, Muhammed Udaif P</span>
                                <span className='welcoming'>Welcome back</span>
                            </div>
                        </div>
                    <img src={triangle} alt="triangle-arrow" />
                    </button>
                    </li>
                </ul>
                <h2 className="learn">Learn</h2>
                <ul className="list-under-learn">
                    <li>
                        <a className='learn-list-item'>
                          <div className='my-learning'>
                            My learning
                          </div>
                        </a>
                    </li>
                </ul>
                {sidebarData.map((section,idk) => (
                    <>
                   <h2 className="explore-goal">{section.head}</h2>
                   <ul className="list-of-explore-goal">
                    {section.items.map((item,i) =>(
                    <li key={i}>
                        <button className='sidebar-top-button for-btn ai-learn'>
                            <div className="my-learning">{item}</div>
                            <img src={triangle} alt="triangle-btn-img" className='under-ai-img' />
                        </button>
                    </li>         
                    ))}
                </ul>
                </>
                ))}
                <div className='global'>
                    <button className='under-global for-btn '>
                        <img src={global} alt="global-img" className='global-img' />
                        <span className='english'>English</span>
                    </button>
                </div>
            </div>
        </div>
        <button className='cross-btn for-btn' onClick={closeSidebar}>
            <img src={cross} alt="cross-img "  className='cross-img'/>
        </button>
    </div>
    </>
  )
}

export default Sidebar