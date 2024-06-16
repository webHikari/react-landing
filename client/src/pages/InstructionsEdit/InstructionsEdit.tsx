import { useParams } from "react-router-dom";
import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/InstructionsEdit.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";

import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";
import { FaArrowLeft } from "react-icons/fa";

import InstructionEditForm from "@widgets/InstructionsEditForm/InstructionsEditForm";

interface InstructionsCreateProps {
    setAuth: SetAuthFunction;
    name: string;
}

const InstructionsCreate = ({ setAuth, name }: InstructionsCreateProps) => {
    const { instructionId } = useParams();

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to={`/instructions/view/${instructionId}`}>
                        <Button styleType="Button3">
                            <FaArrowLeft />
                            Вернуться
                        </Button>
                    </Link>
                </div>
                <div className={styles.FormContainer}>
                    <InstructionEditForm />
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default InstructionsCreate;
