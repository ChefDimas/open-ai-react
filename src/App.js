import React from "react";
import GeneralLayout from "./layouts/GeneralLayout";
import "./normalize.sass";
import Main from "./main/Main.jsx";

function App() {
    return (
        <GeneralLayout>
            <Main />
        </GeneralLayout>
    );
}

export default App;
