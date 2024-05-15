import { useState, useEffect } from "react";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
import Checkbox from "@shared/Checkbox/Checkbox";

import styles from "./ui/ClientEditForm.module.css";

import EditClient from "@/features/Clients/EditClient/EditClient";
import GetOneClient from "@/features/Clients/GetOneClient/GetOneClient";

const ClientsEditForm = ({ clientId }: { clientId: string }) => {
    const [isLoading, setIsLoading] = useState(false);

    const [clientName, setClientName] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [isClient, setIsClient] = useState(false);
    const [isContractor, setIsContractor] = useState(false);

    useEffect(() => {
        const fetchClient = async () => {
            try {
                const client = await GetOneClient(clientId);
                if (client) {
                    setClientName(client.clientName);
                    setClientAddress(client.clientAddress);
                    setIsClient(client.isClient);
                    setIsContractor(client.isContractor);

                    console.log(client);
                } else {
                    console.error("Client not found");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchClient();
    }, [clientId]);

    const handleClientNameChange = (value: string) => {
        setClientName(value);
    };

    const handleClientAddressChange = (value: string) => {
        setClientAddress(value);
    };

    const handleIsClientClick = () => {
        setIsClient(!isClient);
        console.log(isClient);
    };

    const handleIsContractorClick = () => {
        setIsContractor(!isContractor);
        console.log(isContractor);
    };

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        EditClient(
            { setIsLoading },
            clientId,
            clientName,
            clientAddress,
            isContractor,
            isClient
        );
    };

    return (
        <div className={styles.FormContainer}>
            <h1>Изменить клиента</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className={styles.Form}>
                    <div className={styles.Child}>
                        <Input
                            styleType="Input1"
                            placeholderValue="Название"
                            type="text"
                            value={clientName}
                            onChange={handleClientNameChange}
                            required
                        />
                        <Input
                            styleType="Input1"
                            placeholderValue="Адрес"
                            type="text"
                            value={clientAddress}
                            onChange={handleClientAddressChange}
                            required
                        />
                    </div>
                    <div className={styles.Child}>
                        <Checkbox
                            value="Клиент"
                            checked={isClient}
                            onClick={handleIsClientClick}
                        />
                        <Checkbox
                            value="Подрядчик"
                            checked={isContractor}
                            onClick={handleIsContractorClick}
                        />
                    </div>
                    <Button
                        styleType="Button1"
                        onClick={(e) => handleSubmit(e)}
                    />
                </div>
            )}
        </div>
    );
};

export default ClientsEditForm;
