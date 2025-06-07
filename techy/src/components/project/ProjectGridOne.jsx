import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabListContent = [
  'All',
  'Frontend Development',
  'Full-Stack Development',
  'UI/UX Design',
  'Figma to Code',
 
];


const AllContent = [
    {
      img:'project-1',
      tag: 'Full-Stack Development',
      pjname: 'Elshaddai Bible School',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'project-2',
      tag: 'Frontend Development',
      pjname: 'AndE Mamma landing Page',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'project-3',
      tag: 'full-Stack Development',
      pjname: 'St Peteros Hospital',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'project-4',
      tag: 'UI/UX Design',
      pjname: 'Branding Design',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'project-5',
      tag: 'Full-Stack Development',
      pjname: 'Abe Garage management',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'project-6',
      tag: 'FIgma to Code',
      pjname: 'Blen yoga Landing Page',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
  
]
const FrontendContent = [
    {
      img:'project-2',
      tag: 'Frontend Development',
      pjname: 'AndE Mamma landing Page',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      
        img:'project-6',
        tag: 'FIgma to Code',
        pjname: 'Blen yoga Landing Page',
        dataAos: 'fade-right',
        dataDelay: '150'
      
    },
    {
      img:'project-5',
      tag: 'Full-Stack Development',
      pjname: 'Abe Garage management',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'project-1',
      tag: 'Full-Stack Development',
      pjname: 'Elshaddai Bible School',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
]
const FullStackContent = [
    {
      img:'project-1',
      tag: 'Full-Stack Development',
      pjname: 'Elshaddai Bible School',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'project-3',
      tag: 'full-Stack Development',
      pjname: 'St Peteros Hospital',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'project-5',
      tag: 'Full-Stack Development',
      pjname: 'Abe Garage management',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    
   
]
const UIUXContent = [
    {
      img:'project-4',
      tag: 'UI/UX Design',
      pjname: 'Branding Design',
      dataAos: 'fade-right',
      dataDelay: '50'
    }, {
      img:'project-8',
      tag: 'UI/UX Design',
      pjname: 'Mataj Online oil Shop',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    
]
const FigmaTocodeContent = [
   
    {
      img:'project-6',
      tag: 'FIgma to Code',
      pjname: 'Blen yoga Landing Page',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'project-7',
      tag: 'FIgma to Code',
      pjname: 'Journey Gym Landing Page',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
   
]


const ProjectGridOne = () => {
  return (
    <Fragment>
        <Tabs>
            <TabList className="row justify-content-center">
                <div className="col-xxl-10 text-center">
                    <div className="portfolio-menu mb-40">
                    {TabListContent.map((tab,i)=>(
                        <Tab key={i} className="gf_btn">{tab}</Tab>
                        ))}
                    </div>
                </div>
            </TabList>
            <TabPanel>
                <div className="row gx-4 gx-xxl-5 feature-slider pe-0">
                   {AllContent.map((val,i)=>(
                     <div key={i} className="col-lg-4 col-md-4 col-sm-6" data-aos={val.dataAos} data-delay={val.dataDelay}>
                        <div className="feature-item mb-40">
                            <Link className="back-bg" to=""><img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" /></Link>
                            <h5>
                                <Link href="">{val.tag}</Link>
                            </h5>
                            <h3><Link to="">{val.pjname}</Link></h3>
                        </div>
                    </div>
                   ))}
                </div>
            </TabPanel>
            <TabPanel>
              <div className="grid row gx-4 gx-xxl-5 feature-slider pe-0">
                   {FrontendContent.map((val,i)=>(
                     <div key={i} className="col-lg-4 col-md-4 col-sm-6 grid-item cat3 cat5" data-aos={val.dataAos} data-delay={val.dataDelay}>
                        <div className="feature-item mb-40">
                            <Link className="back-bg" to=""><img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" /></Link>
                            <h5>
                                <Link href="">{val.tag}</Link>
                            </h5>
                            <h3><Link to="">{val.pjname}</Link></h3>
                        </div>
                    </div>
                   ))}
                </div>
            </TabPanel>
            <TabPanel>
            <div className="grid row gx-4 gx-xxl-5 feature-slider pe-0">
                   {FullStackContent.map((val,i)=>(
                     <div key={i} className="col-lg-4 col-md-4 col-sm-6 grid-item cat3 cat5" data-aos={val.dataAos} data-delay={val.dataDelay}>
                        <div className="feature-item mb-40">
                            <Link className="back-bg" to=""><img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" /></Link>
                            <h5>
                                <Link href="">{val.tag}</Link>
                            </h5>
                            <h3><Link to="">{val.pjname}</Link></h3>
                        </div>
                    </div>
                   ))}
                </div>
            </TabPanel>
            <TabPanel>
              <div className="grid row gx-4 gx-xxl-5 feature-slider pe-0">
                   {UIUXContent.map((val,i)=>(
                     <div key={i} className="col-lg-4 col-md-4 col-sm-6 grid-item cat3 cat5" data-aos={val.dataAos} data-delay={val.dataDelay}>
                        <div className="feature-item mb-40">
                            <Link className="back-bg" to=""><img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" /></Link>
                            <h5>
                                <Link href="">{val.tag}</Link>
                            </h5>
                            <h3><Link to="">{val.pjname}</Link></h3>
                        </div>
                    </div>
                   ))}
                </div>
            </TabPanel>
            <TabPanel>
            <div className="grid row gx-4 gx-xxl-5 feature-slider pe-0">
                   {FigmaTocodeContent.map((val,i)=>(
                     <div key={i} className="col-lg-4 col-md-4 col-sm-6 grid-item cat3 cat5" data-aos={val.dataAos} data-delay={val.dataDelay}>
                        <div className="feature-item mb-40">
                            <Link className="back-bg" to="/project-details"><img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" /></Link>
                            <h5>
                                <Link href="">{val.tag}</Link>
                            </h5>
                            <h3><Link to="">{val.pjname}</Link></h3>
                        </div>
                    </div>
                   ))}
                </div>
            </TabPanel>
          
        </Tabs>
    </Fragment>
  )
}

export default ProjectGridOne