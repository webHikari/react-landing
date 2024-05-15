import { useState } from "react";
import styles from "./Textarea.module.css";

import { TextareaProps } from "./Textarea.props";

const Textarea = ({ placeholderValue, value, onChange }: TextareaProps) => {
    const [isFocused, setIsFocused] = useState<Boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(value !== "");
    };


    return (
        <div className={styles.Container}>
            <textarea
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholderValue}
                className={`${styles.Textarea} ${
                    isFocused || value !== "" ? styles.ActiveTextarea : ""
                }`}
            />
        </div>
    );
};

export default Textarea;
