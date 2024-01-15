import React from 'react'
import './Styling/third.css'
import grayscale from './Images/college.jpg'
import grayscale2 from './Images/prof.jpg'
import grayscale3 from './Images/certificate.jpg'

const Component3 = () => {
  return (
    <>
     <div className='forth'>
 <div className="flex">

<div className="wrap">


<h1>Start here. Change the world.</h1>


<div className="flex-pic">

<div className="grayscale">
       <img src={grayscale} alt="" />

       <h3>National Innovative Diploma (NID)</h3>
       <h5>The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).</h5>
        <button>Learn More</button>
   
   </div>

   <div className="grayscale2">
   <img src={grayscale2} alt="" />

   <h3 style={{width: "70%", backgroundColor: "yellow"}}>Professional Diploma Certificate</h3>
   <h5>The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.</h5>
   <button>Learn More</button>
   </div>

   <div className="grayscale3">
   <img src={grayscale3} alt="" />
   <h3>Certificate Program</h3>
   <h5>The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.</h5>
   <button>Learn More</button>
   </div>

</div>





</div>






 </div>



    </div> 
    </>
  )
}

export default Component3
