import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { address ,phone, email, whatsapp  } from "../../info/Inforamtion";

const ContactSec = props => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p02t0ig', 'template_6ltevgp' , form.current, 'cwJAQF5fb-6irn37A')
          .then((result) => {
              alert(result.text);
          }, (error) => {
              console.log(error.text);
          });
        }
    return (
   <div> 
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0" >
                    <div className="bg-light d-flex flex-column justify-content-center px-5" style={{height: '450px'}}>
                        <div className="flexin align-items-center mb-5">
                            <div className="btn-icon bg-primary mr-4">
                                <i className="fa fa-2x fa-map-marker-alt text-white"></i>
                            </div>
                            <div className="mt-n1">
                                <h4>Our Location</h4>
                                <p className="m-0">{address}</p>
                            </div>
                        </div>
                        <div className="flexin align-items-center mb-5">
                            <div className="btn-icon bg-secondary mr-4">
                                <i className="fa fa-2x fa-phone-alt text-white"></i>
                            </div>
                            <div className="mt-n1">
                                <h4>Call Us</h4>
                                <p className="m-0">{phone}</p>
                                <p className="m-0">{whatsapp}</p>
                            </div>
                        </div>
                        <div className="flexin align-items-center">
                            <div className="btn-icon bg-warning mr-4">
                                <i className="fa fa-2x fa-envelope text-white"></i>
                            </div>
                            <div className="mt-n1 bottom-email">
                                <h4>Email Us</h4>
                                <p className="m-0">{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="section-title position-relative mb-4">
                        <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Need Help?</h6>
                        <h1 className="display-4">Send Us A Message</h1>
                    </div>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-6 form-group">
                                    <input name="user_name" type="text" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="Your Name" required="required" />
                                </div>
                                <div className="col-6 form-group">
                                    <input name="user_email" type="email" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="Your Email" required="required" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" name='phone_number' className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="Your Phone Number" required="required" />
                            </div>
                            <div className="form-group">
                                <textarea name="message" className="form-control border-top-0 border-right-0 border-left-0 p-0" rows="5" placeholder="Message" required="required"></textarea>
                            </div>
                            <div>
                                <button value="Send" className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
         <div className='col-md-12 map'>
        <>
        {/* eslint-disable-next-line */}
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57907.28868388204!2d67.05616665337679!3d24.890969613983287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fbdc71467c9%3A0x79cd059a04bf8c5f!2sInstitute%20of%20Sonology%20Ultrasound%20Training%20Centre%20karachi!5e0!3m2!1sen!2s!4v1674644020329!5m2!1sen!2s" 
        width="900"
        height="550"
        style={{border: "0"}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
         </>
         </div>
    </div>
  )
}

export default ContactSec