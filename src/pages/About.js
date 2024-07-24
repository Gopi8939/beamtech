import { Container, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const About = ({setOpen,sepratePage=true}) => {
  return (
    <>
    {sepratePage && <Navbar setOpen={setOpen} />}
    <div className='About'>
    <Container>
      <Typography variant='h2' sx={{ fontWeight: "bold" }}>
          Construct Your Dream
        </Typography>
        {/* <img src={home} alt=''/> */}
        <Typography variant='h2' sx={{ color: "red", fontWeight: "bold" }}>
          Home
        </Typography>
        <Typography>
          Step Into the Home You've Always dreamed
        </Typography>
        <Typography>
          Of, Built Into The Highest Standard Of
        </Typography>
        <Typography>
          Quality
        </Typography>
        <div
        
      >
        <img  className="about-image" src={require("../assets/images/trally.png")} alt='img' />
      </div>
      </Container>
    </div>
    </>
  )
}

export default About
