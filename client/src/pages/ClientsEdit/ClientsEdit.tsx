import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/ClientsEdit.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import Button from "@shared/Button/Button";

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { useParams } from "react-router-dom";
import ClientsEditForm from "@widgets/ClientEditForm/ClientEditForm";

interface ClientsEditProps {
    setAuth: SetAuthFunction;
    name: string;
}

const ClientsEdit = ({ setAuth, name }: ClientsEditProps) => {
    const { clientId }: any = useParams();

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
                <div className={styles.ClientInfo}>
                    <ClientsEditForm clientId={parseInt(clientId)}/>
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default ClientsEdit;
