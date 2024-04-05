import React, { useState, useEffect } from 'react';
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xyyrnred");
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   handleSubmit();
  // };

  return (
    <>
      {/* Your contact information JSX */}

      <div className="contact_form">
        <div className="container form_cont">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 contact_from_contant">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">
                  <b>Get in Touch</b>
                </div>
                {/* <form id='contact_form' onSubmit={handleFormSubmit}>
                  <div className='contact_form_name d-flex justify-content-between'>
                    <input type='name' name='name' className='align-items-between' placeholder='Name' value={formData.name} onChange={handleChange} required />
                    <input type='email' name='email' className='align-items-between' placeholder='Email' value={formData.email} onChange={handleChange} required />
                    <input type='number' name='phone' className='align-items-between' placeholder='Phone' value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="contact_form_text mt-4">
                    <textarea className='text_field contact_form_message' name="message" value={formData.message} onChange={handleChange} cols="30" rows="10" placeholder='write your message'></textarea>
                  </div><br />
                  <div className="contact_form_button">
                    <button type="submit" disabled={state.submitting} className='btn btn-primary'>Send Message</button>
                  </div>
                </form> */}

<div className="mt-4 pt-4 px-8 rounded-md bg-white bg-opacity-50 w-96 h-[88%] max-w-full">
        {state.succeeded ? (
          <p className="text-[#171b52] text-4xl font-bold mt-[50%] text-center">Thanks for your message !</p>
        ) : (
          <form onSubmit={handleSubmit}>
            

              <div className='contact_form_name d-flex justify-content-between'>
                    <input type='name' name='name' className='align-items-between' placeholder='Name'  required />
                    <input type='email' name='email' className='align-items-between' placeholder='Email'  required />
                    <input type='number' name='phone' className='align-items-between' placeholder='Phone'  required />
                  </div>
                  <div className="contact_form_text mt-4">
                    <textarea className='text_field contact_form_message' name="message" cols="30" rows="10" placeholder='write your message'></textarea>
                  </div><br />
                  <div className="contact_form_button">
                    <button  disabled={state.submitting} className='btn btn-primary'>Send Message</button>
                  </div>
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
           
          </form>
        )}
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
