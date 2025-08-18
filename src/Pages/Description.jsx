import React from 'react'
import '../Pages/Description.css'

function Description() {
  return (
    <>
    <div className="full-description-container">
       <h2 className="description-count-head">Description</h2>
       <div className="below-description-count-head">
          <div className="more-para-containg-container">
            <p>This bestselling course by the author of "React Key Concepts" has turned more students into ReactJS developers than any other courses - <strong>more than 900,000 and counting!</strong></p>
            <p>-</p>
            <p><strong><em>Updated December 2024</em></strong></p>
            <p>Fully updated for React 19!</p>
            <p>- Added brand-new section on React Server Components(stable with React 19)</p>
            <p>- Updated multiple lectures to adjust for smaller changes due to React 19</p>
            <p><strong><em>Updated earlier 2024:</em></strong></p>
            <p>Added brand-new content (-3h) on the  NextJs App Router</p>
            <p>Added brand-new section on React</p>
          </div>
       </div>
    </div>
    </>
  )
}
                                    
export default Description