import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Waybills.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";


interface WaybillsProps {
    setAuth: SetAuthFunction;
    name: string;
}

const Waybills = ({ setAuth, name }: WaybillsProps) => {

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/waybills/create">
                        <Button styleType="Button3" value="Создать накладную">
                            <FaPlus />
                            Создать накладную
                        </Button>
                    </Link>
                </div>
                <div className={styles.WaybillsInfo}>

                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Waybills;
