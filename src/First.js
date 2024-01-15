import React from 'react'
import './Styling/first.css'
import student from './Images/bg-header-sqi-1.png'

const First = () => {
  return (
    <>
     <div className="one">

     <div className="flez">
     <div className='text'>
        <h1>Study to become a global talent</h1>
        <p>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
        <button>Start Now</button>
      </div>
      
      <div className="pics">
        <img style={{width: "500px"}} src={student} alt="" />
      </div>

     </div>
      
      </div> 
    </>
  )
}

export default First

