import React from "react";
import "./Project.css";

function Project({ img }) {
  return (
    <div className="project">
      <div className="project__container">
        <a target="_blank" rel="noreferrer" href={img.url}>
          <img className="project__image" src={img.screenshot} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Project;
