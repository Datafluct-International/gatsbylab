import * as React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../components/layout"

const UsingDSG = (props) => {
  console.log(props);
  return (
    <Layout>
      <h1>{props.pageContext.post.title}</h1>
      <p>{renderRichText(props.pageContext.post.body)}</p>
    </Layout>
  );

}

export default UsingDSG;
