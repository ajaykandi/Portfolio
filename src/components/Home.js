import React from "react";
import "./Home.css";
import Typical from "react-typical";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__content">
          <p>hay..!</p>
          <h1>
            I'm <span>Ajay Kandi</span>
          </h1>
          <h3>
            I'm a{" "}
            <Typical
              steps={[
                "Front End Developer...",
                1000,
                "Backend Developer...",
                500,
                "Full Stack Developer...",
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
