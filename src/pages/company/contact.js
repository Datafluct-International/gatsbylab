import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";

const ContactCompany = () => {
    return (
        <Layout><h1>Contact</h1></Layout>
    );
};
export const Head = () => <Seo title="Contact" description="Sample desc"><meta content="hello" /></Seo>
export default ContactCompany;