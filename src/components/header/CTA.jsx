import React from "react";
import MichaelCV from "../../assets/MichaelCV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={MichaelCV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
