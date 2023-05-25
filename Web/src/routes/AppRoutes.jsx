import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage, Login } from "./importPages";
import { AuthState } from "../atoms/authState";
import CubeLoader from "../utils/Loaders/Cube/CubeLoader";
import { useRecoilValue } from "recoil";


export const AppRoutes = () => {
    const authData = useRecoilValue(AuthState);
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<CubeLoader />}>
                        <HomePage />
                    </Suspense>
                }
            />
            {!authData.token ? (
                <>
                    <Route
                        path="/login"
                        element={
                            <Suspense fallback={<CubeLoader />}>
                                <Login />
                            </Suspense>
                        }
                    />
                </>
            ) : (
                <>
                    <Route path="/login" element={<Navigate replace to="/" />} />
                </>
            )}

        </Routes>
    );
};
