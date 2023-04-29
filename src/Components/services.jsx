import React from 'react';

import SectionTitle from "./section_title";
import { 
FaLongArrowAltRight,FaRegWindowMaximize, FaCode, FaPen, FaRegImages
 } from "react-icons/fa";
export default function Services() {
    return (
        <div className="services-area section-ptb bgs" id="services">
            <div className="container">
                <SectionTitle
                    title="SKILLS"
                    subTitle="What I Am Great At"
                />
                 <div className="resume-button">
                    <a href="https://drive.google.com/file/d/1FzqDFAUwAme5BR6bn23D_IRi8G6P-N-y/view?usp=sharing" target="blank">
                        <div className="btn-animation mr-btn" smooth={true} duration={2000} activeClass="active" spy={false}
                                                    offset={5}>My Resume &nbsp; <i><FaLongArrowAltRight /></i>
                        </div>
                    </a>
                 </div>
            </div>
            <div className="container">
                <div className="row service-row mt-45">
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-30">
                                <i class="service-icon"><FaCode size={50}/></i>
                            </div>
                            <div className="skill-project">
                                <h5 className="mb-3">Web Development</h5>
                                <p> CSS | HTML</p>
                                <p> JavaScript </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-30">
                            <i class="service-icon"><FaPen size={50}/></i>
                            </div>
                            <div className="skill-project">
                                <h5 className="mb-3">Web Design</h5>
                                <p> Wordpress | Figma </p>
                                <p> Bootstrap | Material UI</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-30">
                                <i class="service-icon"><FaRegWindowMaximize size={50}/></i>
                            </div>
                            <div className="skill-project">
                                <h5 className="mb-3">Framework/DB</h5>
                                <p> Node.js | React </p>
                                <p> MongoDB </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-30">
                                <i class="service-icon"><FaRegImages size={50}/></i>
                            </div>
                            <div className="skill-project">
                                <h5 className="mb-3">Others</h5>
                                <p>Jira/Confluence</p>
                                <p>Adobe Creative Suite</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
