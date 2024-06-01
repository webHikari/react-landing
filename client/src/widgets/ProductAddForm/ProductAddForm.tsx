import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
import Textarea from "@shared/Textarea/Textarea";

import styles from "./ui/ProductAddForm.module.css";
import CreateProduct from "@features/Products/CreateProduct/CreateProduct";

const RatesForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [productCount, setProductCount] = useState("");
    const [productName, setProductName] = useState("");

    const navigate = useNavigate();

    const handleProductCountChange = (value: string) => {
        setProductCount(value);
    };

    const handleProductNameChange = (value: string) => {
        setProductName(value);
    };

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        CreateProduct({ setIsLoading }, productCount, productName);
        navigate("/products");
    };

    return (
        <div className={styles.FormContainer}>
            <h1>Создать новый артикул</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className={styles.Form}>
                    <div className={styles.Child}>
                        <Input
                            styleType="Input1"
                            placeholderValue="Артикул"
                            type="text"
                            value={productCount}
                            onChange={handleProductCountChange}
                            required
                        />
                    </div>
                    <div className={styles.Child}>
                        <Textarea
                            placeholderValue="Развернутое название"
                            value={productName}
                            onChange={handleProductNameChange}
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
