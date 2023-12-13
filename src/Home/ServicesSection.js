import React from 'react';

function ServicesSection() {
  return (
    <div className="services-section">
      <div className="container">
        <h3>How can <span>we help?</span></h3>
        <div className="description-services">
          <p>
            We help premium brands <strong>achieve their future</strong> through innovation and creative perspectives.
            <strong>We grow your company</strong> through proprietary in-house ideas, tested and perfected
            <strong>over the years.</strong>
          </p>
        </div>

        <div className="service-boxes-slider">
          <div className="card-parent">
            {/* Content for Web Design */}
            <div className="card-inner-row">
              <div className="card featured to-top-left">
                <div className="heading-wrapper">
                  <h4 className="heading"><i className="fas fa-crown"></i> Web Design</h4>
                </div>
                <div className="paragraph-wrapper">
                  <p className="paragraph">
                    Your design has to be as intuitive as it is helpful and insightful. We gathered an intimate understanding of the latest UI &amp; UX behaviors.
                  </p>
                </div>
                <div className="project-button">
                  <a href="/web-design" title="Web Design">
                    <span>Read more</span>
                    <svg viewBox="0 0 80 80">
                      <polyline points="19.89 15.25 64.03 15.25 64.03 59.33"></polyline>
                      <line x1="64.03" y1="15.25" x2="14.03" y2="65.18"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-img">
                <img
                  className="img-fluid project-image lazy"
                  width="400"
                  height="400"
                  src="/public/img/loading-blog.gif "
                  data-src="/public/images/media/1632922319quin-service1.webp"
                  alt="Web Design"
                />
              </div>
            </div>
            {/* End of Web Design content */}
          </div>
          <div className="card-parent">
            {/* Content for Web Design */}
            <div className="card-inner-row">
              <div className="card featured to-top-left">
                <div className="heading-wrapper">
                  <h4 className="heading"><i className="fas fa-crown"></i> Web Design</h4>
                </div>
                <div className="paragraph-wrapper">
                  <p className="paragraph">
                    Your design has to be as intuitive as it is helpful and insightful. We gathered an intimate understanding of the latest UI &amp; UX behaviors.
                  </p>
                </div>
                <div className="project-button">
                  <a href="/web-design" title="Web Design">
                    <span>Read more</span>
                    <svg viewBox="0 0 80 80">
                      <polyline points="19.89 15.25 64.03 15.25 64.03 59.33"></polyline>
                      <line x1="64.03" y1="15.25" x2="14.03" y2="65.18"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-img">
                <img
                  className="img-fluid project-image lazy"
                  width="400"
                  height="400"
                  src="/public/img/loading-blog.gif "
                  data-src="/public/images/media/1632922319quin-service1.webp"
                  alt="Web Design"
                />
              </div>
            </div>
            {/* End of Web Design content */}
          </div>
          <div className="card-parent">
            {/* Content for Web Design */}
            <div className="card-inner-row">
              <div className="card featured to-top-left">
                <div className="heading-wrapper">
                  <h4 className="heading"><i className="fas fa-crown"></i> Web Design</h4>
                </div>
                <div className="paragraph-wrapper">
                  <p className="paragraph">
                    Your design has to be as intuitive as it is helpful and insightful. We gathered an intimate understanding of the latest UI &amp; UX behaviors.
                  </p>
                </div>
                <div className="project-button">
                  <a href="/web-design" title="Web Design">
                    <span>Read more</span>
                    <svg viewBox="0 0 80 80">
                      <polyline points="19.89 15.25 64.03 15.25 64.03 59.33"></polyline>
                      <line x1="64.03" y1="15.25" x2="14.03" y2="65.18"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-img">
                <img
                  className="img-fluid project-image lazy"
                  width="400"
                  height="400"
                  src="/public/img/loading-blog.gif "
                  data-src="/public/images/media/1632922319quin-service1.webp"
                  alt="Web Design"
                />
              </div>
            </div>
            {/* End of Web Design content */}
          </div>
          <div className="card-parent">
            {/* Content for Web Design */}
            <div className="card-inner-row">
              <div className="card featured to-top-left">
                <div className="heading-wrapper">
                  <h4 className="heading"><i className="fas fa-crown"></i> Web Design</h4>
                </div>
                <div className="paragraph-wrapper">
                  <p className="paragraph">
                    Your design has to be as intuitive as it is helpful and insightful. We gathered an intimate understanding of the latest UI &amp; UX behaviors.
                  </p>
                </div>
                <div className="project-button">
                  <a href="/web-design" title="Web Design">
                    <span>Read more</span>
                    <svg viewBox="0 0 80 80">
                      <polyline points="19.89 15.25 64.03 15.25 64.03 59.33"></polyline>
                      <line x1="64.03" y1="15.25" x2="14.03" y2="65.18"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-img">
                <img
                  className="img-fluid project-image lazy"
                  width="400"
                  height="400"
                  src="/public/img/loading-blog.gif "
                  data-src="/public/images/media/1632922319quin-service1.webp"
                  alt="Web Design"
                />
              </div>
            </div>
            {/* End of Web Design content */}
          </div>
          {/* Repeat the structure for other services */}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
