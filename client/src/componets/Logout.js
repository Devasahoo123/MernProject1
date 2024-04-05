import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const LogOut = () => {
  const {state,dispatch} = useContext(UserContext);
  const history = useNavigate();
  //promish
  useEffect(()=>{
    fetch('/logout', {
      method: "GET",
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then((res) => {
      dispatch({type:"USER",payload:false});
      history('/login',{replace: true});
      if(res.status !==200){
        throw new Error('Error with server');
      }
    }).catch((err)=>{
      console.error("ERROR IN LOGOUT: ", err);
    });
    
  });

  return (
    <>
      <h1>Log Out</h1>
    </>
  )
}

export default LogOut
