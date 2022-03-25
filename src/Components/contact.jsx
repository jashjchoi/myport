import React from 'react';
import {
FaEnvelope, 
FaGithub,
FaLinkedinIn,
 } from "react-icons/fa";
import SectionTitle from "./section_title";

export default function Contact() {
    return (
        <div className="contact-area section-ptb" id="contact">
            <div className="container">
                <SectionTitle
                    title="CONTACT US"
                    subTitle="Ways To Contact Me"
                    desc="Eager to obtain a position that will expand my learning and
                    build upon my developer skills. Should you need any further information, please do not hesitate to contact me."
                />
            </div>
            <div className="container mt-45">
                <div className="row md-justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-20">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20 mt-auto">
                                <i><FaEnvelope/></i>
                            </div>
                            <a className="btn-animation" href="mailto:jashjchoi@gmail.com">jashjchoi@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-20">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20 mt-auto">
                                <i><FaGithub/></i>
                            </div>
                            <a className="btn-animation" href="https://github.com/jashjchoi">jashjchoi</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-20">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20 mt-auto">
                                <i><FaLinkedinIn/></i>
                            </div>
                            <a className="btn-animation" href="https://www.linkedin.com/in/jasmine-hj-choi/">jashjchoi</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
