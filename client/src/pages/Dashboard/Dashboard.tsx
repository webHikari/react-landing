import { useEffect, useState } from "react";

import Button from "@shared/Button/Button";
import Sidebar from "@widgets/Sidebar/Sidebar";

import styles from "./ui/Dashboard.module.css";

export default function Dashboard({ setAuth }: any) {
    const logout = () => {
        localStorage.removeItem("token");
        setAuth(false);
    };

    const [name, setName] = useState("");

    // Fetch data for variables
    const getData = async () => {
        try {
            const response = await fetch("http://localhost:3000/dashboard", {
                method: "GET",
                headers: { token: localStorage.token },
            });

            const parseRes = await response.json();
            setName(parseRes.login);
            // Set data xd
        } catch (err: any) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getData();
    });

    return (
        <div className={styles.Container}>
            <p>{name}</p>
            <Sidebar />
            <p>Dashboard.</p>
            <Button
                value="Log out"
                onClick={() => logout()}
                styleType="Button1"
            />
        </div>
    );
}
