import React, { useState } from 'react'
import signin from '../images/sign.jpeg'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from '../config/config';

function Signin() {
    const history = useNavigate();
    const [user,setUser]=useState({
        name:"",email: "",password:"",phone:"",work:"",cpassword:"",
    });
    const handelInputs = (e) => {
        console.log(e);
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const PostData = async (e)=>{
        e.preventDefault();

        const {name, email, password, phone, work, cpassword} = user;
        console.log(user);
        const res=await fetch(BACKEND_URL + "/register",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                  name,
                  email,
                  password,
                  phone,
                  work,
                  cpassword
              })
          });
          const  data= await res.json();
          console.log(data);
          if(res.status === 400 || !data){
            window.alert("Invalid Data");
            console.log(data);
        } else if (res.status === 422) {
              window.alert(data.error);
              console.log(data);
          }
          else{
            window.alert('Registered Successfully');
            console.log(data);

            history( "/login");
          }
    }
    
    
  return (
    <>
      <section className='signup'>
        <div className='container mt-5'>
            <div className='signup-content'>
                   <center><h2 className='form-title'>Signup</h2></center>
                <div className='signup-form'>
                    <form method='POST' className='registration-form' id='registration-form' action="">
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' className='form-control' name='name' placeholder='Your Name' 
                                value={user.name}
                                onChange={handelInputs}
                            />
                        </div>


                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' className='form-control' name='email' placeholder='Your email' 
                                value={user.email}
                                onChange={handelInputs}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='phone'>Phone</label>
                            <input type='phone' className='form-control' name='phone' placeholder='Your phone number' 
                                value={user.phone}
                                onChange={handelInputs}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='work'>Work</label>
                            <input type='text' className='form-control' name='work' placeholder='Your Profession' 
                                value={user.work}
                                onChange={handelInputs}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' className='form-control' name='password' placeholder='password' 
                                value={user.password}
                                onChange={handelInputs}
                            />

                        </div>

                        <div className='form-group'>
                            <label htmlFor='cpassword'>Confirm Password</label>
                            <input type='password' className='form-control' name='cpassword' placeholder='Confirm password' 
                                value={user.cpassword}
                                onChange={handelInputs}
                            />

                        </div>
                        <br />
                        <div className='form-group form-button'>
                            <input type='submit' className='btn btn-get-started' value="register" onClick={PostData}/>
                        </div>
                    </form>
                    <div className='signup'>
                        <img src={signin} alt='signup-image' className='signup-image'/>
                    </div>
                </div>
                <NavLink className="already" to={"/login"} >Already have an account? Login here.</NavLink>
            </div>
        </div>
      </section>
    </>
  )
}

export default Signin
