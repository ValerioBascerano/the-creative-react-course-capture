import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Noi lavoriamo per rendere </h2>
          </div>
          <div className="hide">
            <h2>
              i vostri <span>sogni</span>
            </h2>
          </div>
          <div className="hide">
            <h2>reali.</h2>
          </div>
        </div>
        <p>
          Contattaci per qualsiasi idea fotografica o videografica tu abbia. Noi
          abbiamo validi professionisti con skills spettacolari
        </p>
        <button>Contattaci</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with the camera" />
      </div>
    </div>
  );
};

export default AboutSection;
