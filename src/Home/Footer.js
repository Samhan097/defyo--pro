import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-wrapper">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="footer-left">
              <div className="inner">
                <span>READY TO DO THIS</span>
                <h4>Let's get to work</h4>
                <a className="btn btn-style2" href="/contact">
                  <span>Get the offer</span>
                  <img src="/images/media/burger-close.png" alt="Your Alt Text" width="10" height="10" style={{marginLeft:10}} />

                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-right">
              <div className="row">
                {/* Add the Quick Links and Say Hello sections here */}
                <div class="col-lg-6 col-sm-6 col-12">
<div class="footer-widget">
<div class="footer-widget widget_nav_menu">
<h4 class="title">Quick Links</h4>
<span class="venor-animate-border"></span>
<div class="menu-quick-link-container">
<ul class="menu">
<li class="menu-item-footer"><a href="/gdpr">GDPR</a></li>
<li class="menu-item-footer"><a href="/terms-conditions">Terms and conditions</a></li>
<li class="menu-item-footer"><a href="/privacy-policy">Privacy Policy</a></li>
</ul>
</div>
</div>
</div>
</div>
<div class="col-lg-6 col-sm-6 col-12">
<div class="footer-widget">
<div class="widget widget_custom_html">
<h4 class="title">Say Hello</h4>
<span class="venor-animate-border"></span>
<div class="custom-html-widget">
<ul class="ft-link">
<li><a href="/cdn-cgi/l/email-protection#d0b9beb6bf90b4b5b6a9bffea0a2bf"><span class="__cf_email__" data-cfemail="066f686069466263607f6928767469">[email&#160;protected]</span></a></li>
<li><a href="/cdn-cgi/l/email-protection#41323431312e333501252427382e6f31332e"><span class="__cf_email__" data-cfemail="4e3d3b3e3e213c3a0e2a2b283721603e3c21">[email&#160;protected]</span></a></li>
<li><a href="/cdn-cgi/l/email-protection#2f4c4e5d4a4a5d5c6f4b4a495640015f5d40" target="_blank" rel="noopener"><span class="__cf_email__" data-cfemail="ddbebcafb8b8afae9db9b8bba4b2f3adafb2">[email&#160;protected]</span></a></li>
</ul>
</div>
</div>
</div>
</div>
              </div>
              <div className="col-lg-12">
                <div className="copyright-text">
                  <p>&copy; 2023. All rights reserved by <a>Defyo.</a> We are tracking any intention of piracy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
