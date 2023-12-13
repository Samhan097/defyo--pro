import React from 'react';
import Typed from 'react-typed';
// import ReactTyped from 'react-typed';


const TypedSection = () => {
  return (
    <div className="typed-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h4 className="parent-typed-text">
              <span className="mt_typed-beforetext">Are you looking for </span>
              <Typed
                strings={['creative solutions?', 'innovative ideas?', 'quality services?']}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="mt_typed_text"
              />
            </h4>
          </div>
          <div className="col-md-4 text-right">
            <a href="/contact" target="_self" className="btn btn-style1">
              <span>Contact</span>
                  <img src="/images/media/burger-close.png" alt="Your Alt Text" width="10" height="10" style={{marginLeft:10}} />

            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypedSection;
