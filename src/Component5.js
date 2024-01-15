import React from 'react'
import './Styling/fifth.css'
import { Icon } from '@iconify/react';
import course from './Images/software-engineering-630x330-1.webp'
import course2 from './Images/DATA-SQI.jpg'
import course3 from './Images/product.jpg'
import course4 from './Images/digital-literacy.jpg'

const Component5 = () => {
  return (
    <>
      <div className="sixth">
        <div className="flex">
  <div className="wrap">

  <h1>Our Top Courses</h1>
        <p>Take a look at some of our popular courses</p>
        <a href="login.html">View all Courses <Icon icon="ep:arrow-right" color="black" width="10" />  </a>


    <div className="flex-pic">
    <div className="courses">
 <div className="inner-text">
 <img style={{width: '100%', borderRadius: '15px'}} src={course} alt="" />

<h2>Software Engineering</h2>
<h5> 
Software Engineering is one of the most in-demand jobs across the globe today. <br /> <br />

Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.
</h5>
<a href="login.html">Learn More <Icon icon="ep:arrow-right" color="black" width="10" />  </a>

 </div>

    </div>

    <div className="courses2">

<div className="inner-text">
<img style={{width: '100%', borderRadius: '15px'}} src={course2} alt="" />
    <h2>Data Science & Analysis</h2>
<h5>The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight. <br /> <br />

Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies.</h5>

        <a href="login.html">Learn More<Icon icon="ep:arrow-right" color="black" width="10" />  </a>

</div>
</div>

<div className="courses3">
<div className="inner-text">
    
<img style={{width: '100%', borderRadius: '15px'}} src={course3} alt="" />
<h2>UI/UX – Product Design</h2>
<h5>More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design is even more import at this time as it determines the overall experience of the users. <br /> <br />

Here, you’ll build your product design skillset from the bottom up with lessons, mentorship sessions, and career advice from our design professionals.</h5>

<a href="login.html">Learn More <Icon icon="ep:arrow-right" color="black" width="10" />  </a>


</div>
</div>

<div className="courses4">
<div className="inner-text">
<img style={{width: '100%', borderRadius: '15px'}} src={course4} alt="" />
<h2>Digital Literacy</h2>
<h5>
This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs). <br /> <br />

Taking this course will help you become a digitally literate person—that is, someone who understands how computer technology fits into our modern society and knows how to navigate a variety of computing environments.
</h5>

<a href="login.html">Learn More<Icon icon="ep:arrow-right" color="black" width="10" />  </a>

</div>
        
</div>


    </div>





  </div>







        </div>


      </div>
    </>
  )
}

export default Component5
