import { InputProps } from "./Input.props";

import styles from "./Input.module.css";

const Input: React.FC<InputProps> = ({ value, styleType }) => {
    const inputClassName = styleType ? styles[styleType] : styles.Input1;
    const inputPlaceholder = value ? value : "Enter some text";

    return(
        <input className={inputClassName} placeholder={inputPlaceholder}></input>
    );
};

export default Input;
