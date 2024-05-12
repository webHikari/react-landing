import { useState } from "react";

import { ButtonProps } from "./Checkbox.props";
import styles from "./Checkbox.module.css";

const Button = ({ value, onClick }: ButtonProps) => {
    const [active, setActive] = useState(false);
    const buttonText = value ? value : "Submit";

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setActive(!active);
        onClick?.(event);
    };

    return (
        <button
            onClick={handleClick}
            className={active ? styles.Active : styles.Disabled}
        >
            {buttonText}
        </button>
    );
};

export default Button;
