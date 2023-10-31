import React from 'react';
import Header from "../../widgets/header/Header";

const DefaultLayout = ({children}) => {
    return (
        <div className="container">
            <Header/>
            {children}
        </div>
    );
};

export default DefaultLayout;