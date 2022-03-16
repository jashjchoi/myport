import React from 'react';
import servicIcon_01 from "../assets/images/icons/pen.png";
import servicIcon_03 from "../assets/images/icons/search.png";
import servicIcon_05 from "../assets/images/icons/code-white.png";
import servicIcon_06 from "../assets/images/icons/marketing-white.png";
import SectionTitle from "./section_title";
import { 
FaLongArrowAltRight,
 } from "react-icons/fa";
export default function Services() {
    return (
        <div className="services-area section-ptb bgs" id="services">
            <div className="container">
                <SectionTitle
                    title="SKILLS"
                    subTitle="What I Am Great At"
                    desc="I am well-versed in all the software programs that you require as you will see on my attached resume. The security of a position with a firm of your success and stability would not only be in my best practical interest"
                />
                 <div className="resume-button">
                    <a href="https://drive.google.com/file/d/14cytMU7nvnuWTMI5AXLXV7gfojVdekbo/view" target="blank">
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
                                <img src={servicIcon_05} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h5 className="mb-3">Web Development</h5>
                                <p> CSS | HTML | SCSS </p>
                                <p> JavaScript </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-30">
                                <img src={servicIcon_01} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h5 className="mb-3">Web Design</h5>
                                <p> Wordpress | Figma </p>
                                <p> Bootstrap</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-30">
                                <img src={servicIcon_03} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h5 className="mb-3">Web Framework</h5>
                                <p>Node.js | React | Express</p>
                                <p> Heroku </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-30">
                                <img src={servicIcon_06} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h5 className="mb-3">Branding</h5>
                                <p>Adobe Photoshop</p>
                                <p>Adobe Illustrator</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
