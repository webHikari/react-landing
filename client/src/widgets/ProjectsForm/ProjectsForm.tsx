import { useState } from "react";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
import Select from "@shared/Select/Select";

import styles from "./ui/ProjectsForm.module.css";

const ProjectsForm = () => {
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
        setComment(value)
    }

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        console.log({ status }, { client }, { projectName }, { projectId });
    };

    const clients = [
        { value: "option1", label: "Опция 1" },
        { value: "option2", label: "Опция 2" },
        { value: "option3", label: "Опция 3" },
    ];

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
                            options={clients}
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
