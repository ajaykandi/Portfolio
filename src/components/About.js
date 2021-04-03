import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <h1>
          About <span>Me</span>
        </h1>
        <div className="about__content">
          <div className="about__image">
            <img
              src="https://cdn2.vectorstock.com/i/thumb-large/37/31/user-profile-or-my-account-avatar-login-icon-vector-31253731.jpg"
              alt=""
            />
          </div>
          <div className="about__descreption">
            <p>
              Hay.. I'am Ajay kandi . i'm a Web Developer, i would love to bulid
              Websites for people or Organizations.i live in Karimnager
              Telangana India.
            </p>
            <p>
              I am a Self thought Developer with Decent Knowledge on Front-End ,
              Back-end and Fullstack Development. I strongly believe in Power of
              Internet and learning.if you want to hire me for your next project
              Simly send me an email to{" "}
              <a href="mailto: Ajaykandi.136@gmail.com">
                Ajaykandi.136@gmail.com
              </a>
              .
            </p>
            <p>Below is a list of my current technical skills:</p>
          </div>
        </div>
        <div className="about__skils">
          <img
            src="https://sasha-sohrabi.com/images/html.png"
            alt="html"
            srcset=""
          />
          <img
            src="https://sasha-sohrabi.com/images/css.png"
            alt="Css"
            srcset=""
          />
          <img
            src="https://sasha-sohrabi.com/images/js.png"
            alt="Javascript"
            srcset=""
          />
          <img
            src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"
            alt="html"
            srcset=""
          />
          <img
            src="https://sasha-sohrabi.com/images/bootstrap.png"
            alt="html"
            srcset=""
          />
          <img
            src="https://sasha-sohrabi.com/images/react.png"
            alt="html"
            srcset=""
          />

          <img
            src="https://seeklogo.com/images/N/nodejs-logo-D26404F360-seeklogo.com.png"
            alt="nodejs"
            srcset=""
          />
          <img
            src="data:image/jpeg;base64,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"
            alt="Express.js"
            srcset=""
          />
          <img
            src="https://www.gtech.com.tr/wp-content/uploads/2020/09/mongodb-nedir.png"
            alt="MongoDB"
            srcset=""
          />

          <img
            src="https://sasha-sohrabi.com/images/sql.png"
            alt="html"
            srcset=""
          />
          <img
            src="https://sasha-sohrabi.com/images/git.png"
            alt="html"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
