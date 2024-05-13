import { useNavigate } from "react-router-dom";

import { ProjectProps } from "./Project.props.ts";
import styles from "./Project.module.css";

const Project = ({ onClick }: ProjectProps) => {
    const navigate = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        onClick?.(event);
        navigate("/projects/view/projectid12");
    };

    return (
        <div className={styles.Project} onClick={handleClick}>
            <h4>Проект #321</h4>
            <p>Название: Скрепыши для Магниты</p>
            <p>Клиент: ООО «Великолукский Мясокомбинат»</p>
            <p>Объём: 6 000 000 шт</p>
            <p>Собрано: 712 500 шт</p>
            <p>Отгружено: 0</p>
            <p>Остаток: 6 000 000 шт</p>
        </div>
    );
};

export default Project;
