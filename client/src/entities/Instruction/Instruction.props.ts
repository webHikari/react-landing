
export interface InstructionProps {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    id: number;
    instructionDate: string;
    instructionCount: string;
    instructionProductsValue: number;
    instructionProduct: string;
    instructionProject?: string;
    instructionBet: number;
}