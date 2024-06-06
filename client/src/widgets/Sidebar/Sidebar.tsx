import { NavLink } from "react-router-dom";

import styles from "./ui/Sidebar.module.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";
import { BiFolder } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiFileBlank } from "react-icons/bi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { IoBarcodeOutline } from "react-icons/io5";
import { GrPlan } from "react-icons/gr";

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
                    <BiHomeAlt2 />
                    Главная
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiFolder />
                    Проекты
                </NavLink>
                <NavLink
                    to="/clients"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiUser />
                    Клиенты
                </NavLink>
                <NavLink
                    to="/instructions"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiFileBlank />
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
                    <GrPlan />
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
                    <IoBarcodeOutline />
                    Артикулы
                </NavLink>
                <NavLink
                    to="/minions"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <GrUserWorker />
                    Вахтеры
                </NavLink>
                <NavLink
                    to="/rates"
                    className={({ isActive }) =>
                        isActive ? styles.Active : styles.Default
                    }
                >
                    <BiMoneyWithdraw />
                    Ставки
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
