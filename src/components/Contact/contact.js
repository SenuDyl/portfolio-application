import React, { useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaCopy } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("senurimallikarachchi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id='contactPage'>
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea name="message" rows="5" placeholder="Your Message" className="msg"></textarea>
          <button type="submit" value="send" className="submitBtn">Submit</button>
        </form>

        <div className="emailSection">
          <p>If you'd prefer, you can email me directly at:</p>
          <div className="emailContainer">
            <a href="mailto:senurimallikarachchi@gmail.com" className="emailLink">
              senurimallikarachchi@gmail.com
            </a>
            <FaCopy className="copyIcon" onClick={handleCopy} />
          </div>
          {copied && <span className="copyConfirmation">Copied!</span>}
        </div>


      </div>
    </section>
  );
};

export default Contact;
