import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/RatesCreate.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";

import RatesForm from "@widgets/RatesForm/RatesForm";

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
                    <Link to="/projects">
                        <Button styleType="Button3">
                            <FaArrowLeft />
                            Вернуться
                        </Button>
                    </Link>
                </div>
                <div className={styles.FormContainer}>
                    <RatesForm />
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default RatesCreate;
