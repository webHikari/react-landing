import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Clients.module.css";
import { useState, useEffect } from "react";

import { SetAuthFunction } from "@app/providers/model/Provider.props";

import GetClients from "@features/Clients/GetClients/GetClients";
import Client from "@entities/Client/Client";
import ClientsTable from "@widgets/ClientsTable/ClientsTable"

interface ClientsProps {
    setAuth: SetAuthFunction;
    name: string;
}

interface Client {
    id: number;
    clientName: string;
    clientAddress: string;
}

const Clients = ({ setAuth, name }: ClientsProps) => {
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

                <ClientsTable clients={clients}/>
            </div>
        </div>
    );
};

export default Clients;
