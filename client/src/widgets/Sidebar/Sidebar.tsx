import { NavLink } from "react-router-dom";

import styles from "./ui/Sidebar.module.css";
import { BiGridAlt } from "react-icons/bi";

export default function Sidebar() {
    return (
        <div className={styles.Sidebar}>
            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    isActive ? styles.Active : styles.Default
                }
            >
                <BiGridAlt />
                Dashboard
            </NavLink>{" "}
            <NavLink
                to="/projects"
                className={({ isActive }) =>
                    isActive ? styles.Active : styles.Default
                }
            >
                <BiGridAlt />
                Projects
            </NavLink>
            <NavLink
                to="/projects"
                className={({ isActive }) =>
                    isActive ? styles.Active : styles.Default
                }
            >
                <BiGridAlt />
                Projects
            </NavLink>
        </div>
    );
}
