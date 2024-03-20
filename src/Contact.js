import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();
    const nameInput = useRef();
    const emailInput = useRef();
    const messageInput = useRef();

    const clearForm = () => {
        nameInput.current.value = '';
        emailInput.current.value = '';
        messageInput.current.value = '';
        alert("Sent successfully !!!");
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('vicky_portfolio_service', 'template_eayf85o', form.current, 'r921P1_-XJOk_epRS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact-right'>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder='Your Name' ref={nameInput} />
                <input type="email" name="from_email" placeholder='Your Email' ref={emailInput} />
                <textarea name="message" rows="6" placeholder='Your Message' ref={messageInput} />
                <div className='btn buttons'>
                    <button className='btn btn2' id='clear' type='reset'>Clear</button>
                    <button className="btn btn2" id='submit' type="submit" onClick={clearForm}>Submit</button>
                </div>
            </form>
        </div>
    );
};