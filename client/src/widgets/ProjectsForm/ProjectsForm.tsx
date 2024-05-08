import { useState } from "react";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
import Select from "@shared/Select/Select";

import styles from "./ui/ProjectsForm.module.css";

const ProjectsForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [projectName, setProjectName] = useState("");
    const [projectId, setProjectId] = useState("");
    const [client, setClient] = useState(""); // Добавлено состояние для клиента

    const handleProjectNameChange = (value: string) => {
        setProjectName(value);
    };

    const handleProjectIdChange = (value: string) => {
        setProjectId(value);
    };

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        console.log({ client }, { projectName }, { projectId });
    };

    const options = [
        { value: "option1", label: "Опция 1" },
        { value: "option2", label: "Опция 2" },
        { value: "option3", label: "Опция 3" },
    ];

    const handleSelectChange = (value: string) => {
        setClient(value);
        console.log("Выбранное значение:", value);
        console.log("Состояние client:", client); // Добавлено для проверки обновления состояния
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
                            options={options}
                            onChange={handleSelectChange}
                            labelText="Выбирите чето"
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
