export interface RateProps {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    rateValue: string;
    rateStandart: number;
    rateComment?: string;
    rateId: number;
}