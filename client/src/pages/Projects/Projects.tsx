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
                    <h4>Проект #321</h4>
                    <p>Название: Скрепыши для Магниты</p>
                    <p>Клиент: ООО «Великолукский Мясокомбинат»</p>
                    <p>Объём: 6 000 000 шт</p>
                    <p>Собрано: 712 500 шт</p>
                    <p>Отгружено: 0</p>
                    <p>Остаток: 6 000 000 шт</p>
                </div>
            </div>
            {/* <div className={styles.Secondary}></div> */}
        </div>
    );
}

export default Projects