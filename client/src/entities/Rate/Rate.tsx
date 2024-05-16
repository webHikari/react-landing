import { useNavigate } from "react-router-dom";

import { RateProps } from "./Rate.props.ts";
import styles from "./Rate.module.css";

const Rate = ({ rateId, rateValue, rateStandart, rateComment, onClick }: RateProps) => {
    const navigate = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        onClick?.(event);
        navigate("/rates/view/" + rateId);
    };

    return (
        <div className={styles.Rate} onClick={handleClick}>
            <h4>Ставка {rateValue}</h4>
            <p>Норма: {rateStandart}</p>
            <p>Комментарий: {rateComment}</p>
        </div>
    );
};

export default Rate;
