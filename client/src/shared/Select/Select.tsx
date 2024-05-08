import styles from "./Select.module.css";
import { useState } from "react";
import { SelectProps } from "./Select.props";

const Select = ({ options, labelText }: SelectProps) => {
    const [isActive, setIsActive] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>("");

    const handleOptionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
        setIsActive(true);
    };

    const handleBlur = () => {
        if (!selectedValue) {
            setIsActive(false);
        }
    };

    return (
        <div className={styles.Container}>
            <select
                className={`${styles.Select} ${
                    isActive ? styles.ActiveSelect : ""
                }`}
                onChange={handleOptionSelect}
                value={selectedValue}
                onBlur={handleBlur}
            >
                <option value="">{labelText}</option>
                {options &&
                    options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default Select;
