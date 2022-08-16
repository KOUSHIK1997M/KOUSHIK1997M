import React, { useState } from "react"
import emailjs from "emailjs-com"
import contact1 from "./contact1.png"
import "./Contact.css"
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from "react-icons/ti";

const Contact = () => {

  function formSubmit(e){
    e.preventDefault();
    
    emailjs.sendForm(
      'service_fe8mt87',
      'template_novakzm',
      e.target,
      'A2JLGXUySYAq570bQ'
    ).then(res =>{
      window.alert('your message sent successfully')
    }).catch(err => {
      window.alert('error........');

    })
  }

  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Koushik Mandal</h1>
                  <p>Full-Stack Developer</p>
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +91 6296783642</p>
                  <p>Email: math.koushik1997@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                      <TiSocialFacebook/>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                      <TiSocialInstagram/>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                      <TiSocialTwitter/>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname'  />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject'  />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' ></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
