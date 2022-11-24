import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Hero } from "../../components/heroImage.js";
import Seo from "../../components/seo";
import Layout from "../../components/layout.js";
import { graphql } from "gatsby"; //step 1

const IndexCompany = ({ data }) => { //step 3
  return (
    <Layout>
      <h1>Datafluct</h1>
      <p>{data.site.siteMetadata.description}</p>
      <p>{data.site.siteMetadata.author}</p>
      <StaticImage src="../../images/filipp-romanovski-KNTrdpk-gTg-unsplash.jpg" alt="hello" width={300} placeholder="blurred" />
      <Hero />
    </Layout>
  );
};
//step 2
export const query = graphql`
query MyQuery {
    site {
      siteMetadata {
        description
        author
      }
    }
  }
`;

export const Head = () => <Seo title="Company" />

export default IndexCompany;