import styles from "./Checkbox.module.css";
import { CheckboxProps } from "./Checkbox.props";

const Checkbox = ({ value, checked, onClick }: CheckboxProps) => {
    const buttonText = value ? value : "Submit";

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
    };

    return (
        <button
            onClick={handleClick}
            className={checked ? styles.Active : styles.Disabled}
        >
            {buttonText}
        </button>
    );
};

export default Checkbox;
