import { useNavigate } from "react-router-dom";

import { ShiftProps } from "./Shift.props.ts";
import styles from "./Shift.module.css";

const Shift = ({
    shiftId,
    shiftDate,
    shiftMaster,
    shiftInstruction,
    shiftBasement,
    shiftDayNight,
    shiftDoneStatus,
    onClick,
}: ShiftProps) => {
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        onClick?.(event);
        navigate("/shifts/view/" + shiftId);
    };

    return (
        <div className={styles.Shift} onClick={handleClick}>
            <h4>Дата {shiftDate}</h4>
            <p>Мастер: {shiftMaster}</p>
            <p></p>
            <p>Инструкция: {shiftInstruction}</p>
            <p>Основание: {shiftBasement}</p>
            <p>{shiftDoneStatus ? "Проведена" : "Не проведена"}</p>
            <p>{shiftDayNight ? "День" : "Ночь"}</p>
        </div>
    );
};

export default Shift;
