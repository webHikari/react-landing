import { useNavigate } from "react-router-dom";

import { ProjectProps } from "./Project.props.ts";
import styles from "./Project.module.css";

const Project = ({ projectId, projectCount, projectName, clientName, onClick }: ProjectProps) => {
    const navigate = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        onClick?.(event);
        navigate("/projects/view/" + projectId);
    };

    return (
        <div className={styles.Project} onClick={handleClick}>
            <h4>Проект {projectCount}</h4>
            <p>Название: {projectName}</p>
            <p>Клиент: {clientName}</p>
        </div>
    );
};

export default Project;
