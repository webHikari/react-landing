export interface RateProps {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    rateValue: number;
    rateStandart: number;
    rateComment: string;
    rateId: number;
}