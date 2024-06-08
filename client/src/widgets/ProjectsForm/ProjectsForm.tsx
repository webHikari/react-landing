import { useState, useEffect } from "react";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
import Select from "react-select";

import styles from "./ui/ProjectsForm.module.css";

import CreateProject from "@/features/Projects/CreateProject/CreateProject";
import GetClients from "@/features/Clients/GetClients/GetClients";

import Option from "./model/Option.props"
import Client from "./model/Client.props"

const ProjectsForm = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [selectedClientOption, setSelectedClientOption] = useState<Option>({
        value: "",
        label: "",
    });
    const [selectedStatusOption, setSelectedStatusOption] = useState<Option>({
        value: "",
        label: "",
    });

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
            selectedClientOption.value,
            selectedStatusOption.value,
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
        { value: "Новый", label: "Новый" },
        { value: "Закрыт", label: "Закрыт" },
        { value: "Расчет", label: "Расчет" },
    ];

    const handleClientChange = (option: any) => {
        setSelectedClientOption(option);
    };

    const handleStatusChange = (option: any) => {
        setSelectedStatusOption(option);
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
                            className={styles.Select}
                            onChange={handleClientChange}
                            options={clientOptions}
                            placeholder="Выберите клиента"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 4,
                                colors: {
                                    ...theme.colors,
                                    // Background
                                    neutral0: "#1f1f1f",
                                    // Default border
                                    neutral20: "#3e3e3e",
                                    // Hover-select-color
                                    neutral30: "#34c471",
                                    // Picked color
                                    neutral80: "#34c471",
                                    // Placeholder color
                                    neutral50: "#3e3e3e",
                                    // Hover-option-color
                                    primary25: "#34c47180",
                                    // Focus-select-color
                                    primary: "#34c471",
                                },
                            })}
                        />
                        <Select
                            className={styles.Select}
                            options={statuses}
                            onChange={handleStatusChange}
                            placeholder="Выберите статус"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 4,
                                colors: {
                                    ...theme.colors,
                                    // Background
                                    neutral0: "#1f1f1f",
                                    // Default border
                                    neutral20: "#3e3e3e",
                                    // Hover-select-color
                                    neutral30: "#34c471",
                                    // Picked color
                                    neutral80: "#34c471",
                                    // Placeholder color
                                    neutral50: "#3e3e3e",
                                    // Hover-option-color
                                    primary25: "#34c47180",
                                    // Focus-select-color
                                    primary: "#34c471",
                                },
                            })}
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
