import { ButtonProps } from "./Button.props";

import styles from "./Button.module.css";

const Button: React.FC<ButtonProps> = ({ value, styleType, callback }) => {
    const buttonClassName = styleType ? styles[styleType] : styles.Button1;
    const buttonText = value ? value : "Submit";
    const buttonFunc = callback ? callback : () => {console.log("Clicked!")}

    return <button onClick={() => buttonFunc()} className={buttonClassName}>{buttonText}</button>;
};

export default Button;
