import React from 'react';

export default function SliderSection() {
  return (
    <div className="slider-venor-section">
      <div className="slider-venor owl-carousel">
        <div className="slider-inner-venor" data-background-image-url="/public/images/media/1633027720quinheader.png" >
        
          <div className="container">
            <div className="slider-content">
              <h1 className="active">Crafting Digital</h1>
              <h2 className="active">Experiences</h2>
              <div className="slider-body active">
                <p>
                  We help premium brands <strong>achieve their future</strong> through innovation and creative perspectives. <strong>We grow your company</strong> through proprietary in-house ideas, tested and perfected <strong>over the years.</strong>
                </p>
              </div>
              <div className="button-slider-b">
                <a href="/contact" target="_self" className="btn btn-slider">
                  <span>Get in touch</span>
    <img src="/images/media/burger-close.png" alt="Your Alt Text" width="10" height="10" style={{marginLeft:10}} />
                  
                </a>
              </div>
              <div className="button-slider-b">
                <a href="/about-us" target="_self" className="btn btn-slider">
                  <span>About us</span>
                  <img src="/images/media/burger-close.png" alt="Your Alt Text" width="10" height="10" style={{marginLeft:10}} />

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-social-share">
        <ul>
          <li><a href="https://www.facebook.com/defyo.pro" target="_blank" rel="noopener"><em className="facebook-icon"><strong>facebook</strong></em></a></li>
          <li><a href="https://twitter.com/defyo_pro" target="_blank" rel="noopener"><em className="twitter-icon"><strong>twitter</strong></em></a></li>
          <li><a href="https://www.instagram.com/defyo.pro/" target="_blank" rel="noopener"><em className="instagram-icon"><strong>instagram</strong></em></a></li>
          <li><a href="https://www.behance.net/defyo-pro" target="_blank" rel="noopener"><em className="behance-icon"><strong>behance</strong></em></a></li>
          <li><a href="https://lk.linkedin.com/company/defyo" target="_blank" rel="noopener"><em className="linkedin-icon"><strong>linkedin</strong></em></a></li>
        </ul>
      </div>
      <a href="#" className="hero__scroll">
        <svg width="15" height="22.1">
          <use xlinkHref="#scroll"></use>
        </svg>
      </a>
    </div>
  );
}
