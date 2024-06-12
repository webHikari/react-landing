export interface InputProps {
    placeholderValue: string;
    type?: "password" | "text" | "email" | "date";
    value?: string;
    onChange?: (value: string) => void;
    required?: boolean;
    styleType: "Input1" | "Input2" | "Input3";
}
