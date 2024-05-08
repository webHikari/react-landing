import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Projects.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";

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
                    <div className={styles.Project}>
                        <h4>Проект #321</h4>
                        <p>Название: Скрепыши для Магниты</p>
                        <p>Клиент: ООО «Великолукский Мясокомбинат»</p>
                        <p>Объём: 6 000 000 шт</p>
                        <p>Собрано: 712 500 шт</p>
                        <p>Отгружено: 0</p>
                        <p>Остаток: 6 000 000 шт</p>
                    </div>
                    <div className={styles.Project}>
                        <h4>Проект #321</h4>
                        <p>Название: Скрепыши для Магниты</p>
                        <p>Клиент: ООО «Великолукский Мясокомбинат»</p>
                        <p>Объём: 6 000 000 шт</p>
                        <p>Собрано: 712 500 шт</p>
                        <p>Отгружено: 0</p>
                        <p>Остаток: 6 000 000 шт</p>
                    </div>
                    <div className={styles.Project}>
                        <h4>Проект #321</h4>
                        <p>Название: Скрепыши для Магниты</p>
                        <p>Клиент: ООО «Великолукский Мясокомбинат»</p>
                        <p>Объём: 6 000 000 шт</p>
                        <p>Собрано: 712 500 шт</p>
                        <p>Отгружено: 0</p>
                        <p>Остаток: 6 000 000 шт</p>
                    </div>
                    <div className={styles.Project}>
                        <h4>Проект #321</h4>
                        <p>Название: Скрепыши для Магниты</p>
                        <p>Клиент: ООО «Великолукский Мясокомбинат»</p>
                        <p>Объём: 6 000 000 шт</p>
                        <p>Собрано: 712 500 шт</p>
                        <p>Отгружено: 0</p>
                        <p>Остаток: 6 000 000 шт</p>
                    </div>
                    <div className={styles.Project}>
                        <h4>Проект #321</h4>
                        <p>Название: Скрепыши для Магниты</p>
                        <p>Клиент: ООО «Великолукский Мясокомбинат»</p>
                        <p>Объём: 6 000 000 шт</p>
                        <p>Собрано: 712 500 шт</p>
                        <p>Отгружено: 0</p>
                        <p>Остаток: 6 000 000 шт</p>
                    </div>
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
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Projects;
