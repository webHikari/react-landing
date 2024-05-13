import { useState } from "react";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
import Checkbox from "@shared/Checkbox/Checkbox";

import styles from "./ui/ClientsAddForm.module.css";

import CreateClient from "@features/CreateClient/CreateClient";

const ClientsAddForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [clientName, setClientName] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [isClient, setIsClient] = useState(false);
    const [isContractor, setIsContractor] = useState(false);

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

        CreateClient(
            { setIsLoading },
            clientName,
            clientAddress,
            isContractor,
            isClient
        );
    };

    return (
        <div className={styles.FormContainer}>
            <h1>Добавить клиента</h1>
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
                            onClick={handleIsClientClick}
                        />
                        <Checkbox
                            value="Подрядчик"
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

export default ClientsAddForm;
