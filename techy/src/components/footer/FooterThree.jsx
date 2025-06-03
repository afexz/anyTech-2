import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import SubscribeFormTwo from '../form/SubscribeFormTwo';
import CopyRightThree from './CopyRightThree'

const ContactContent = [
    {
      link: 'anytech11@gmail.com'  
    },
    {
      link: '(918) 555-0125'  
    },
    {
      link: '90515 S Desert Palm ave. Broken Arrow, Oklahoma 74012',  
    },

    {
      link: '+235 3654 7856'  
    },
];


const InstaFeed = [
    {
      img: 'insta-1',
      routerPath: '#'
    },
    {
        img: 'insta-2',
        routerPath: '#'
    },
    {
        img: 'insta-3',
        routerPath: '#'
    },
    {
        img: 'insta-4',
        routerPath: '#'
    },
]

const FooterThree = () => {
    return (
        <Fragment>
            <footer className="footer-area theme-footer-three pt-145 pt-lg-100 pt-sm-100">
                <img className="footer-shape shape-1b" src="assets/img/shape/star-3b.svg" alt="shape"/>
                <img className="footer-shape shape-2b" src="assets/img/shape/star-4b.svg" alt="shape"/>
                <img className="footer-shape shape-3b" src="assets/img/shape/star-6b.svg" alt="shape"/>
                <img className="footer-shape shape-4b" src="assets/img/shape/star-5b.svg" alt="shape"/>
                <img className="footer-shape shape-5b" src="assets/img/shape/star-5b.svg" alt="shape"/>
                <img
                    className="fot-shape-one"
                    src="assets/img/shape/line-round-7b.svg"
                    alt="footer shape"/>
                <div className="container">
                    <div className="row gx-4 gx-xxl-5 mb-10">
                        <div className="col-xxl-3 col-md-4" data-aos="fade-up">
                            <div className="footer__widget mb-30">
                                <Link className="logo-title" to="/">anyTech.</Link>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-4" data-aos="fade-up">
                            <div className="footer__widget mb-40">
                                <h4 className="widget-title">Contact</h4>
                                <ul className="fot-list">
                                   {ContactContent.map((val,i)=>(
                                     <li key={i}>
                                        <a href={val.routerPath}>{val.link}</a>
                                    </li>
                                   ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-4" data-aos="fade-up" data-aos-delay={100}>
                            <div className="footer__widget mb-40">
                                <h4 className="widget-title">Our Instagram</h4>
                                <ul className="insta-feed list-none">
                                    {InstaFeed.map((val, i)=>(
                                        <li key={i}>
                                            <Link to={val.routerPath}><img src={`assets/img/instagram/${val.img}.jpg`} alt="img"/></Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xxl-3 col-xl-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay={200}>
                            <div className="footer__widget mb-40">
                                <h4 className="widget-title">Subscribe</h4>
                                <p className="fs-17 text-white mb-0 pb-20">Phosfluorescentl aggregate bleed channels rather global araa.
                                </p>
                                {/* SubscribeFormTwo */}
                                <SubscribeFormTwo />
                                {/* SubscribeFormTwo */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* CopyRightThree */}
                <CopyRightThree />
                {/* CopyRightThree */}
            </footer>
            {/*footer-area end*/}

        </Fragment>
    )
}

export default FooterThree