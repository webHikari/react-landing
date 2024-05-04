import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Projects.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";

interface ProjectsProps {
    setAuth: SetAuthFunction
    name: string
}

const Projects: React.FC<ProjectsProps> = ({ setAuth, name }) => {
    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Project}>
                </div>
            </div>
            {/* <div className={styles.Secondary}></div> */}
        </div>
    );
}

export default Projects