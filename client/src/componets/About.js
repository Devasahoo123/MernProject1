import React, { useEffect, useState } from 'react';
import img from '../images/logo3.jpeg'
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../config/config';
const About = () => {

  const history = useNavigate();
  const [userData,setUserData]=useState({});

  const callAboutPage=async()=>{
    try{
      const res = await fetch(BACKEND_URL + '/about',{
        method:"GET",
        headers:{
           Accept: "appllication/json",
           "Content-Type": "application/json"
        },
        credentials:"include"
      });
      const data = await res.json();
      setUserData({...data});

      if(res.status!==200){
          throw new Error('Error');
      }
    }
    catch(err){
      alert("plz login first");
      console.log('Error:', err);
      history("/login");
    }
  }
  useEffect(()=>{
    callAboutPage();
  },[]);
  
  return (
    <>
    <div className='container divst'>
    <div className="flex main_div">
      {/* Left Section */}
      <div className="w-1/4 bg-teal-500 p-4 text-white">
        <div className="flex items-center justify-center h-32 bg-teal-400 rounded-full">
          <img src={img} alt="Profile Picture" className="phot" />
        </div>
        <div className="mt-4">
        Worklink
          <ul>
            <li>
              <a href='https://www.youtube.com/channel/UC6cUQc-z0riMXyPUKlIFlJQ' className="fab fa-youtube text-white">YouTube</a> 
            </li>
            <li>
              <a className="fab fa-instagram text-white">Instagram</a> 
            </li>
            <li>
              <a className="fab fa-twitter text-white">Github</a> 
            </li>
            <li>
              <a className="fas fa-envelope text-white">Email</a> 
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="rightdiv_main ">
        <div className='upperdiv'>
          <h2 className="text-2xl font-bold mt-4">{userData?.name}</h2>
          <button className=" text-black rounded edit_btn">Edit Profile</button>
        </div>
          <p className="text-lg text-red-600">Web Developer</p>
        <hr className="my-4" />
        <div className="flex">
          <div className="w-1/4">
            <ul>
              <li>About</li>
              <li>Timeline</li>
            </ul>
          </div>
          <div className="w-3/4">
            <div>
              <p><strong>User ID:</strong> 7878645546</p>
              <p><strong>Name:</strong> {userData?.name}</p>
              <p><strong>Email:</strong> {userData?.email}</p>
              <p><strong>Phone:</strong> {userData?.phone}</p>
              <p><strong>Profession:</strong> Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default About;
