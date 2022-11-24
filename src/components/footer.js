import * as React from "react";
import { footerTitle } from "./footer.module.css";

const Footer = () => {
    return (
        <div id="footer">
            <p className={footerTitle}> &copy; 2020 My Gatsby Site . All rights reserved .</p>
        </div>
    );
};

export default Footer;