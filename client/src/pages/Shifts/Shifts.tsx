import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Shifts.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";


interface ShiftsProps {
    setAuth: SetAuthFunction;
    name: string;
}

const Shifts = ({ setAuth, name }: ShiftsProps) => {

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/Shifts/create">
                        <Button styleType="Button3" value="Создать проект">
                            <FaPlus />
                            Создать накладную
                        </Button>
                    </Link>
                </div>
                <div className={styles.ShiftsInfo}>

                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Shifts;
