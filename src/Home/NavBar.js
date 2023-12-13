import React from 'react';

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="header__content__venor">
          <div className="header__logo">
            <a href="https://defyo.pro" title="Web Designers And Developers In Sri Lanka - Defyo™">
              <img
                width="105"
                height="22"
                className="img-fluid logo-front"
                src="/images/media/1697366319Defyo_Logo-removebg-preview.png" // Correct the image path
                alt="logo"
              />
            </a>
          </div>
          <div className="header__actions__venor">
          <div className="header__action">
  <a className="header__action-btn header__action-btn--start-project" href="/portfolio">
    Our Portfolio
    {/* Replace SVG with an image */}
    <img src="/images/media/burger-close.png" alt="Your Alt Text" width="10" height="10" style={{marginLeft:10}} />
    {/* Rest of your content */}
  </a>
</div>

            <div className="header__action">
              <a className="header__action-btn header__action-btn--start-project" href="/contact">
                Start a Project
                <img src="/images/media/burger-close.png" alt="Your Alt Text" width="10" height="10" style={{marginLeft:10}} />

              </a>
            </div>
            <div className="header__lang">
              <ul className="header__lang-list">
                <li className="active">
                  <a title="English" href="https://defyo.pro/changelanguage/en">
                    <span>en</span>
                  </a>
                </li>
                <li>
                  <a title="Portuguese" href="https://defyo.pro/changelanguage/pt">
                    <span>pt</span>
                  </a>
                </li>
                <li>
                  <a title="عربى" href="https://defyo.pro/changelanguage/%D8%B9%D8%B1%D8%A8%D9%89">
                    <span>عربى</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
