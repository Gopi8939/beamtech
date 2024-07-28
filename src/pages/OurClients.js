import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowForward } from '@mui/icons-material'
import { Button, Link } from '@mui/material'
import React from 'react'
// import {} from '@mui/material'
const OurClients = () => {
  return (
    <div className='ourClient-container'>
      <div className='our-clients'>
        <p>Our Clients</p>
      </div>
      <div>
        <div className='client-logos clientStyle'>
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
          <img src={require('../assets/images/icon.png')} alt='client3' />
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
          <img src={require('../assets/images/icon.png')} alt='client3' />
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
          <img src={require('../assets/images/icon.png')} alt='client3' />
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
          <img src={require('../assets/images/icon.png')} alt='client3' />
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
        </div>
      </div>
      <div className='cta-container'>
      <div className='cta-header'>
      <p>CTA Section</p>
      </div>
      <p className='cta-content'> Ready to start your next construction project with BeamTech? Contact us 
      today for a free consultation and quote. Our team is eager to bring your vision to life</p>
      <div className="flex justify-center py-6 relative z-10">
                    <Button variant='contained' className="cta-btn" sx={{borderRadius:"25px",backgroundColor:"#222D37"}} endIcon={<ArrowForward/>}>Get a Free Quote</Button>
                </div>
      </div>
    </div>
  )
}

export default OurClients
