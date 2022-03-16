import React from 'react';
import { 
    FaGithub, 
    FaRegWindowMaximize, 
 } from "react-icons/fa";

export default function PostContent(props) {
    const { title, blogImage, pic1, pic2, blogText, blogText02, blogText03, link01, link02 } = props.post;
    return (
        <div className="main-area bgs section-ptb">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="news-details">
                            {blogImage ? 
                            <div className="news-details-img mb-2">
                                <div className="col">
                                    <img className="img-fluid m-auto d-block w-75" src={pic1} alt={title} />
                                </div>
                                <div className="col mt-3">
                                    <img className="img-fluid m-auto d-block w-75" src={pic2} alt={title} />
                                </div>
                            </div>
                            : null }
                           <div className="post-details m-3 p-3">
                                <ul>
                                    <li> {blogText}</li>
                                    <br></br>
                                    <li> {blogText02}</li>
                                    <br></br>
                                    <li> {blogText03}</li>
                                </ul>
                           </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row news-meta py-2">
                    <div className="col-md-12 text-center">
                        <div className="news-social">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href={link01}><i><FaRegWindowMaximize/></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={link02}><i ><FaGithub/></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
