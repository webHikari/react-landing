import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/ClientsCreate.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { Link } from "react-router-dom";

import Button from "@shared/Button/Button";
import ClientsAddForm from "@widgets/ClientsAddForm/ClientsAddForm";

import { FaArrowLeft } from "react-icons/fa";

interface ClientsCreateProps {
    setAuth: SetAuthFunction;
    name: string;
}

const ClientsCreate = ({ setAuth, name }: ClientsCreateProps) => {
    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/clients">
                        <Button styleType="Button3">
                            <FaArrowLeft />
                            Вернуться
                        </Button>
                    </Link>
                </div>
                <div className={styles.FormContainer}>
                    <ClientsAddForm />
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default ClientsCreate;
