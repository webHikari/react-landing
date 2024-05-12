import { ButtonProps } from "./Checkbox.props";
import styles from "./Button.module.css";

const Button = ({ value, onClick }: ButtonProps) => {
    const buttonText = value ? value : "Submit";

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
    };

    return (
        <button onClick={handleClick} className={styles.Checkbox}>
            {buttonText}
        </button>
    );
};

export default Button;
