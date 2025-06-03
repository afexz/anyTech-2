import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlockStyleOneA = () => {
  return (
    <Fragment>
      <div className="block-style-one ps-lg-1 mb-45">
        <h2 className="mb-15">
          About Our Innovative ANYTECH IT Agency & Solutions
        </h2>
        <p>
          At <strong>ANYTECH</strong>, we deliver cutting-edge, transparent, and
          results-driven IT solutions designed to help businesses grow and
          succeed in today’s fast-paced digital world. Our approach combines
          innovation, expertise, and strategic insight to empower organizations
          with scalable, future-ready technologies tailored to your unique
          goals.
        </p>
        <p>
          Whether you're a startup launching your first product or a large-scale
          enterprise optimizing systems, our experienced team is committed to
          turning technology into your competitive advantage.
        </p>

        <ul className="block-box box-two list-none">
          <li>
            <a href="/contact">
              <span className="img-bg">
                <img
                  src="assets/img/icon/icon-1a.svg"
                  alt="Money Back Guarantee icon"
                />
              </span>
              <span>Money-Back Guarantee</span>
            </a>
          </li>
          <li>
            <a href="/contact">
              <span className="img-bg">
                <img
                  src="assets/img/icon/icon-2a.svg"
                  alt="24/7 Support icon"
                />
              </span>
              <span>24/7 Online Support</span>
            </a>
          </li>
        </ul>

       
      </div>
    </Fragment>
  );
};

export default BlockStyleOneA;
