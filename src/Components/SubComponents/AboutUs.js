import React from "react";

function AboutUs() {
    return(
      <div>
        <section id="about">
          <div class="container" data-aos="fade-up">
            <div class="row about-container">
              <div class="col-lg-6 content order-lg-1 order-2">
                <h2 class="title">Few Words About Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon"><i class="bi bi-briefcase"></i></div>
                    <h4 class="title">Nurmuhammad Ibrohimov</h4>
                    <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                  </div>
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon"><i class="bi bi-card-checklist"></i></div>
                    <h4 class="title">Habiba Ibrohimova</h4>
                    <p class="description"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  </div>
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon"><i class="bi bi-binoculars"></i></div>
                    <h4 class="title">Arofat Ibrohimova</h4>
                    <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                  </div>
              </div>
              <div class="col-lg-6 background order-lg-2 order-1" data-aos="fade-left" data-aos-delay="100"></div>
            </div>
          </div>
        </section>
        <section id="facts">
          <div class="container" data-aos="fade-up">
            <div class="section-header">
              <h3 class="section-title">Facts</h3>
              <p class="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>
            <div class="row counters">
              <div class="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="30,000 acres" data-purecounter-duration="1" class="purecounter">30000</span>
                <p>Acres</p>
              </div>
              <div class="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" class="purecounter">4</span>
                <p>Hard Workers</p>
              </div>
              <div class="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="1" class="purecounter">1991</span>
                <p>Since</p>
              </div>
              <div class="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="332" data-purecounter-duration="1" class="purecounter">332</span>
                <p>Clients</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}
export default AboutUs;