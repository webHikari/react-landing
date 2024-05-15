import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Rates.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";


interface RatesProps {
    setAuth: SetAuthFunction;
    name: string;
}

const Rates = ({ setAuth, name }: RatesProps) => {

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/rates/create">
                        <Button styleType="Button3" value="Создать проект">
                            <FaPlus />
                            Создать ставку
                        </Button>
                    </Link>
                </div>
                <div className={styles.RatesInfo}>

                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Rates;
