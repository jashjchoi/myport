import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import Layout from "../Layout";
import ProjectContent from "../Components/ProjectContent";
import PageHeader from "../Components/PageHeader";
import projectPosts from "../data/project_posts";
import Newsletter from "../Components/newsletter";
export default function BlogDetails(props) {

   const { Id } = useParams();
   const [ post, setPost ] = useState({});
   const { pathname } = useLocation();
   
   useEffect(()=>{
      const postData = projectPosts.posts.find(post=>post.id == Id);
      setPost(postData);
      window.scrollTo(0, 0);
   }, [pathname]);

    return (
       
       <Layout>
         <PageHeader post={post}/>
         <ProjectContent post={post}/>
          <Newsletter/>
       </Layout>
    )
}
