import React from "react";
import style from "./header.module.sass"

const Header = () => {
    return (
        <header className={style.header}>
            <a href="/">GPT-3</a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">What is GPT?</a></li>
                    <li><a href="/">Open AI</a></li>
                    <li><a href="/">Case Studies</a></li>
                    <li><a href="/">Library</a></li>
                </ul>
            </nav>
            <div className={style.user}>
                <button className={style.singIn}>Sing in</button>
                <button className={style.singUp}>Sing up</button>
            </div>
        </header>
    )
};

export default Header;