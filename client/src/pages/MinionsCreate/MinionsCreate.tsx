import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/MinionsCreate.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";

import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";
import { FaArrowLeft } from "react-icons/fa";

import MinionAddForm from "@widgets/MinionAddForm/MinionAddForm";

interface MinionsCreateProps {
    setAuth: SetAuthFunction;
    name: string;
}

const MinionsCreate = ({ setAuth, name }: MinionsCreateProps) => {
    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/minions">
                        <Button styleType="Button3">
                            <FaArrowLeft />
                            Вернуться
                        </Button>
                    </Link>
                </div>
                <div className={styles.FormContainer}>
                    <MinionAddForm />
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default MinionsCreate;
