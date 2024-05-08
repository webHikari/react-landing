import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/ProjectsCreate.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";

import ProjectsForm from "@widgets/ProjectsForm/ProjectsForm";

import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";
import { FaArrowLeft } from "react-icons/fa";

interface ProjectsCreateProps {
    setAuth: SetAuthFunction;
    name: string;
}

const Dashboard = ({ setAuth, name }: ProjectsCreateProps) => {
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
                </div>
                <div className={styles.FormContainer}>
                    <ProjectsForm setAuth={setAuth} />
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Dashboard;
