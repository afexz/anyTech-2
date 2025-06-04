import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import { SubscribeFormOne } from '../form/SubscribeFormOne';
import CopyRightTwo from './CopyRightTwo';

const pageContent =[
    {
        name: 'Home',
        routerPath: '/'
    },
    {
        name: 'popular',
        routerPath: '/services'
    },
    {
        name: 'Best Offer',
        routerPath: '/price'
    },
    {
        name: 'Destinations',
        routerPath: '/contact'
    },
]

const serviceContent =[
    {
        name: 'anyTechn11@gmail.com',
        routerPath: '#'
    },
    {
        name: '(918) 500-0125',
        routerPath: '#'
    },
    {
        name: '90511 S Desert Palm Ave, Broken Arrow, OK 74012',
        routerPath: '#'
    },

];

const socialContent =[
    {
        icon: 'fab fa-facebook-f',
        routerPath: '#'
    },
    {
        icon: 'fab fa-twitter',
        routerPath: '#'
    },
    {
        icon: 'fab fa-linkedin-in',
        routerPath: '#'
    },
    {
        icon: 'fab fa-youtube',
        routerPath: '#'
    },

]



const FooterTwo = () => {
    return (
      <Fragment>
        {/*footer-area start*/}
        <footer className="gradient-bg footer-area theme-footer-two pt-95 pb-80 pb-lg-10">
          <img
            className="footer-shape shape-1b"
            src="assets/img/shape/star-3b.svg"
            alt="shape"
          />
          <img
            className="footer-shape shape-2b d-none d-lg-inline-block"
            src="assets/img/shape/star-4b.svg"
            alt="shape"
          />
          <img
            className="footer-shape shape-3b"
            src="assets/img/shape/star-6b.svg"
            alt="shape"
          />
          <img
            className="footer-shape shape-4b d-none d-lg-inline-block"
            src="assets/img/shape/star-5b.svg"
            alt="shape"
          />
          <img
            className="footer-shape shape-5b"
            src="assets/img/shape/star-5b.svg"
            alt="shape"
          />
          <img
            className="fot-shape-one"
            src="assets/img/shape/line-round-7b.svg"
            alt="footer shape"
          />
          <div className="container">
            <div className="row gx-4 gx-xxl-5 mb-10">
              <div className="col-xl-2 col-md-6" data-aos="fade-up">
                <div className="footer__widget mb-40">
                  <h4 className="widget-title mb-35">Quick Links</h4>
                  <ul className="fot-list">
                    {pageContent.map((val, i) => (
                      <li key={i}>
                        <Link to={val.routerPath}>{val.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="footer__widget mb-40 ps-xxl-4">
                  <h4 className="widget-title mb-35">Contact</h4>
                  <ul className="fot-list">
                    {serviceContent.map((val, i) => (
                      <li key={i}>
                        <a href={val.routerPath}>{val.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 ps-xxl-3"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="footer__widget mb-40 px-xxl-5">
                  <h4 className="widget-title mb-35">Want to stay informed?</h4>
                  <p className="fs-17 mb-0 pb-20">
                    Subscribe to our new projects for updates, insights, and
                    exclusive content delivered straight to your inbox.
                  </p>
                  {/* SubscribeFormOne */}
                  <SubscribeFormOne />
                  {/* SubscribeFormOne */}
                  <div className="footer__social mb-30">
                    {socialContent.map((val, i) => (
                      <a key={i} href={val.routerPath}>
                        <i className={val.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="footer__widget mb-40">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.0528640602206!2d-95.85239130838558!3d36.04341570149519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b68c2fed492f2d%3A0x76ad4234284d9bf1!2sS%20Desert%20Palm%20Ave%2C%20Broken%20Arrow%2C%20OK%2074012!5e0!3m2!1sen!2sus!4v1749010888176!5m2!1sen!2sus"></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <CopyRightTwo />
          </div>
        </footer>
        {/*footer-area end*/}
      </Fragment>
    );
}

export default FooterTwo