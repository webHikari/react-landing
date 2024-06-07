import { GroupBase } from "react-select";
export default interface Option {
    value: string;
    label: string;
    options?: readonly (string | GroupBase<string>)[];
}
