export interface ShiftProps {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    shiftDate: string;
    shiftMaster: string;
    shiftInstruction: number;
    shiftBasement: string;
    shiftDoneStatus: boolean;
    shiftDayNight: boolean;
    shiftId: number;
}