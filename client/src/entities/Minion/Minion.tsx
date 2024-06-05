import { useNavigate } from "react-router-dom";

import { MinionProps } from "./Minion.props.ts";
import styles from "./Product.module.css";

const Minion = ({
    minionId,
    minionName,
    minionSurname,
    minionPatronymic,
    minionPhone,
    minionWorkStatus,
    minionAgent,
    minionRate,
    minionDayNightStatus,
    minionComment,
    onClick,
}: MinionProps) => {
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        onClick?.(event);
        navigate("/minions/view/" + minionId);
    };

    console.log(minionComment);

    return (
        <div className={styles.Project} onClick={handleClick}>
            <h4>Вахтер {minionId}</h4>
            <p>Имя: {minionName}</p>
            <p>Фамилия: {minionSurname}</p>
            <p>Отчество: {minionPatronymic}</p>
            <p>Телефон: {minionPhone}</p>
            <p>День/Ночь: {minionDayNightStatus}</p>
            <p>Статус: {minionWorkStatus}</p>
            <p>Ставка: {minionRate}</p>
            <p>Рекрутер: {minionAgent}</p>
        </div>
    );
};

export default Minion;
