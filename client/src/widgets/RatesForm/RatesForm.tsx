import { useState } from "react";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
import Textarea from "@shared/Textarea/Textarea";

import styles from "./ui/RatesForm.module.css";

const RatesForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [ratesValue, setRatesValue] = useState("");
    const [ratesStandart, setRatesStandart] = useState("");
    const [comment, setComment] = useState("");

    const handleRatesValueChange = (value: string) => {
        setRatesValue(value);
    };

    const handleRatesStandartChange = (value: string) => {
        setRatesStandart(value);
    };

    const handleCommentChange = (value: string) => {
        setComment(value);
    };

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
    };

    return (
        <div className={styles.FormContainer}>
            <h1>Создать новый проект</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className={styles.Form}>
                    <div className={styles.Child}>
                        <Input
                            styleType="Input1"
                            placeholderValue="Ставка"
                            type="text"
                            value={ratesValue}
                            onChange={handleRatesValueChange}
                            required
                        />
                        <Input
                            styleType="Input1"
                            placeholderValue="Номер"
                            type="text"
                            value={ratesStandart}
                            onChange={handleRatesStandartChange}
                            required
                        />
                    </div>
                    <div className={styles.Child}>
                        <Textarea
                            placeholderValue="Комментарий"
                            value={comment}
                            onChange={handleCommentChange}
                        />
                    </div>
                    <Button
                        styleType="Button1"
                        onClick={(e) => handleSubmit(e)}
                    />
                </div>
            )}
        </div>
    );
};

export default RatesForm;
