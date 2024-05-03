export interface InputProps {
    required: boolean
    styleType: string
    placeholderValue: string;
    type?: "password" | "text" | "email";
    value?: string;
    onChange?: (value: string) => void;
}