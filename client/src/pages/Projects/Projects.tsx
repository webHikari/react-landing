import { useState, useEffect } from "react";

import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Projects.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";

import Project from "@entities/Project/Project";
import GetProjects from "@features/GetProjects/GetProjects";

interface ProjectsProps {
    setAuth: SetAuthFunction;
    name: string;
}

interface Project {
    projectName: string;
    clientName: string;
    projectCount: string;
    id: number;
}

const Projects = ({ setAuth, name }: ProjectsProps) => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchClients = async () => {
            const projectsData = await GetProjects();
            setProjects(projectsData);
            console.log(projects);
        };
        fetchClients();
    }, []);

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/projects/create">
                        <Button styleType="Button3" value="Создать проект">
                            <FaPlus />
                            Создать проект
                        </Button>
                    </Link>
                </div>
                <div className={styles.Grid}>
                    {projects ? projects.map((project) => (
                        <Project
                            projectId={project.id}
                            projectName={project.projectName}
                            projectCount={project.projectCount}
                            clientName={project.clientName}
                        />
                    )) : null}
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Projects;
