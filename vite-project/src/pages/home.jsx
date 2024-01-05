import React from 'react'
import Profile from '../components/profile_picture'
import NavBar from '../components/navbar'
import HeroSection from '@/components/HeroSection'


const Home = () => {
  return (
    <React.Fragment>
    <NavBar/>
    <HeroSection/>
    <Profile/>
    <about/>
    </React.Fragment>
  )
}

export default Home