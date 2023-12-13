import React from 'react';

function AboutSection() {
  return (
    <div className="about-section light-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="item-about">
              <div className="item-about-row">
                <div className="item-about-img2">
                  <div className="avo-image avo-tooltip about-img3 big-paral">
                    <div
                      className="simpleParallax imago"
                      data-tooltip-tit="Web Design Services"
                      data-tooltip-sub="User Experience"
                    >
                      <img
                        src="/public/img/loading-blog.gif"
                        width="500"
                        height="666"
                        className="lazy thumparallax-down img-fluid"
                        data-src="/public/images/media/1632839113about-us-pic1.png"
                        alt="about-us"
                      />
                    </div>
                  </div>
                </div>
                {/* Other nested divs and images */}
              </div>
              <div className="exp-about">
                <h5 className="nmb-font-about">05</h5>
                <h6 className="service_summary-about">YEARS OF EXPERIENCE</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="about-heading1-home">About the studio</h4>
            <h3 className="about-heading2-home">
              Unlimited Skills for <span>Super Projects.</span>
            </h3>
            <p>
              <strong>Web design</strong> encompasses many different skills and disciplines in
              the production and maintenance of websites. The different areas of web design include
              web graphic design, interface design, including standardized code.
            </p>
            <ul>
              <li>Beautiful and easy to understand UI, professional animations</li>
              <li>These advantages are pixel perfect design & clear code delivered</li>
              <li>Present your services with flexible, convenient and multipurpose</li>
            </ul>
            <a href="https://quin2.lucian.host/pricing" target="_self" className="btn btn-style1">
              <span>Get the offer</span>
              <img src="/images/media/burger-close.png" alt="Your Alt Text" width="10" height="10" style={{marginLeft:10,color:'black'}} />

            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
