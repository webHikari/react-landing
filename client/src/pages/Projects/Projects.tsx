import { useState, useEffect } from "react";

import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Projects.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";

import Project from "@entities/Project/Project";
import GetProjects from "@features/Projects/GetProjects/GetProjects";
import ProjectsTable from "@widgets/ProjectsTable/ProjectsTable";

interface ProjectsProps {
    setAuth: SetAuthFunction;
    name: string;
}

interface Project {
    projectName: string;
    clientName: string;
    projectCount: string;
    id: number;
    projectClient: number;
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
                <ProjectsTable projects={projects} />
            </div>
        </div>
    );
};

export default Projects;
