import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Hero } from "../../components/heroImage.js";
import Seo from "../../components/seo";
import Layout from "../../components/layout.js";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { graphql } from "gatsby"; //step 1

const IndexCompany = ({ data }) => { //step 3: rather use props, this uses { data } <=> props.data

  return (
    <Layout>
      <h1>Datafluct</h1>
      <p>{data.site.siteMetadata.description}</p>
      <p>{data.site.siteMetadata.author}</p>
      <StaticImage src="../../images/filipp-romanovski-KNTrdpk-gTg-unsplash.jpg" alt="hello" width={300} placeholder="blurred" />
      <Hero />
      <h1>Slider</h1>
      <Swiper
        // install Swiper modules
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        //scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        //onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log('slide change')}
        className="mySwiper"
      >
        {data.allFile.nodes.map((node) => { // if I used .forEach(), this code would not show images. Why?
          return (
            <SwiperSlide key={node.childrenImageSharp[0].id}>
              <GatsbyImage image={getImage(node.childrenImageSharp[0])} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>

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
    allFile {
      nodes {
        childrenImageSharp {
          id
          gatsbyImageData(
            layout: CONSTRAINED
            formats: AUTO
            width: 300
            height: 300
            placeholder: BLURRED
          )
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Company" />

export default IndexCompany;