export interface InputProps {
    styleType: string
    placeholderValue: string;
    type?: "password" | "text" | "email";
    value?: string;
    onChange?: (value: string) => void;
}
