import React, { useEffect } from 'react'
import "../styles/ScrollImage.css"
import { Typography } from '@mui/material'
import Aos from "aos";
import "aos/dist/aos.css"
const Service = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='service-container'>
      <div className='service-box'>
        <Typography variant='h4' sx={{fontWeight:700, fontSize:"60px", letterSpacing:"-2%", lineHeight:"75.6px", color:"#222D37"}} className='service-title' >Our Services</Typography>
      </div>
      <div className='service-mainbox'>
      <div className='service-content'>
      <Typography sx={{fontWeight:300, fontSize:"24px", lineHeight:"28px", color:"#222D37", wordWrap:"break-word"}}>Flawless construction powered by deep expertise.</Typography>
      </div>
      <div className='serviceimg-container'>
      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-offset="30" data-aos-duration="1500"  className='service-image-house'>
      <div className='service-rectangle'/>
      <button>Houses</button>
      </div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-offset="100" data-aos-duration="1500"  className='service-image-bulding'>
      <div className='service-rectangle'/>
      <button>construction For Business</button>
      </div>

      </div>
      </div>
    </div>
  )
}

export default Service
