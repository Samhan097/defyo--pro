import React from 'react';

function SidebarMenu() {
  return (
    <>
      <div className="header-burger">
        <div className="burger">
          <span></span> 
          <span></span> 
          <span></span>
        </div>
      </div>
      <div className="fixed-sidebar-menu-overlay" style={{ opacity: 0 }}></div>
      <div className="fixed-sidebar-menu-holder header7">
        <div className="fixed-sidebar-menu">
          <div className="header7 sidebar-content">
            <div className="left-side">
              <div className="left-side-inner">
                <div className="flx-div">
                  <img src="/public/img/sidebar-img.svg" alt="sidebar-img.svg" />
                </div>
                <div className="header__menu__venor">
                  <ul className="header__nav">
                    <li className="header__nav-item"> <a title="Home" className="header__nav-link" href="/">Home</a> </li>
                    <li className="header__nav-item"> <a title="About us" className="header__nav-link" href="/about-us">About us</a> </li>
                    <li className="header__nav-item"> <a title="Portfolio" className="header__nav-link" href="/portfolio">Portfolio</a> </li>
                    <li className="header__nav-item"> <a title="Hosting" className="header__nav-link" href="/pricing">Hosting</a> </li>
                    <li className="header__nav-item"> <a title="Blog" className="header__nav-link" href="/blog">Blog</a> </li>
                  </ul>
                </div>
                <div className="menu-description">
                  <p>Have a project for us?</p>
                  <p><a className="btn btn-slider" href="/contact" target="_self">Let's Talk </a></p>
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
                <div className="address-sidebar">
                  <div><img width="16" height="16" src="/public/img/map-pin.svg" alt="map-pin.svg" /> No. 67  Ambetanna, Bandarawela</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarMenu;
