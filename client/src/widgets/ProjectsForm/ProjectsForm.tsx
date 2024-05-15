import { useState, useEffect } from "react";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
import Select from "@shared/Select/Select";

import styles from "./ui/ProjectsForm.module.css";

import CreateProject from "@/features/Projects/CreateProject/CreateProject";
import GetClients from "@/features/Clients/GetClients/GetClients";

interface Client {
    id: number;
    clientName: string;
}

const ProjectsForm = () => {
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        const fetchClients = async () => {
            const clientsData = await GetClients();
            setClients(clientsData);
            console.log(clients);
        };
        fetchClients();
    }, []);

    const [isLoading, setIsLoading] = useState(false);

    const [projectName, setProjectName] = useState("");
    const [projectId, setProjectId] = useState("");
    const [comment, setComment] = useState("");
    const [client, setClient] = useState("");
    const [status, setStatus] = useState("");

    const handleProjectNameChange = (value: string) => {
        setProjectName(value);
    };

    const handleProjectIdChange = (value: string) => {
        setProjectId(value);
    };

    const handleCommentChange = (value: string) => {
        setComment(value);
    };

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        CreateProject(
            { setIsLoading },
            projectId,
            projectName,
            client,
            status,
            comment
        );
    };

    const [clientOptions, setClientOptions] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            const clientsData = await GetClients();
            setClients(clientsData);

            // Формируем новый массив clientOptions на основе данных с сервера
            const options = clientsData.map((client: any) => ({
                value: client.id,
                label: client.clientName,
            }));
            setClientOptions(options);
        };
        fetchClients();
    }, []);

    const statuses = [
        { value: "New", label: "Новый" },
        { value: "Closed", label: "Закрыт" },
        { value: "Coutn", label: "Расчет" },
    ];

    const handleClientChange = (value: string) => {
        setClient((prevClient) => {
            console.log("Предыдущее состояние client:", prevClient);
            console.log("Новое состояние client:", value);
            return value;
        });
    };

    const handleStatusChange = (value: string) => {
        setStatus((prevStatus) => {
            console.log("Предыдущее состояние client:", prevStatus);
            console.log("Новое состояние client:", value);
            return value;
        });
    };

    return (
        <div className={styles.FormContainer}>
            <h1>Создать новый проект</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className={styles.Form}>
                    <div className={styles.Child}>
                        <Input
                            styleType="Input1"
                            placeholderValue="Номер"
                            type="text"
                            value={projectId}
                            onChange={handleProjectIdChange}
                            required
                        />
                        <Input
                            styleType="Input1"
                            placeholderValue="Название"
                            type="text"
                            value={projectName}
                            onChange={handleProjectNameChange}
                            required
                        />
                    </div>
                    <div className={styles.Child}>
                        <Select
                            options={clientOptions}
                            onChange={handleClientChange}
                            labelText="Клиент"
                        />
                        <Select
                            options={statuses}
                            onChange={handleStatusChange}
                            labelText="Статус"
                        />
                    </div>
                    <Input
                        styleType="Input1"
                        placeholderValue="Комментарий"
                        type="text"
                        value={comment}
                        onChange={handleCommentChange}
                        required
                    />
                    <Button
                        styleType="Button1"
                        onClick={(e) => handleSubmit(e)}
                    />
                </div>
            )}
        </div>
    );
};

export default ProjectsForm;
