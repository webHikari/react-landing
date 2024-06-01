import { useNavigate } from "react-router-dom";

import { ProductProps } from "./Product.props.ts";
import styles from "./Product.module.css";

const Product = ({ productId, productCount, productName, onClick }: ProductProps) => {
    const navigate = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        onClick?.(event);
        navigate("/products/view/" + productId);
    };

    return (
        <div className={styles.Project} onClick={handleClick}>
            <h4>Артикул: {productCount}</h4>
            <p>Название: {productName}</p>
        </div>
    );
};

export default Product;
