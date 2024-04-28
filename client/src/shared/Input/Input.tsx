import { InputProps } from "./Input.props";
import { useId, useState } from "react";

import styles from "./Input.module.css";

const Input: React.FC<InputProps> = ({ value, styleType }) => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(inputValue !== "");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const id = useId();
  const labelId = useId();

  const inputClassName = !!styleType ? styles[styleType] : styles.Input1;

  return (
    <div className={styles.Container}>
      <label
        htmlFor={id}
        id={labelId}
        className={`${styles.Label} ${
          isActive || inputValue !== "" ? styles.Active : ""
        }`}
      >
        {value || "Enter some text"}
      </label>
      <input
        id={id}
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
        className={`${inputClassName} 
                ${styles.Input} ${
                  isActive || inputValue !== "" ? styles.ActiveInput : ""
                }`}
      />
    </div>
  );
};

export default Input;
