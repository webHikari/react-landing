import { useNavigate } from "react-router-dom";

import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Projects.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";

import Project from "@entities/Project/Project"

interface ProjectsProps {
    setAuth: SetAuthFunction;
    name: string;
}

const Projects = ({ setAuth, name }: ProjectsProps) => {
    
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
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Projects;
