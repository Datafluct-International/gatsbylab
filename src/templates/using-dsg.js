import * as React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../components/layout";
import Seo from "../components/seo";

const UsingDSG = (props) => {
  //console.log(props);
  return (
    <Layout>
      <h1>{props.pageContext.post.title}</h1>
      {renderRichText(props.pageContext.post.body)}
    </Layout>
  );

}
export const Head = (props) => <Seo title={props.pageContext.post.title} />
export default UsingDSG;
