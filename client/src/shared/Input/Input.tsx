import React, { useState, useId, useEffect } from "react";
import styles from "./Input.module.css";

import { InputProps } from "./Input.props";

const Input = ({
    placeholderValue,
    type = "text",
    value,
    onChange,
    required = false,
    styleType,
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(type === "date");
    const [date, setDate] = useState(type === "date" ? new Date() : null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === "date") {
            setDate(new Date(e.target.value));
            onChange?.(e.target.value);
        } else {
            onChange?.(e.target.value);
        }
    };
    
    useEffect(() => {
        if (type === "date") {
            setDate(value ? new Date(value) : null);
        }
    }, [value, type]);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(type === "date" || value !== "");
    };

    const id = useId();

    return (
        <div
            className={`${styles.Container} ${styles[`Container${styleType}`]}`}
        >
            <label
                className={`${styles.Label} ${
                    isFocused || value !== "" ? styles.Active : ""
                } ${styles[`Label${styleType}`]}`}
                htmlFor={id}
            >
                {placeholderValue}
            </label>
            <input
                type={type}
                value={
                    type === "date" ? date?.toISOString().slice(0, 10) : value
                }
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                id={id}
                className={`${styles.Input} ${
                    isFocused || value !== "" ? styles.ActiveInput : ""
                } ${styles[`Input${styleType}`]}`}
                {...(required && { required: true })}
            />
        </div>
    );
};

export default Input;
