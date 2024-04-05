import React from 'react'
import '../index.css';
import web from "../images/img2.avif";
import { NavLink } from 'react-router-dom';
function HomeAbout(props) {
  return (
    <>
    <section id='header' className='d-flex align-items-center'>
    <div className='container-fluid'>
            <div className='row '>
                <div className='col-10  mx-auto'>
                  <div className='row'>
                    <div className='col-md-6 pt-5  pt-lg-0 order-2 order-lg-1 d-flex align-items-center flex-column'>
                      <h1>{props.name} <strong className='brand-name'>  {props.clg}</strong></h1>
                      <h2 className='my-3'>
                        I am Full Stack Web Developer, making website in <strong>MERN</strong>
                      </h2>
                      <div className='mt-3'>
                          <NavLink to={props.visit} className="btn btn-get-started">{props.btname}</NavLink>
                      </div>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-1 header-img'>
                        <img src={props.imgsrc} alt="Bg home Image" className='img-fluid animated'/>
                    </div>
                  </div>
                </div>
            </div>
    </div>        


    </section>
    </>
  )
}

export default HomeAbout;