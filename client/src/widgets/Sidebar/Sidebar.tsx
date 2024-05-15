import { NavLink } from "react-router-dom";

import styles from "./ui/Sidebar.module.css";
import { BiGridAlt } from "react-icons/bi";

import Button from "@shared/Button/Button";
import Logout from "@/features/Auth/Logout/Logout";

import { SetAuthFunction } from "@app/providers/model/Provider.props";

interface SidebarProps {
    setAuth: SetAuthFunction;
    name: string;
}

const Sidebar: React.FC<SidebarProps> = ({ name, setAuth }) => {
    return (
        <div className={styles.Sidebar}>
            <div>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiGridAlt />
                    Главная
                </NavLink>{" "}
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiGridAlt />
                    Проекты
                </NavLink>
                <NavLink
                    to="/clients"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiGridAlt />
                    Клиенты
                </NavLink>
                <NavLink
                    to="/instructions"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiGridAlt />
                    Инструкции
                </NavLink>
                <NavLink
                    to="/waybills"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiGridAlt />
                    Накладные
                </NavLink>
                <NavLink
                    to="/acts"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiGridAlt />
                    Акты
                </NavLink>
                <NavLink
                    to="/shifts"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiGridAlt />
                    Смены
                </NavLink>
                <NavLink
                    to="/bookings"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiGridAlt />
                    Заявки
                </NavLink>
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiGridAlt />
                    Артикулы
                </NavLink>
                <NavLink
                    to="/minions"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiGridAlt />
                    Вахтеры
                </NavLink>
            </div>
            <div>
                <p>{name}</p>
                <Button
                    value="Выйти"
                    onClick={() => Logout({ setAuth })}
                    styleType="Button3"
                />
            </div>
        </div>
    );
};

export default Sidebar;
