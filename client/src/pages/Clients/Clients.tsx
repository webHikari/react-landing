import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Clients.module.css";
import { useState, useEffect } from "react";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { Link } from "react-router-dom";

import Button from "@shared/Button/Button";
import { FaPlus } from "react-icons/fa";

import GetClients from "@features/GetClients/GetClients";
import Client from "@entities/Client/Client";

interface ProjectsCreateProps {
    setAuth: SetAuthFunction;
    name: string;
}

interface Client {
    id: number;
    clientName: string;
    clientAddress: string;
}

const Clients = ({ setAuth, name }: ProjectsCreateProps) => {
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        const fetchClients = async () => {
            const clientsData = await GetClients();
            setClients(clientsData);
        };
        fetchClients();
    }, []);

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
                    {clients.map((client) => (
                        <Client
                            clientName={client.clientName}
                            clientAddress={client.clientAddress}
                            clientId={client.id}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Clients;
