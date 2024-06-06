import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/ShiftsCreate.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";

import ShiftAddForm from "@widgets/ShiftsAddForm/ShiftsAddForm"

import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";
import { FaArrowLeft } from "react-icons/fa";

interface RatesCreateProps {
    setAuth: SetAuthFunction;
    name: string;
}

const RatesCreate = ({ setAuth, name }: RatesCreateProps) => {
    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/shifts">
                        <Button styleType="Button3">
                            <FaArrowLeft />
                            Вернуться
                        </Button>
                    </Link>
                </div>
                <div className={styles.FormContainer}>
                    <ShiftAddForm />
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default RatesCreate;
