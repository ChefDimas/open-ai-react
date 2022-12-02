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
            <div className={style.secondContainer}>
                <ul>
                    <li>
                        Links
                        <ul>
                            <li>
                                <a href="/">Overons</a>
                            </li>
                            <li>
                                <a href="/">Social Media</a>
                            </li>
                            <li>
                                <a href="/">Counters</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Company
                        <ul>
                            <li>
                                <a href="/">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Get in touch
                        <ul>
                            <li>
                                <a href="">Crechterwoord K12 182 DK</a>
                            </li>
                            <li>
                                <a href="">085-132567</a>
                            </li>
                            <li>
                                <a href="">info@payme.net</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
