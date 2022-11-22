import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main"
import style from "./layout.module.sass"

const GeneralLayout = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
};

export default GeneralLayout;