import React from "react";
import "./assets/scss/style.scss";
import AppRouter from "./router/AppRouter";
import Context from "./context/Contex";
import { SmoothProvider } from "react-smooth-scrolling";

const App = () => {
    return (
        <Context>
            <SmoothProvider skew={true}>
                <AppRouter />
            </SmoothProvider>
        </Context>
    );
};

export default App;
