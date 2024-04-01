import React from "react";

const ImagePage = () => {
  return (
    <div style={{ height: "90vh" }}>
      <div className="row m-5">
        <div
          className="col-md-8"
          style={{ overflow: "hidden" }}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h5 className="for-name">HI,I'M Abdulwasim.</h5>
          <h1 className="for-role">Full Stack Developer</h1>
        </div>
        <div className="col-md-4">
          <img
            className="profile-pic"
            src="https://drive.google.com/thumbnail?export=view&id=1egyFxCgosf-mH0WG-kqNksusOQOOvhM_&sz=w10000"
            alt="profile"
          />
        </div>
      </div>
      <a className="contact-button btn btn-warning mb-5" href="#contact">
        Contact
      </a>
    </div>
  );
};

export default ImagePage;
