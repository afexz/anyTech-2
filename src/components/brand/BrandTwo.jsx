import React, { Fragment } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import img1 from '../../assets/img/brand/brand-1.png';
import img2 from '../../assets/img/brand/brand-2.png';
import img3 from '../../assets/img/brand/brand-3.png';
import img4 from '../../assets/img/brand/brand-4.png';
import img5 from '../../assets/img/brand/brand-5.png';
import img6 from '../../assets/img/brand/brand-6.png';

// Logo array using imports
const BrandLogo = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img2 },
    { img: img4 },
    { img: img1 },
    { img: img3 },
];

const BrandTwo = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Fragment>
            <Slider {...settings} className="brand-slider-one">
                {BrandLogo.map((val, i) => (
                    <div className="brand-logo" key={i}>
                        <a href="#">
                            <img src={val.img} alt={`brand-${i}`} />
                        </a>
                    </div>
                ))}
            </Slider>
        </Fragment>
    );
};

export default BrandTwo;
