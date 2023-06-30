import React from "react";

const Projects = () => {
  return (
    <div className="container-fluid p-5">
      <div className="heading pt-5 text-start mb-5" style={{marginLeft:"4%"}}>Projects</div>
      <div className="row" style={{ height: "100%", background: "black" }}>
      <div className="col-md-4 " data-aos="fade-up" data-aos-duration="500">
        <div class="card bg-dark" >
        <div className="card-img">
          <img src="https://drive.google.com/uc?export=view&id=1v9IyfHO0QTrNOpMyQ30T4frdExTTXewo" class="card-img-top" alt="urlshort" />
        </div>  
          <div class="card-body">
            <h3 class="card-title text-warning">URL Shortener App</h3>
            <p class="card-text">
              You can shorten long url in this page for free. You just have to create a account in it.
            </p>
            <div className="btn-row ">
              <a href="https://url-shortener-eight-sigma.vercel.app/" class="btn btn-success mb-3" target="_blank" rel="noreferrer">
                Visit
              </a>
              <a href="https://github.com/Abdulwasim-S/url-shortener" class="btn btn-success mb-3" target="_blank" rel="noreferrer">
                Source Code FE
              </a>
              <a href="https://github.com/Abdulwasim-S/short-url-backend" class="btn btn-success mb-3" target="_blank" rel="noreferrer">
                Source Code BE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4" data-aos="fade-up" data-aos-duration="500">
        <div class="card bg-dark" >
          <div className="card-img">
          <img src="https://drive.google.com/uc?export=view&id=14iiABFw0pOegc_uYAHoq2OjywUfHPIIf" class="card-img-top" alt="renten" />
          </div>
           <div class="card-body">
            <h3 class="card-title text-warning">Product Rental App</h3>
            <p class="card-text">
              Rental product application model for buying products for rent.
            </p>
            <div className="btn-row ">
              <a href="https://guvi-hackthon2-frontend-abdulwasim-s.vercel.app/" class="btn btn-success mb-3" target="_blank" rel="noreferrer">
                Visit
              </a>
              <a href="https://github.com/Abdulwasim-S/guvi-hackthon2-frontend" class="btn btn-success mb-3" target="_blank" rel="noreferrer">
                Source Code FE
              </a>
              <a href="https://github.com/Abdulwasim-S/password-reset-backend" class="btn btn-success mb-3" target="_blank" rel="noreferrer">
                Source Code BE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4" data-aos="fade-up" data-aos-duration="500">
        <div class="card bg-dark">
          <div className="card-img">
            <img src="https://drive.google.com/uc?export=view&id=1JPPRawj1Lm3i59vEFpNUid1CrvkAqwQC" class="card-img-top" alt="brewery" />
          </div>
          <div class="card-body">
            <h3 class="card-title text-warning">Brewery App</h3>
            <p class="card-text">
              You can find the brewery shop address and contact using this application.
            </p>
            <div className="btn-row ">
              <a href="https://creative-taiyaki-1dec5a.netlify.app/" class="btn btn-success mb-3" target="_blank" rel="noreferrer">
                Visit
              </a>
              <a href="https://github.com/Abdulwasim-S/Breweries" class="btn btn-success mb-3" target="_blank" rel="noreferrer">
                Source Code FE
              </a>
              <a href="..." class="btn btn-success mb-3 disabled" target="_blank" rel="noreferrer">
                Source Code BE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Projects;
