import { useState, useEffect } from "react";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
// import Checkbox from "@shared/Checkbox/Checkbox";
import Select from "react-select"

import GetProjects from "@features/Projects/GetProjects/GetProjects";

import styles from "./ui/InstructionAddForm.module.css";

interface Project {
    projectName: string;
    clientName: string;
    projectCount: string;
    id: number;
}

const InstructionAddForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState<{ value: string; label: string }[]>([]);

    const [clientName, setClientName] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClientNameChange = (value: string) => {
        setClientName(value);
    };

    const handleClientAddressChange = (value: string) => {
        setClientAddress(value);
    };

    const handleOptionChange = (option: any) => {
        setSelectedOption(option);
        console.log(selectedOption)
    };

    useEffect(() => {
        const fetchProjects = async () => {
            const projectsData = await GetProjects();
            const projects = projectsData.map((project: Project) => ({
                value: project.id,
                label: project.projectCount,
            }));
            setOptions(projects);
        };
        fetchProjects();
    }, []);


    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        // CreateClient(
        //     { setIsLoading },
        //     clientName,
        //     clientAddress,
        //     isContractor,
        //     isClient
        // );
    };

    return (
        <div className={styles.FormContainer}>
            <h1>Добавить инструкцию</h1>
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
                        <Select
                            className={styles.Select}
                            defaultValue={options[0]}
                            onChange={handleOptionChange}
                            options={options}
                            placeholder="Выберите проект"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 4,
                                colors: {
                                    ...theme.colors,
                                    // Background
                                    neutral0: '#1f1f1f',
                                    // Default border
                                    neutral20: '#3e3e3e',
                                    // Hover-select-color
                                    neutral30: '#34c471',
                                    // Default color
                                    neutral80: '#34c471',
                                    // Hover-option-color
                                    primary25: '#34c47180',
                                    // Focus-select-color
                                    primary: '#34c471',
                                },
                            })}
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

export default InstructionAddForm;
