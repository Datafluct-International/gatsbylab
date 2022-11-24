import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
const About = function () {
    return (
        <Layout>
            <div>
                <h1>About us</h1>
                <p>Welcome to our page! Here is some info about us.</p>
            </div>
        </Layout>
    );
}
// class About extends React.Component {
//     render() {

//     }
// }
export const Head = () => <Seo title="About" />;
export default About;