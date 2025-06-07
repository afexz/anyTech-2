import React, {Fragment, useState} from 'react'
import { Link } from 'react-router-dom'

const featuresContent = [
  {
    img: "line-round-5b",
    icon: "icon-18b",
    title: "Software Develop",
    desc: " Our software development services are designed to bring your ideas to life with precision and performance. From desktop to mobile, cloud-based systems to enterprise applications — we build secure, efficient, and user-friendly software that fits your workflow, your industry, and your future.",
    dataAos: "fade-up",
    dataAosDown: "fade-down",
    dataDelay: "",
    dataDelayDown: "100",
  },
  {
    img: "line-round-5b",
    icon: "icon-19b",
    title: "Web Developmet",
    desc: " Our expert web development services deliver modern, responsive, and user-friendly websites that attract customers and drive results. From custom designs and e-commerce solutions to seamless functionality and ongoing support, we build websites that work hard for your business.",
    dataAos: "fade-up",
    dataAosDown: "fade-down",
    dataDelay: "100",
    dataDelayDown: "100",
  },
  {
    img: "line-round-5b",
    icon: "icon-20b",
    title: "UI/UX Design",
    desc: "Our UI/UX design services focus on combining beauty with usability to craft interfaces that are not only eye-catching but also effortless to navigate. Whether you're launching a new app, redesigning a website, or building a SaaS platform, we ensure every click, swipe, and scroll feels natural and impactful.",
    dataAos: "fade-up",
    dataAosDown: "fade-down",
    dataDelay: "150",
    dataDelayDown: "100",
  },
  {
    img: "line-round-5b",
    icon: "icon-21b",
    title: "Web Security",
    desc: "Our web security services safeguard your website, applications, and customer data from threats, breaches, and downtime. From vulnerability assessments to real-time threat monitoring, we provide proactive protection to keep your digital environment secure, trusted, and compliant.",
    dataAos: "fade-up",
    dataAosDown: "fade-down",
    dataDelay: "200",
    dataDelayDown: "100",
  },
  {
    img: "line-round-5b",
    icon: "icon-22b",
    title: "Apps Development",
    desc: "Our app development services turn your vision into high-performance mobile or web applications that engage users and drive results. Whether you're building for iOS, Android, or cross-platform, we deliver sleek, intuitive, and scalable apps tailored to your business goals.",
    dataAos: "fade-up",
    dataAosDown: "fade-down",
    dataDelay: "250",
    dataDelayDown: "100",
  },
  {
    img: "line-round-5b",
    icon: "icon-23b",
    title: "Programming",
    desc: "Our programming services offer clean, scalable, and well-documented code tailored to your exact needs. Whether it’s building new systems, automating workflows, or solving complex technical challenges — we bring precision, performance, and problem-solving to every line of code.",
    dataAos: "fade-up",
    dataAosDown: "fade-down",
    dataDelay: "250",
    dataDelayDown: "100",
  },
];

const FeatureFour = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const maxLength = 150;

  const shortenText = (text) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <Fragment>
      <div className="row gx-4 gx-xxl-5">
        {featuresContent.map((val, i) => (
          <div
            key={i}
            className="col-lg-4 col-md-6"
            data-aos={val.dataAos}
            data-aos-delay={val.dataDelay}
          >
            <div
              className="feature-style-four mb-45"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                className="shape-over"
                data-aos={val.dataAosDown}
                data-aos-delay={val.dataDelayDown}
                src={`assets/img/shape/${val.img}.svg`}
                alt="shape"
              />
              <img src={`assets/img/icon/${val.icon}.svg`} alt="icon" />
              <h2>
                <Link className="sect-title-two" to="/services-details">
                  {val.title}
                </Link>
              </h2>
              <p>{hoveredIndex === i ? val.desc : shortenText(val.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default FeatureFour;