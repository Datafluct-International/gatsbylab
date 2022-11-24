import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
//import Header from '../components/header';
//import Footer from "../components/footer";
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const Post = (props) => {
    //console.log(props);
    return (
        <Layout>
            <h1>{props.data.allContentfulBlogPost.nodes[0].title}</h1>
            {renderRichText(props.data.allContentfulBlogPost.nodes[0].body)}
        </Layout>
    );
}
export const query = graphql`
    query MyQuery ($slug: String){
        allContentfulBlogPost ( # this type is used to name for file
            filter: {node_locale: {eq: "en-US"}, slug: {eq: $slug}}
            ){ 
            nodes {
                title
                contentful_id
                body {
                    raw
                }
                publishDate
                slug
            }
        }
    }
`;

export const Head = () => <Seo title="Post" />

export default Post;