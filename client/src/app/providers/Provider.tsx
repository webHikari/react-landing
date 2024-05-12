import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";

// Auth pages
import Login from "@pages/Login/Login";
import Register from "@pages/Register/Register";

// Project pages
import Projects from "@pages/Projects/Projects";
import ProjectsCreate from "@pages/ProjectsCreate/ProjectsCreate";
import ProjectsView from "@pages/ProjectsView/ProjectsView";

import Tutorial from "@pages/Tutorial/Tutorial";
import Dashboard from "@pages/Dashboard/Dashboard";

import { SetAuthFunction } from "./model/Provider.props";

import getData from "@features/GetData/GetData";

export default function Provider() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const setAuth: SetAuthFunction = (boolean: boolean) => {
        setIsAuthenticated(boolean);
    };

    const isAuth = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/auth/is-verify",
                {
                    method: "GET",
                    headers: { token: localStorage.token },
                }
            );
            const parseRes = await response.json();

            parseRes === true
                ? setIsAuthenticated(true)
                : setIsAuthenticated(false);
        } catch (error) {
            console.log(error);
        }
    };

    const [name, setName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const parseRes = await getData();
                setName(parseRes.login);
            } catch (err: any) {
                console.error(err.message);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        isAuth();
    });

    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={
                        !isAuthenticated ? (
                            <Login setAuth={setAuth} />
                        ) : (
                            <Navigate to="/dashboard" />
                        )
                    }
                />
                <Route
                    path="/register"
                    element={
                        !isAuthenticated ? (
                            <Register setAuth={setAuth} />
                        ) : (
                            <Navigate to="/dashboard" />
                        )
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <Dashboard setAuth={setAuth} name={name} />
                        )
                    }
                />
                <Route
                    path="/projects"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <Projects setAuth={setAuth} name={name} />
                        )
                    }
                />
                <Route
                    path="/projects/create"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <ProjectsCreate setAuth={setAuth} name={name} />
                        )
                    }
                />
                <Route
                    path="/projects/view/:projectId"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <ProjectsView setAuth={setAuth} name={name} />
                        )
                    }
                />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route
                    path="/*"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <Dashboard setAuth={setAuth} name={name} />
                        )
                    }
                />
            </Routes>
        </Router>
    );
}
