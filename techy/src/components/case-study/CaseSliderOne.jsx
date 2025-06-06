import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

const caseContent = [
    {
        img: 'case-1b',
        tag: 'Full Stack web Development',
        title: 'Full Stack Web Development',
        desc: 'Online bible course with student dashboard, admin panel, and eCommerce functionality.',
        icon: 'bi bi-arrow-up-right',
    },
    {
        img: 'case-2b',
        tag: 'LMS Development',
        title: 'Hospital Management System',
        desc: 'A comprehensive hospital management system with patient management, appointment scheduling, and billing.',
        icon: 'bi bi-arrow-up-right',
    },
    {
        img: 'case-3b',
        tag: 'Landing Page Design',
        title: 'Landing Page Design',
        desc: 'Designed a high-converting landing page for a digital marketing campaign.',
        icon: 'bi bi-arrow-up-right',
    },
    {
        img: 'case-4c',
        tag: 'Figma Design',
        title: 'Figma Design',
        desc: 'Created a modern and user-friendly Figma design for a mobile application.',
        icon: 'bi bi-arrow-up-right',
    },
    
];

const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
         {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                arrows:false,
            }
        }
    ]
};


const CaseSliderOne = () => {
    return (
        <Fragment>
            <Slider {...settings} className="row gx-0 px-0 case-slider-one" data-aos="fade-up" data-aos-delay={200}>
                {caseContent.map((val, i)=>(
                    <div key={i} className="col-lg-4">
                        <div className="case-item-one">
                            <div className="case-thumb">
                                <img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img"/>
                            </div>
                            <div className="case-content">
                                <span>{val.tag}</span>
                                <h3>
                                    <Link className="sect-title-two" to="/project-grid">{val.title}</Link>
                                </h3>
                                <p>{val.desc}</p>
                                <Link className="case-btn" to="/project-grid"><i className={val.icon}/></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </Fragment>
    )
}

export default CaseSliderOne