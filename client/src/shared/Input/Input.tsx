import React, { useState, useId } from "react";
import styles from "./Input.module.css";

import { InputProps } from "./Input.props";

const Input: React.FC<InputProps> = ({
    placeholderValue,
    type = "text",
    value,
    onChange,
    required,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(value !== "");
    };

    const id = useId();

    return (
        <div className={styles.Container}>
            <label
                className={`${styles.Label} ${
                    isFocused || value !== "" ? styles.Active : ""
                }`}
                htmlFor={id}
            >
                {placeholderValue}
            </label>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                id={id}
                className={`${styles.Input} ${
                    isFocused || value !== "" ? styles.ActiveInput : ""
                }`}
                {...(required && { required: true })}
            />
        </div>
    );
};

export default Input;
