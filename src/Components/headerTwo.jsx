import React, {useState} from 'react';
import logoImg from "../assets/images/logo/Jlogo.png";
import { Navbar, Nav } from "react-bootstrap";
// import { FaLongArrowAltDown } from "react-icons/fa";
import { FaBars, FaLinkedinIn, FaGithub, FaSlack  } from "react-icons/fa";
import { Link as ReactLink } from "react-router-dom";
export default function HeaderTwo() {

    // const navDropdownTitle = (<>Blog <FaLongArrowAltDown/></>);

    return (
        <div className="header-area">
            <div className="container mt-60">
                <div className="row justify-content-lg-between">
                    <div className="col-lg-12 px-0">
                        <div className="menu-area">
                            <Navbar collapseOnSelect expand="lg" className="p-0">
                                <div className="logo-area">
                                    <ReactLink to="/">
                                        <img className="img-fluid" src={logoImg} />
                                    </ReactLink>
                                </div>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                                    <i className="text-white"><FaBars /></i>
                                </Navbar.Toggle>
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ml-auto align-items-center">
                                        <ReactLink to="/" className="nav-link">Home</ReactLink>
                                        <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
                                        {/* <NavDropdown title={navDropdownTitle}
                                            id="collasible-nav-dropdown"
                                        >
                                            <NavDropdown.Item href="/#blog">Latest Posts</NavDropdown.Item>
                                            <NavDropdown.Item href="/blog_details">Blog Details</NavDropdown.Item>
                                        </NavDropdown> */}
                                        <Nav.Link href="/#contact">Contact</Nav.Link>
                                        <ul className="mb-0 menu-social px-10">
                                            <li className="list-inline-item menu-border">
                                                <a href="https://www.linkedin.com/in/jasmine-hj-choi/"><i><FaLinkedinIn /></i></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"><i><FaGithub /></i></a>
                                            </li>
                                            <li className="list-inline-item"><a href="#"><i><FaSlack /></i></a></li>
                                        </ul>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
    )
}
