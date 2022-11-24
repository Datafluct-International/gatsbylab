import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

//import Layout from "../components/layout"
import Seo from "../components/seo";
import Layout from "../components/layout";
import * as styles from "../components/index.module.css";
import pic from "../images/image1.jpg";
import { graphql } from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const IndexPage = ({ data }) => {
  //console.log(data);
  return (
    <Layout>
      <div>
        <h1 className={styles.heading}>{process.env.API_KEY}</h1>
        <p>{process.env.GATSBY_API_URL}</p>
        <p>{process.env.NODE_ENV}</p>
        <p>{process.env.PUBLIC_DIR}</p>
      </div>
      <div><ul>
        {data.allContentfulBlogPost.nodes.map(i =>
          <li key={i.slug}><Link to={i.slug}>{i.title}</Link>{renderRichText(i.description)}</li>
        )}
      </ul></div>
      <div>
        <img src={pic} alt="alternative text" />
      </div>
    </Layout>
  );

};

export const query = graphql`
  query MyQuery {
    allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        id
        slug
        title
        description {
          raw
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />

export default IndexPage
