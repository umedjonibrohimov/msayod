import React, {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import '../header.css';

function ContactUs() {
  const form = useRef();
  const [ message, setMessage ] = useState('Send Message');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8bym5si', 'template_2yjif0g', form.current, 'Hr4V1_Zg0AY54mQnu')
      .then((result) => {
        if (result.text === 'OK') {
          setMessage("Your message has been sent!")
        }
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return(
    <div>
      <section id="contact">
        <div class="container">
          <div class="section-header">
            <h3 class="section-title">Contact</h3>
            <p class="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
          </div>
        </div>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe class="gmap_iframe" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Дарвазский район Таджикистан&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row justify-content-center">
            <div class="col-lg-3 col-md-4">
              <div class="info">
                <div>
                  <i class="bi bi-geo-alt"></i>
                  <p>100 Office Str, Darvaz City<br/>Pamir, Tajikistan, 123321</p>
                </div>
                <div>
                  <i class="bi bi-envelope"></i>
                  <p>msayod@msayod.com</p>
                </div>
                <div>
                  <i class="bi bi-phone"></i>
                  <p>(+992)92-777-77-77</p>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-8">
              <div class="form" >
                <form ref={form} role="form" class="php-email-form" onSubmit={sendEmail}>
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"/>
                  </div>
                  <div class="form-group mt-3">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"/>
                  </div>
                  <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
                  </div>
                  <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
                  </div>
                  <div class="text-center"><button type="submit">{message}</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ContactUs;