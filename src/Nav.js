import React from 'react'
import './Styling/nav.css'
import logo from './Images/logo.jpg'
import { Icon } from '@iconify/react';

const Nav = () => {
  return (
    <>
    <div className='navbar'>

    <div className='bar'>
    <img style={{width: "70px"}} src={logo} alt="" />

    

<div className='nav-buttons'>
<button>About <Icon icon="ep:arrow-up-bold" color="rgb(48,67,156)" width="10" rotate={2} /> </button>
<button>Programmes <Icon icon="ep:arrow-up-bold" color="rgb(48,67,156)" width="10" rotate={2} /> </button>
<button>Admissions <Icon icon="ep:arrow-up-bold" color="rgb(48,67,156)" width="10" rotate={2} /> </button>
<button>E-Portal <Icon icon="ep:arrow-up-bold" color="rgb(48,67,156)" width="10" rotate={2} /> </button>
<button>SQI Scholarship <Icon icon="ep:arrow-up-bold" color="rgb(48,67,156)" width="10" rotate={2} /> </button>
<button>News <Icon icon="ep:arrow-up-bold" color="rgb(48,67,156)" width="10" rotate={2} /> </button>
</div>


    </div>
    
 

  
 
  
 
  
 
  
 
    </div>
    
    </>
  )
  
}

export default Nav

