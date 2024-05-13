export interface ClientProps {
    clientName: string;
    clientAddress: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    clientId: number;
}
