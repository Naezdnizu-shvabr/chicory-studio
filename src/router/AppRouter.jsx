import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import SignUpPage from "../pages/signUpPage/SignUpPage";

const routes = [
    { path: "/", element: <HomePage></HomePage> },
    { path: "/sign-up", element: <SignUpPage></SignUpPage> },
];

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, index) => 
                <Route key={index} path={route.path} element={route.element} />
            )}
        </Routes>
    );
};

export default AppRouter;
