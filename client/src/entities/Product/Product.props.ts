export interface ProductProps {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    productCount: string;
    productName: string;
    productId: number;
}