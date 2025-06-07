import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'






//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'
import ContactForm from '../../../components/form/ContactForm'
import SocialFive from '../../../components/social/SocialFive'





const Contact = () => {

    return (
      <Fragment>
        <div className="main-page-wrapper">
          {/* Helmet start */}
          <Helmet>
            <title>
              Contact || Techy – IT Solution & Web Security React Template
            </title>
          </Helmet>
          {/* Helmet end */}

          {/* ThemeMenuThree */}
          <ThemeMenuThree />
          {/* ThemeMenuThree */}

          {/* PageTitle */}
          <PageTitle title="Contact" />
          {/* PageTitle */}

          {/*contact-section start*/}
          <div className="contact-section pt-145 pb-100 pt-lg-60 pb-lg-15">
            <div className="container">
              <div className="row gx-4 gx-xxl-5">
                <div className="col-lg-5">
                  <div className="contact-info-wrapper me-xxl-5 pe-xxl-5 mb-45">
                    <h2 className="sect-title mb-5">
                      Let’s Get Connect With Us
                    </h2>
                    <div className="single-info-box mb-50">
                      <div className="icon">
                        <i className="bi bi-telephone" />
                      </div>
                      <span className="mb-10">(918) 500-3747</span>
                      <span>+48 539 964 516</span>
                    </div>
                    <div className="single-info-box mb-50">
                      <div className="icon">
                        <i className="bi bi-geo-alt" />
                      </div>
                      <span className="mb-10">S Desert Palm Ave,</span>
                      <span>Broken Arrow, OK 74012</span>
                    </div>
                    <div className="single-info-box mb-50">
                      <div className="icon">
                        <i className="bi bi-envelope" />
                      </div>
                      <span className="mb-10">anytechn11@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-content-wrapper mb-45">
                    <div className="row gx-4 gx-xxl-5 px-0 align-items-center mb-25">
                      <div className="col-xxl-8 col-md-7">
                        <div className="text-center text-md-start">
                          <p className="text-white mb-40">
                            We’d love to hear from you! Whether you have a
                            project in mind, a question to ask, or just want to
                            explore how we can work together — our team is ready
                            to help. Reach out today and let’s build something
                            amazing.
                          </p>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-md-5">
                        {/* SocialFive start */}
                        <SocialFive />
                        {/* SocialFive end */}
                      </div>
                    </div>
                    <div className="contact-map pb-40 mb-xxl-4">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.0528640602206!2d-95.85239130838558!3d36.04341570149519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b68c2fed492f2d%3A0x76ad4234284d9bf1!2sS%20Desert%20Palm%20Ave%2C%20Broken%20Arrow%2C%20OK%2074012!5e0!3m2!1sen!2sus!4v1749010888176!5m2!1sen!2sus"></iframe>
                    </div>
                    <div className="contact-form-two">
                      <h3 className="post-title mb-50">Send Us Message</h3>
                      {/* ContactForm start */}
                      <ContactForm />
                      {/* ContactForm end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*contact-section end*/}

          {/*techy-newsletter start*/}
          <NewsletterTwo />
          {/*techy-newsletter end*/}

          {/* FooterThree start */}
          <FooterThree />
          {/* FooterThree end */}
        </div>
      </Fragment>
    );
}

export default Contact