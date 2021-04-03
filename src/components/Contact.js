import React from "react";
import "./Contact.css";
import phone from "../Images/contact-icons/phone.png";
import email from "../Images/contact-icons/Email.png";
import fb from "../Images/contact-icons/fb.png";
import linkedin from "../Images/contact-icons/linkedin.png";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <h1>Contact ME</h1>
        <div className="contact__content">
          <div className="contact__description">
            <p>
              <img src={phone} alt="Phone-icon" />
              <a href="tel:+91 7981553254"> +91 7981553254</a>
            </p>
            <p>
              <img src={email} alt="email" />
              <a href="mailto: ajaykandi.136@gmail.com">
                ajaykandi.136@gmail.com
              </a>
            </p>
            <div className="contact__icons">
              <a
                href="https://www.linkedin.com/in/ajay-kandi-6a98a9155/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>

              <a
                href="https://www.facebook.com/ajay.kandi.14"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fb} alt="Facebook" />
              </a>

              <a
                target="_blank"
                href="https://github.com/ajaykandi"
                rel="noreferrer"
              >
                <img
                  src="https://image.flaticon.com/icons/png/128/270/270798.png"
                  alt="GItHUb"
                />
              </a>
            </div>
          </div>
          <div className="contact__image">
            <img
              src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt="contactImage"
              srcset=""
            />
          </div>
        </div>
        <footer>Copyright ©2021 My Portfolio by Ajay Kandi</footer>
      </div>
    </div>
  );
}

export default Contact;
