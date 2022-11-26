import React, { useLayoutEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Hero } from "../../components/heroImage.js";
import Seo from "../../components/seo";
import Layout from "../../components/layout.js";
import { gsap } from 'gsap';

import { graphql } from "gatsby"; //step 1

const IndexCompany = ({ data }) => { //step 3

  /////////use 'gasp' for animation////////////
  // create a ref for the root level element (this component) (we'll use it later)
  // this component will be used as root CONTEXT to animate inside element
  const compTarget = useRef();

  useLayoutEffect(() => {

    // -- ANIMATION CODE HERE --
    // create our context. ( we can think context similar to a PADDLE bind to our component )
    // This function is invoked immediately and all GSAP animations
    // created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {

      // Target the specific element we have asigned the animate class. Note: the "." at name of class
      // gasp.to() : creating animation affecting to CSS properties
      //gsap.to(".animate", { rotation: "+=360" });
      gsap.to(".animate", {
        rotation: "+=360",
        x: 300,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      });

      gsap.to(".box", { y: 100, repeat: -1, repeatDelay: 1, yoyo: true, });

    }, compTarget); // <- IMPORTANT! Scopes selector text

    return () => {
      return ctx.revert(); // cleanup code (optional)
    }

  }, []); // <- empty dependency Array so it doesn't re-run on every render!

  //////// end 'gsap' //////////

  return (
    <Layout>
      <h1>Datafluct</h1>
      <p>{data.site.siteMetadata.description}</p>
      <p>{data.site.siteMetadata.author}</p>
      <div ref={compTarget}> {/** using 'ref' property to set root element for animation */}
        {/** note: className of element is effected by animation from GSAP */}
        <StaticImage className="animate" src="../../images/filipp-romanovski-KNTrdpk-gTg-unsplash.jpg" alt="hello" width={300} height={300} placeholder="blurred" />

        <div className="box"><Hero /></div>
      </div>
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