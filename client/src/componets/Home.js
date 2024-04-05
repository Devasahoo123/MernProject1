import React from 'react'
import '../index.css';
import web from '../images/img2.avif';
import HomeAbout from './HomeAbout';
function Home() {
  return (
    <>
      <HomeAbout 
          name = " Hi my name is Devanand Sahoo from" 
          imgsrc={web} 
          visit='/about' 
          btname="Get Start" 
          clg="IIIT Sonepat"
      />
    </>
  )
}

export default Home