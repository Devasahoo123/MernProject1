import {React,useContext} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import logo from '../images/img1.jpeg';
import "../../src/App.css";
import { UserContext } from '../App';
function Navebar() {
  const {state,dispatch} = useContext(UserContext);
  const RenderMenu=()=>{
    if(state){
      return (
        <>
           <li className="nav-item active">
                  <NavLink className="nav-link" to="/">Home </NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">Logout</NavLink>
              </li>
        </>
      )
    }
    else{
      return (
      <>
         <li className="nav-item active">
                  <NavLink className="nav-link" to="/">Home </NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">Registration</NavLink>
              </li>
              
      </>
      )
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <NavLink className="navbar-brand " to="#">
          <img className='logo' src={logo} alt="logo" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav  ml-auto">
             <RenderMenu/>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navebar
