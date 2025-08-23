import React, { useEffect, useState } from 'react'
import './Footer.css'
import footerArrow from '../assests/footer-arrow.svg'
import globe from '../assests/global.svg'

function Footer({}) {

  const [size, setSize] = useState(false)

  useEffect(() =>{
    const handleResize = () =>{
      setSize(window.innerWidth>438)
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () =>{
       window.removeEventListener("resize", handleResize)
    };
   
  },[])
  
  const footerHeadItem =[
    {head:"In-demand Careers"},
    {head:"Certifications by Skill"},
    {head:"Web Development"},
    {head:"IT Certifications"},
    {head:"Leadership"},
    {head:"Data Science"},
    {head:"Communication"},
    {head:"Business Analytics & Intelligence"}
  ]
  const footeristItems = [
     {head:"About",about:"About us",career:"Careers",contact:"Contact us",blog:"Blog",investors:"Investors"},
     {head:"Discover Udemy",about:"Get the app",career:"Teach on Udemy",contact:"Plans and Pricing",blog:"Affiliate",investors:"Help and Support"},
     {head:"Udemy for Business",about:"Udemy Business"},
     {head:"Legal & Accessibility", about:"Accessibility statement",career:"Privacy policy",contact:"Sitemap",blog:"Terms"}
  ]
  const footerNewListItems = [
    {head:"In-demand Careers", java:"Data Scientist",stack:"Full Stack Web Developer",cloud:"Cloud Engineer",project:"Project Manager",game:"Game Developer",angular:"All Career Accelerators"},
    {head:"Web Development", java:"Web Development",stack:"JavaScript",cloud:"React JS",project:"Angular",game:"Java"},
    {head:"IT Certifications",java:"Amazon AWS",stack:"AWS Certified Cloud Practitioner",cloud:"AZ-900: Microsoft Azure Fundamentals",project:"AWS Certified Solutions Architect - Associate",game:"Kubernetes"},
    {head:"Leadership",java:"Leadership",stack:"Management Skills",cloud:"Project Management",project:"Personal Productivity",game:"Emotional Intelligence"},
    {head:"Certifications by Skill",java:"Cybersecurity Certification",stack:"Project Management Certification",cloud:"Cloud Certification",project:"Data Analytics Certification",game:"HR Management Certification",angular:"See all Certifications"},
    {head:"Data Science",java:"Data Science",stack:"Python",cloud:"Machine Learning",project:"ChatGPT",game:"Deep Learning"},
    {head:"Communication",java:"Communication Skills",stack:"Presentation Skills",cloud:"Public Speaking",project:"Writing",game:"PowerPoint"},
    {head:"Business Analytics & Intelligence",java:"Microsoft Excel",stack:"SQL",cloud:"Microsoft Power BI",project:"Data Analysis",game:"Business Analysis"}
  ]
  return (
    <>
      <div className="footer-container">
        <div className="under-footer-container">
          <div>
            <div className="teach">Teach the world online</div>
            <div className="below-teach">Create an online video course, reach students across the globe, and earn money</div>
          </div>
          <div className="teach-udemy-btn">
            <a className='under-teach-udemy-btn'>
              <span>Teach on Udemy</span>
            </a>
          </div>
        </div>
        <div className="top-company-container">
          <div className="head-top-company">
            <span>Top companies choose <span className='udemy-business'>Udemy Business</span> to build in-demand career skills.</span>
          </div>
          <div className="img-top-company">
            <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="nasdaq"  className='nasdaq'/>
            <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="after-nasdaq-img" className='nasdaq' />
            <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="net-app" className='nasdaq' />
            <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="eventbrite" className='eventbrite' />
          </div>
        </div>
        <div className="explore-top-skill">
          <div className="under-explore-top-skill">
            <div className="explore-top-head-container">
                <div className="explore-top-head">
                  <span className="explore-certification">Explore top skills and certifications</span>
                </div>
                 {size ? 
                 <div className="new-repeatedly-explore-container">
                  {footerNewListItems.map((item,index) =>(
                  <div className="demand-full-container" key={index}>
                    <div className="under-demand-container">
                      <div className="demand-head about">
                        {item.head}
                      </div>
                      <ul className='list-of-demand-careers'>
                        <li><a className='data'>{item.java}</a></li>
                        <li><a className='data'>{item.stack}</a></li>
                        <li><a className='data'>{item.cloud}</a></li>
                        <li><a className='data'>{item.project}</a></li>
                        <li><a className='data'>{item.game}</a></li>
                        <li><a className='data'>{item.angular}</a></li>
                      </ul>
                    </div>
                  </div>
                  ))}
                </div> :
                <div className="repeatedly-explore-container">
                  {footerHeadItem.map((item,index) =>(
                  <div className="explore-career" key={index}>
                    <div className="under-explore-career about explore-margin">
                      <h3 className='in-demand-career'>
                        <button className='demand-career-btn under-teach-udemy-btn'>
                          <span className='under-demand-career'>
                            <div className="under-demand-span">{item.head}</div>
                          </span>
                        </button>
                      </h3>
                      <img src={footerArrow} alt="down-arrow" className='footer-down-arrow' />
                    </div>
                  </div>
                  ))}
                </div>
                }
            </div>
          </div>
        </div>
        <div className="about-container">
          <div className="under-about-container">
            <div className="footer-grid-container"> 
             {footeristItems.map((item,index) =>(
              <div className="footer-grid-item" >
                <div className="under-footer-grid-item">
                  <div className="about ">{item.head}</div>
                  <ul className='about-list'>
                    <li ><a className='about-list-item'>{item.about}</a></li>
                    <li ><a className='about-list-item'>{item.career}</a></li>
                    <li ><a className='about-list-item'>{item.contact}</a></li>
                    <li ><a className='about-list-item'>{item.blog}</a></li>
                    <li ><a className='about-list-item'>{item.investors}</a></li>
                  </ul>
                </div>
              </div>
             ))}
            </div>
          </div>
        </div>
        <div className="footer-last-container">
          <div className="under-footer-last-container">
            <div className="udemy-footer-img-container">
              <div className="footer-udemy-img-container">
                <a className='inside-footer-udemy-img under-teach-udemy-btn'>
                  <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="footer-img" className='footer-img' />
                </a>
              </div>
              <div className="text-udemy-container">© 2025 Udemy, Inc.</div>
            </div>
            <div className="footer-coolies">
              <button className='cookie-btn under-teach-udemy-btn about-list-item english-btn'>
                Cookie settings
              </button>
            </div>
            <div className="footer-english">
              <button className='english-btn under-teach-udemy-btn about-list-item'>
                <img src={globe} alt="global-img" className='footer-global ' />
                <span className='english'>English</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}

export default Footer