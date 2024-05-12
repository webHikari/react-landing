interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps {
    labelText?: string;
    options?: SelectOption[];
    value?: string;
    onChange: (value: string) => void;
}
