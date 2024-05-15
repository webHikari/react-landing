import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Minions.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";


interface MinionsProps {
    setAuth: SetAuthFunction;
    name: string;
}

const Minions = ({ setAuth, name }: MinionsProps) => {

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/instructions/create">
                        <Button styleType="Button3" value="Создать проект">
                            <FaPlus />
                            Создать вахтера
                        </Button>
                    </Link>
                </div>
                <div className={styles.MinionsInfo}>

                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Minions;
