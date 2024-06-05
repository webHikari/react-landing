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

// Clients pages
import Clients from "@pages/Clients/Clients"
import ClientsCreate from "@pages/ClientsCreate/ClientsCreate"
import ClientsEdit from "@pages/ClientsEdit/ClientsEdit"

// Instructions pages
import Instructions from "@pages/Instructions/Instructions";
import InstructionsCreate from "@pages/InstructionsCreate/InstructionsCreate";

// Acts pages
import Acts from "@pages/Acts/Acts";

// Waybills pages
import Waybills from "@pages/Waybills/Waybills";

// Shifts pages
import Shifts from "@pages/Shifts/Shifts";

// Bookings pages
import Bookings from "@pages/Bookings/Bookings";

// Products pages
import Products from "@pages/Products/Products"
import ProductsCreate from "@pages/ProductsCreate/ProductsCreate";

// Minions pages
import Minions from "@pages/Minions/Minions"
import MinionsCreate from "@pages/MinionsCreate/MinionsCreate";

// Rates pages
import Rates from "@pages/Rates/Rates"
import RatesCreate from "@pages/RatesCreate/RatesCreate"

import Tutorial from "@pages/Tutorial/Tutorial";
import Dashboard from "@pages/Dashboard/Dashboard";

import { SetAuthFunction } from "./model/Provider.props";

import getData from "@/features/Dashboard/GetData/GetData";

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
                <Route
                    path="/clients"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <Clients setAuth={setAuth} name={name} />
                        )
                    }
                />
                <Route
                    path="/clients/create"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <ClientsCreate setAuth={setAuth} name={name} />
                        )
                    }
                />
                <Route
                    path="/clients/edit/:clientId"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <ClientsEdit setAuth={setAuth} name={name} />
                        )
                    }
                />
                <Route
                    path="/instructions"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <Instructions setAuth={setAuth} name={name}/>
                        )
                    }
                />
                <Route
                    path="/instructions/create"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <InstructionsCreate setAuth={setAuth} name={name}/>
                        )
                    }
                />
                <Route
                    path="/acts"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <Acts setAuth={setAuth} name={name}/>
                        )
                    }
                />
                <Route
                    path="/waybills"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <Waybills setAuth={setAuth} name={name}/>
                        )
                    }
                />
                <Route
                    path="/shifts"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <Shifts setAuth={setAuth} name={name}/>
                        )
                    }
                />
                <Route
                    path="/bookings"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <Bookings setAuth={setAuth} name={name}/>
                        )
                    }
                />
                <Route
                    path="/products"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <Products setAuth={setAuth} name={name}/>
                        )
                    }
                />
                <Route
                    path="/products/create"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <ProductsCreate setAuth={setAuth} name={name}/>
                        )
                    }
                />
                <Route
                    path="/minions"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <Minions setAuth={setAuth} name={name}/>
                        )
                    }
                />
                <Route
                    path="/minions/create"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <MinionsCreate setAuth={setAuth} name={name}/>
                        )
                    }
                />
                <Route
                    path="/rates"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <Rates setAuth={setAuth} name={name}/>
                        )
                    }
                />
                <Route
                    path="/rates/create"
                    element={
                        !isAuthenticated ? (
                            <Navigate to="/login" />
                        ) : (
                            <RatesCreate setAuth={setAuth} name={name}/>
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
