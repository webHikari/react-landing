import { useState, useEffect } from "react";

import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/ProjectsView.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import Button from "@shared/Button/Button";

import { Link } from "react-router-dom";

import { FaArrowLeft, FaEdit } from "react-icons/fa";

import { useParams } from "react-router-dom";
import Instruction from "@entities/Instruction/Instruction";
import GetOneProject from "@features/Projects/GetOneProject/GetOneProject";

interface ProjectsCreateProps {
    setAuth: SetAuthFunction;
    name: string;
}

interface Instruction {
    id: number;
    instructionDate: string;
    instructionCount: string;
    instructionProductsValue: number;
    instructionProject: string;
    projectName: string;
    instructionProduct: string;
    productName: string;
    instructionBet: number;
    betValue: number;
}
interface ProjectData {
    id: number;
    projectName: string;
    clientName: string;
    projectCount: string;
    projectClient: number;
    instructions: Instruction[];
}

const ProjectsView = ({ setAuth, name }: ProjectsCreateProps) => {
    let { projectId } = useParams();
    const [project, setProject] = useState<ProjectData>();
    const [instructions, setInstructions] = useState<Instruction[]>([]);

    useEffect(() => {
        const fetchProject = async () => {
            const projectsData = await GetOneProject(projectId);
            setProject(projectsData.project);
            setInstructions(projectsData.instructions);
            console.log(project);
        };
        fetchProject();
    }, []);

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/projects">
                        <Button styleType="Button3">
                            <FaArrowLeft />
                            Вернуться
                        </Button>
                    </Link>
                    <Link to={`/projects/edit/${projectId}`}>
                        <Button styleType="Button3">
                            <FaEdit />
                            Редактировать
                        </Button>
                    </Link>
                </div>
                <div className={styles.ProjectInfo}>
                    {project ? (
                        <div className={styles.Project}>
                            <h3 className={styles.ProjectItemTitle}>
                                Проект: {project.projectCount}
                            </h3>
                            <p className={styles.ProjectItem}>
                                Название: {project.projectName}
                            </p>
                            <div className={styles.ProjectClient}>
                                <p className={styles.ProjectItem}>Клиент: </p>
                                <Link to={`/clients/edit/${project.projectClient}`}>
                                    {project.clientName}
                                </Link>
                            </div>
                        </div>
                    ) : null}
                    {instructions
                        ? instructions.map((instruction) => (
                              <Instruction
                                  id={instruction.id}
                                  instructionDate={instruction.instructionDate}
                                  instructionCount={
                                      instruction.instructionCount
                                  }
                                  instructionProduct={instruction.productName}
                                  //   instructionProject={
                                  //       instruction.projectName
                                  //   }
                                  instructionBet={instruction.betValue}
                                  instructionProductsValue={
                                      instruction.instructionProductsValue
                                  }
                              />
                          ))
                        : null}
                </div>
            </div>
        </div>
    );
};

export default ProjectsView;
