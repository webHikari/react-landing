export interface MinionProps {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    minionId: number;
    minionName: string;
    minionSurname: string;
    minionPatronymic: string;
    minionPhone: string;
    minionWorkStatus: string;
    minionAgent: string;
    minionRate: string;
    minionDayNightStatus: boolean;
    minionComment: string;
}
