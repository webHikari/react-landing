import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/ProjectsEdit.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import Button from "@shared/Button/Button";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ProjectsEditForm from "@widgets/ProjectsEditForm/ProjectsEditForm";

interface ProjectsEditProps {
    setAuth: SetAuthFunction;
    name: string;
}

const ProjectsEdit = ({ setAuth, name }: ProjectsEditProps) => {
    let { _projectId } = useParams();
    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to={`/projects/view/${_projectId}`}>
                        <Button styleType="Button3">
                            <FaArrowLeft />
                            Вернуться
                        </Button>
                    </Link>
                </div>
                <div className={styles.FormContainer}>
                    <ProjectsEditForm />
                </div>
            </div>
        </div>
    );
};

export default ProjectsEdit;
