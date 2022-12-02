import React from "react";
import style from "./footer.module.sass";

const Footer = () => {
    return (
        <footer>
            <div className={style.firstContainer}>
                <h1>
                    Do you want to step in to the <br />
                    future before others
                </h1>
                <button>Request Early Access</button>
            </div>
        </footer>
    );
};

export default Footer;
