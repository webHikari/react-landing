import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Products.module.css";

import { useState, useEffect } from "react";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";

import GetProducts from "@features/Products/GetProducts/GetProducts";
import Product from "@entities/Product/Product"

interface ProductsProps {
    setAuth: SetAuthFunction;
    name: string;
}

interface Product {
    id: number,
    productCount: string,
    productName: string
}

const Products = ({ setAuth, name }: ProductsProps) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await GetProducts();
            setProducts(productsData);
        };
        fetchProducts();
    }, []);

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/products/create">
                        <Button styleType="Button3" value="Создать проект">
                            <FaPlus />
                            Создать артикул
                        </Button>
                    </Link>
                </div>
                <div className={styles.ProductsInfo}>
                    {products ? products.map((product) => (
                            <Product 
                                productId={product.id}
                                productCount={product.productCount}
                                productName={product.productName}
                            />
                        ))
                    : null}
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Products;
