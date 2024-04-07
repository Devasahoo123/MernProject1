import React, { useContext, useState } from 'react'
import login from '../images/login.jpeg'
import { NavLink,useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { BACKEND_URL } from '../config/config';

function Login() {

  const {state,dispatch} = useContext(UserContext);
  
  const history = useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const loginUser=async(e)=>{
    e.preventDefault();

    const res=await fetch(BACKEND_URL + '/signin',{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    });
    const data = res.json();
    if(res.status===400 ||  !data) {
      window.alert('Invalid Email or Password');
    }
    else {
      dispatch({type:"USER",payload:true});
      window.alert('Logged In Successfully!');
      history("/");
    }
  }
  return (
    <>
      
      <section className='signup'>
        <div className='container mt-5'>
            <div className='signup-content'>
                   <center><h2 className='form-title'>Login</h2></center>
                <div className='signup-form'>
                    <div className='login'>
                        <img src={login} alt='signup-image' className='signup-image'/>
                    </div>
                    <form method='POST' className='registration-form' id='registration-form' action="">
                        


                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' className='form-control' name='email' placeholder='Your email' autoComplete='off'
                              value={email} onChange={e=> setEmail(e.target.value)} 
                            />
                        </div> 

                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' className='form-control' name='name' placeholder='password' autoComplete='off'
                              value={password} onChange={e => setPassword(e.target.value)} 
                            />
                        </div>

                        
                        <br />
                        <div className='form-group form-button'>
                          <button type='button' className='btn btn-get-started' onClick={loginUser}>Log In</button>
                        </div>
                      <NavLink className="already" to={"/signup"} >Create account</NavLink>
                    </form>
                    
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Login
