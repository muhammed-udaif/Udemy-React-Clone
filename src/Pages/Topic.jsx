import React from 'react'
import '../Pages/Topic.css'

function Topic({exploreTopic}) {
  return (
    <>
     <div className="topic-container">
        <h2 className='explore-related-topic'>Explore realted topics</h2>
        <ul className='unordered-related-topic'>
            {exploreTopic.map((item,index) =>(
            <li key={index}>
                <a className='topic-react'>{item.head}</a>
            </li>
            ))}
        </ul>
     </div>
    </>
  )
}

export default Topic