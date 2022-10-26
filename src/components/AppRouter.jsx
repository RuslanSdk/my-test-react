import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context/Context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth);

    if (isLoading){
        return <Loader/>
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(router =>
                    <Route
                        exact={router.exact}
                        path={router.path}
                        element={<router.component/>}
                        key={router.path}
                    />
                )}

                <Route
                    path="*"
                    element={<Navigate to="/posts" replace />}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(router =>
                    <Route
                        exact={router.exact}
                        path={router.path}
                        element={<router.component/>}
                        key={router.path}
                    />
                )}

                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>

    );
};

export default AppRouter;