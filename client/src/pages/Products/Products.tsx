import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Products.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";


interface ProductsProps {
    setAuth: SetAuthFunction;
    name: string;
}

const Products = ({ setAuth, name }: ProductsProps) => {

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/instructions/create">
                        <Button styleType="Button3" value="Создать проект">
                            <FaPlus />
                            Создать артикул
                        </Button>
                    </Link>
                </div>
                <div className={styles.ProductsInfo}>

                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Products;
