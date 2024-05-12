import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/ProjectsView.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import Button from "@shared/Button/Button";

import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import { useParams } from "react-router-dom";

interface ProjectsCreateProps {
    setAuth: SetAuthFunction;
    name: string;
}

const Dashboard = ({ setAuth, name }: ProjectsCreateProps) => {
    let { projectId } = useParams();

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
                <div className={styles.ProjectInfo}>{projectId}</div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Dashboard;
