import { NavLink } from "react-router-dom";

import styles from "./ui/Header.module.css";

export default function Header() {
    return (
        <div className={styles.HeaderWrapper}>
            <header className={styles.Header}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? styles.ActiveLink : styles.DefaultLink
                    }
                >
                    Main page
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles.ActiveLink : styles.DefaultLink
                    }
                    to="/login"
                >
                    Sign in
                </NavLink>
                <NavLink
                    to="/register"
                    className={({ isActive }) =>
                        isActive ? styles.ActiveLink : styles.DefaultLink
                    }
                >
                    Sign up
                </NavLink>
                <NavLink
                    to="/tutorial"
                    className={({ isActive }) =>
                        isActive ? styles.ActiveLink : styles.DefaultLink
                    }
                >
                    Tutorial
                </NavLink>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? styles.ActiveLink : styles.DefaultLink
                    }
                >
                    Dashboard
                </NavLink>
            </header>
        </div>
    );
}
