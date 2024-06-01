import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/ProductsCreate.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";

import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";
import { FaArrowLeft } from "react-icons/fa";

import ProductAddForm from "@widgets/ProductAddForm/ProductAddForm"

interface ProductsCreateProps {
    setAuth: SetAuthFunction;
    name: string;
}

const ProductsCreate = ({ setAuth, name }: ProductsCreateProps) => {
    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/products">
                        <Button styleType="Button3">
                            <FaArrowLeft />
                            Вернуться
                        </Button>
                    </Link>
                </div>
                <div className={styles.FormContainer}>
                    <ProductAddForm />
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default ProductsCreate;
