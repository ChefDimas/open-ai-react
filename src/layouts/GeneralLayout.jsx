import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import style from "./layout.module.sass"


const GeneralLayout = ( {children} ) => {
    return (
        <div className={style.app}>
            <Header />
                {children}
            <Footer />
        </div>
    )
};

export default GeneralLayout;