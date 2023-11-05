import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import spinner from "../assets/icons/spinner.svg";

const SignUpPage = lazy(() => import("../pages/signUpPage/SignUpPage"));
const HomePage = lazy(() => import("../pages/homePage/HomePage"));

const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/sign-up", element: <SignUpPage /> },
];

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={
                        <Suspense
                            fallback={
                                <img
                                    src={spinner}
                                    alt="spinner"
                                    className="context-spinner"
                                />
                            }>
                            {route.element}
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
