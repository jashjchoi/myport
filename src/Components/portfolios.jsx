import React, { useState, useEffect } from 'react';
import { Col, Row, Nav,  Tab } from "react-bootstrap";
import Masonry from "react-responsive-masonry"
import SinglePortfolio from "../SingleFeatures/SinglePortfolio";
import portfolioImg_01 from "../assets/images/portfolio/1.png";
import portfolioImg_02 from "../assets/images/portfolio/2.png";
import portfolioImg_03 from "../assets/images/portfolio/3.png";
// import portfolioImg_05 from "../assets/images/portfolio/4.png";
import portfolioImg_04 from "../assets/images/portfolio/aapi_2-thumbnail.png";
import { SRLWrapper } from "simple-react-lightbox";
import { useGlobalEvent } from 'beautiful-react-hooks'; 
import SectionTitle from "./section_title";
import projectPosts from "../data/project_posts"
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";


export default function Portfolios(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [portfolioColumns, setPortfolioColumns] = useState(3);
    const onWindowResize = useGlobalEvent('resize');
    const [posts,setPosts] = useState([]);
    const [featurePosts,setFeaturePosts] = useState([]);
    const [withoutFeaturePosts, setWithoutFeaturePosts] = useState([]);
    const smBlogPostNumbers = 3;
    const featurePostsNumber = 2;
    useEffect(()=>{
        const postsData = projectPosts.posts;
        setPosts(postsData);
        setFeaturePosts(projectPosts.posts.filter(posts => posts.featured === true));
        setWithoutFeaturePosts(projectPosts.posts.filter(posts => posts.featured !== true));
    }, [posts])

    const controlColumns = ()=>{
        setWindowWidth(window.innerWidth);

        if (windowWidth >= 992) {
            setPortfolioColumns(3);
        } else if (windowWidth <= 991 && windowWidth > 767) {
            setPortfolioColumns(3);
        }
        if (windowWidth <= 767) {
            setPortfolioColumns(1);
        }
    }
    onWindowResize((event) => {
        controlColumns();
    });
    
    useEffect(()=>{
        controlColumns();
    }, [windowWidth]);


    return (
        <>
        <div className="portfolio-area section-ptb-2" id="portfolio">
            <div className="container">
                    <SectionTitle
                        title="PORTFOLIO"
                        subTitle="My Projects"
                        desc=""
                    />
                    <Tab.Container defaultActiveKey="web_development">
                        <Row>
                            <div className="col-xl-8 col-lg-9 col-sm-12 mx-auto">
                                <Nav className="pofo-cat pb-5 text-center justify-content-center">
                                    {/* <Nav.Item>
                                        <Nav.Link eventKey="all">ALL</Nav.Link>
                                    </Nav.Item> */}
                                    <Nav.Item>
                                        <Nav.Link eventKey="web_development">PROJECTS</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="web_research">OTHERS</Nav.Link>
                                    </Nav.Item>

                                    <div className="pofo-line"></div>
                                </Nav>
                            </div>
                            <Col sm={12}>
                                <Tab.Content>
                                    {/* <Tab.Pane eventKey="all">
                                    <SRLWrapper> 
                                            <Masonry columnsCount={portfolioColumns}>
                                            <Link to={`/project_details/1`}> <SinglePortfolio portfolioImg={portfolioImg_01} title="Portfolio Title One" /></Link> 
                                            <Link to={`/project_details/2`}> <SinglePortfolio portfolioImg={portfolioImg_02} title="Portfolio Title Two" /></Link> 
                                            <SinglePortfolio portfolioImg={portfolioImg_04} title="Portfolio Title Three" />
                                            <SinglePortfolio portfolioImg={portfolioImg_02} title="Portfolio Title Four" />
                                            <SinglePortfolio portfolioImg={portfolioImg_06} title="Portfolio Title Five" />
                                        </Masonry>
                                     </SRLWrapper>
                                    </Tab.Pane> */}
                                    <Tab.Pane eventKey="web_development">
                                        <div className="row mt-45 pb-90">
                                            <div className="col-xl-8">
                                                <div className="row">
                                                    {featurePosts.slice(0, featurePostsNumber).map((posts,i)=>(
                                                    <div className="col-lg-6" key={i}>
                                                        <div className="single-blog mb-30 pb-40">
                                                            {posts.blogImage ?
                                                            <div className="blog-img">
                                                                <Link to={`/project_details/${posts.id}`}>
                                                                    <img className="img-fluid" src={posts.blogImage} alt={posts.title} />
                                                                </Link>
                                                            </div>
                                                            : null}
                                                            <div className="blog-details pl-30 mt-35 pr-30">
                                                                <div className="blog-title mb-10">
                                                                    <Link to={`/project_details/${posts.id}`}>
                                                                        <h2>{posts.title}</h2>
                                                                    </Link>
                                                                </div>
                                                                <p className="mb-10">{posts.smallDesc}</p>
                                                                <div className="blog-button">
                                                                    <Link to={`/project_details/${posts.id}`}>
                                                                        Read More &nbsp; <i><FaAngleRight /></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-lg-4 blog-lists-wrapper">
                                            {withoutFeaturePosts.slice(0, smBlogPostNumbers).map((posts,i)=>(
                                                <div className="blog-item-small-wrapper" key={i}>
                                                    <div className="blog-item-small ">
                                                        {posts.blogImage ?
                                                        <div className="blog-small-img mr-20 float-left">
                                                            <Link to={`/project_details/${posts.id}`}>
                                                                <img className="img-fluid" src={posts.blogImage} alt={posts.title} />
                                                            </Link>
                                                        </div>
                                                            : null}
                                                        <div className="blog-small-description pt-20 pb-20">
                                                            <Link to={`/project_details/${posts.id}`}>
                                                                <h2 className="small_title">{posts.title}</h2>
                                                            </Link>
                                                            <p>{posts.smallDesc}</p>
                                                        </div>
                                                    </div>
                                                <span className="horizontal-border"><hr /></span>
                                                </div>
                                            ))}
                                        </div>
                                        </div>
                                       
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="web_research">
                                        <SRLWrapper>
                                        <Masonry columnsCount={portfolioColumns}>
                                            
                                            <Link to={`/project_details/6`}> <SinglePortfolio portfolioImg={portfolioImg_01} title="Portfolio Title One" /></Link> 
                                            <Link to={`/project_details/7`}> <SinglePortfolio portfolioImg={portfolioImg_03} title="Portfolio Title Two" /></Link> 
                                            <Link to={`/project_details/9`}><SinglePortfolio portfolioImg={portfolioImg_04} title="Portfolio Title Four" /></Link>
                                            {/* <Link to={`/project_details/8`}> <SinglePortfolio portfolioImg={portfolioImg_02} title="Portfolio Title Five" /></Link> */}
                                        </Masonry>
                                        </SRLWrapper>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
            </div>
        </div>
        </>
    )
}
