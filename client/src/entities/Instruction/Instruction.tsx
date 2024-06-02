import { useNavigate } from "react-router-dom";

import { InstructionProps } from "./Instruction.props.ts";
import styles from "./Instruction.module.css";

const Instruction = ({ id, instructionDate, instructionCount, instructionProductsValue, instructionProject, instructionProduct, instructionBet, onClick }: InstructionProps) => {
    const navigate = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        onClick?.(event);
        navigate("/instructions/view/" + id);
    };

    return (
        <div className={styles.Instruction} onClick={handleClick}>
            <h4>Инструкция: {instructionCount}</h4>
            <p>Дата: {instructionDate}</p>
            <p>Количество ГП: {instructionProductsValue}</p>
            <p>Проект: {instructionProject}</p>
            <p>Артикул ГП: {instructionProduct}</p>
            <p>Ставка: {instructionBet}</p>
        </div>
    );
};

export default Instruction;
