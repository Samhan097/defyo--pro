import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="testimonial-section light-section">
      <div className="container">
        <h3>Our clients</h3>
        <p>
          They are just some of those who have trusted our services. Project delivered, happy customer with quin cms.
        </p>
        <div className="testimonial-section-slider owl-carousel">
          {/* Testimonial 1 */}
          <blockquote className="testimonial-slide">
            <div className="testimonial-layout1">
              <div className="item-figure">
                <img className="img-fluid" width="90" height="90" src="/public/images/media/1697368782testimonials_man3.png" alt="" />
              </div>
              <div className="item-content">
                <h3 className="item-title">Musthafa Shiyam</h3>
                <div className="item-sub-title">Techtime.lk</div>
                <div className="item-paragraph">
                  <div>
                    <div>
                      {/* Content of testimonial 1 */}
                      <div className="x1iorvi4 x1pi30zi x1swvt13 xjkvuk6">
                        {/* Content here */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </blockquote>
          {/* Testimonial 2 */}
          <blockquote className="testimonial-slide">
            {/* Content of testimonial 2 */}
          </blockquote>
          {/* Testimonial 3 */}
          <blockquote className="testimonial-slide">
            {/* Content of testimonial 3 */}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
