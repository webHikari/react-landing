import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Clients.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { Link } from "react-router-dom";

import Button from "@shared/Button/Button";
import { FaPlus } from "react-icons/fa";

interface ProjectsCreateProps {
    setAuth: SetAuthFunction;
    name: string;
}

const Clients = ({ setAuth, name }: ProjectsCreateProps) => {
    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/clients/create">
                        <Button styleType="Button3">
                            <FaPlus />
                            Добавить клиента
                        </Button>
                    </Link>
                </div>
                <div className={styles.ClientsInfo}>

                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Clients;
