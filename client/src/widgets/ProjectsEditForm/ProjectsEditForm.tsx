import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
import Select from "react-select";

import styles from "./ui/ProjectsEditForm.module.css";

import EditProject from "@features/Projects/EditProject/EditProject";
import GetClients from "@features/Clients/GetClients/GetClients";
import GetOneProject from "@features/Projects/GetOneProject/GetOneProject";

import Option from "./model/Option.props";
import Project from "./model/Project.props";

const ProjectsForm = () => {
    const [selectedClientOption, setSelectedClientOption] = useState<Option>({
        value: "",
        label: "",
    });
    const [selectedStatusOption, setSelectedStatusOption] = useState<Option>({
        value: "",
        label: "",
    });
    const [project, setProject] = useState<Project>({
        id: 0,
        projectName: "",
        projectCount: "",
        clientName: "",
        projectClient: "",
        projectStatus: "",
        projectComment: "",
    });

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

    const [clientOptions, setClientOptions] = useState([]);

    let { _projectId } = useParams();

    useEffect(() => {
        const fetchClients = async () => {
            const clientsData = await GetClients();
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

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const project = await GetOneProject(_projectId);
                const _project = project.project;
                if (_project) {
                    handleClientChange({
                        value: _project.projectClient,
                        label: _project.clientName,
                    });
                    handleStatusChange({
                        value: _project.projectStatus,
                        label: _project.projectStatus,
                    });
                    setProjectName(_project.projectName);
                    setProjectId(_project.projectCount);
                    _project.projectComment
                        ? setComment(_project.projectComment)
                        : null;
                    console.log(_project);
                    setProject(_project);
                } else {
                    console.error("Project not found");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProject();
    }, [_projectId]);

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        const projectClient = selectedClientOption.value.toString();
        const projectStatus = selectedStatusOption.value.toString();
        EditProject(
            { setIsLoading },
            _projectId || "",
            projectName,
            projectId,
            projectClient,
            projectStatus,
            comment
        );
    };
    console.log(project.clientName);

    return (
        <div className={styles.FormContainer}>
            <h1>Изменить проект</h1>
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
                            value={selectedClientOption}
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
                            value={selectedStatusOption}
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
