import React, { useEffect } from 'react';

function FunFactsSection() {
  useEffect(() => {
    const timers = document.querySelectorAll('.timer');
    timers.forEach((timer) => {
      const speed = parseInt(timer.getAttribute('data-speed'), 10);
      const from = parseInt(timer.getAttribute('data-from'), 10);
      const to = parseInt(timer.getAttribute('data-to'), 10);

      const animate = () => {
        let currentValue = from;
        const increment = to > from ? 1 : -1;
        const stepTime = Math.abs(Math.floor(speed / (to - from)));

        const updateValue = () => {
          timer.textContent = currentValue;
          currentValue += increment;
          if ((increment > 0 && currentValue <= to) || (increment < 0 && currentValue >= to)) {
            setTimeout(updateValue, stepTime);
          } else {
            timer.textContent = to;
          }
        };

        setTimeout(updateValue, stepTime);
      };

      animate();
    });
  }, []);

  return (
    <div className="fun-facts-section light-section" id="fun-facts">
      <div className="container">
        <h3 className="fun-facts-heading1">Fun Facts</h3>
        <p>
          Over the years we have done many things that we are proud of. This motivates us to continue looking for new
          challenges in order to improve our services.
        </p>
        <div className="row fun-facts-timer">
          {/* Replicate the structure for each fun fact */}
          {/* You can create a separate component for better organization */}
          <div className="col-md-3">
            <div className="radial">
              <div className="radial-icon"><i className="far fa-smile"></i></div>
              <span className="timer" data-from="0" data-to="299" data-speed="4000">299</span>
              <h4>Happy Customers</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="radial">
              <div className="radial-icon"><i className="far fa-smile"></i></div>
              <span className="timer" data-from="0" data-to="299" data-speed="4000">299</span>
              <h4>Happy Customers</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="radial">
              <div className="radial-icon"><i className="far fa-smile"></i></div>
              <span className="timer" data-from="0" data-to="299" data-speed="4000">299</span>
              <h4>Happy Customers</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="radial">
              <div className="radial-icon"><i className="far fa-smile"></i></div>
              <span className="timer" data-from="0" data-to="299" data-speed="4000">299</span>
              <h4>Happy Customers</h4>
            </div>
          </div>
          {/* Repeat the structure for each fun fact */}
        </div>
      </div>
    </div>
  );
}

export default FunFactsSection;
