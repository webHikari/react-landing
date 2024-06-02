import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/InstructionsCreate.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";

import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";
import { FaArrowLeft } from "react-icons/fa";

import InstructionAddForm from "@widgets/InstructionAddForm/InstructionAddForm"

interface InstructionsCreateProps {
    setAuth: SetAuthFunction;
    name: string;
}

const InstructionsCreate = ({ setAuth, name }: InstructionsCreateProps) => {
    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/instructions">
                        <Button styleType="Button3">
                            <FaArrowLeft />
                            Вернуться
                        </Button>
                    </Link>
                </div>
                <div className={styles.FormContainer}>
                    <InstructionAddForm />
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default InstructionsCreate;
