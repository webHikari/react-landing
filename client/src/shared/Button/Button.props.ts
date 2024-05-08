export interface ButtonProps {
    value?: string;
    styleType: "Button1" | "Button2" | "Button3";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode
}
