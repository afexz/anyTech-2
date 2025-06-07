import React, {Fragment, useState} from 'react'
import Slider from 'react-slick';

const feedbackContent = [
  {
    title: "“ Best web development ”",
    desc: "Their development team brought our idea to life with precision. From planning to deployment, they were responsive, innovative, and fully committed to our success. We’re already planning our next project with them.",
    img: "author-4b",
    author: "Kristin Watson",
    desig: "Marketing Coordinator",
  },
  {
    title: "“ Highly recommended ”",
    desc: "What stood out most was their dedication and communication. They kept us in the loop, delivered on time, and built a solution that’s both powerful and user-friendly. Highly recommended!",
    img: "author-5b",
    author: "Darrell Steward",
    desig: "Agape Logistics, Inc.",
  },
  {
    title: "“ Best team ”",
    desc: "Partnering with anyTech team for our web development needs was one of the best decisions we made. They took our complex requirements and turned them into a powerful, easy-to-use system that streamlined our operations. Their attention to detail, clear communication, and commitment to quality were outstanding throughout the entire process.",
    img: "author-4b",
    author: "Kristin Watson",
    desig: "Marketing Coordinator",
  },
  {
    title: "“ Best software agency”",
    desc: "We needed custom software to manage our logistics, and this team delivered beyond expectations. The app is fast, reliable, and fits perfectly into our workflow. We appreciated their ability to listen, adapt, and deliver exactly what we envisioned.",
    img: "author-5b",
    author: "Darrell Steward",
    desig: "Hospital, Operation Manager",
  },
];

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    padding:15,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const FeedbackTwo = () => {
     const [hoveredIndex, setHoveredIndex] = useState(null);
    
      const maxLength = 150;
    
      const shortenText = (text) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength).trim() + "...";
      };
    return (
      <Fragment>
        <Slider {...settings} className="row gx-0 feedback-slider-two">
          {feedbackContent.map((val, i) => (
            <div key={i} className="col-lg-6">
            
              <div className="feedback-style-two">
                <h4 className="fw-medium mb-25">{val.title}</h4>
                <p>{hoveredIndex === i ? val.desc : shortenText(val.desc)}</p>
                <div className="d-sm-flex align-items-center justify-content-between">
                  <div className="author d-flex align-items-center justify-content-center mt-35">
                    <img
                      src={`assets/img/testimonial/${val.img}.jpg`}
                      alt="author"
                    />
                    <div className="author-info">
                      <h4>{val.author}</h4>
                      <p className="text-white">{val.desig}</p>
                    </div>
                  </div>
                  <div className="rating mt-35">
                    <a href="#">
                      <i className="bi bi-star-fill" />
                    </a>
                    <a href="#">
                      <i className="bi bi-star-fill" />
                    </a>
                    <a href="#">
                      <i className="bi bi-star-fill" />
                    </a>
                    <a href="#">
                      <i className="bi bi-star-fill" />
                    </a>
                    <a href="#">
                      <i className="bi bi-star-fill" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Fragment>
    );
}

export default FeedbackTwo