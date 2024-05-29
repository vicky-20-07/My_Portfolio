import React, { useState } from "react";
import './Footer.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ContactUs } from "./Contact.js";
import { FaPaperPlane, FaPhone } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";

export default function Footer() {
    return (
        <footer>
            <div className="contactus">
                <div className="contact-left">
                    <h1>Contact Me</h1>
                    <p><FaPaperPlane id='icon' /><h2>vickybuvanesh@gmail.com</h2></p>
                    <p><FaPhone id='icon' /><h2>+91 9994104648</h2></p>
                    <div className="socialmedia">
                        <a href="https://www.instagram.com/vicky__20__07/"><InstagramIcon className="icons" /></a>
                        <a href="https://leetcode.com/vickybuvanesh/">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" className="icons" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/vignesh71810406/"><LinkedInIcon className="icons" /></a>
                        <a href="https://github.com/vicky-20-07"><GitHubIcon className="icons" /></a>
                        <a href="https://www.figma.com/@vicky84"><LuFigma className="icons" /></a>
                    </div>
                </div>
                <div className="contact-right">
                    <ContactUs />
                </div>
            </div>
            <div className="footerBottom">
                <p>
                    Copyright &copy;{new Date().getFullYear()} - Designed by<span id="designer">VIGNESH M</span>
                </p>
            </div>
        </footer>
    );
}