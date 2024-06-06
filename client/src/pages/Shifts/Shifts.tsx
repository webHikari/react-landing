import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Shifts.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";

import { useState, useEffect } from "react";
import GetShifts from "@features/Shifts/GetShifts/GetShifts";
import Shift from "@entities/Shift/Shift";

interface ShiftsProps {
    setAuth: SetAuthFunction;
    name: string;
}

interface Shift {
    shiftDate: string;
    shiftMaster: string;
    shiftInstruction: number;
    shiftBasement: string;
    shiftDoneStatus: boolean;
    shiftDayNight: boolean;
    id: number;
}

const Shifts = ({ setAuth, name }: ShiftsProps) => {
    const [shifts, setShifts] = useState<Shift[]>([]);

    useEffect(() => {
        const fetchRates = async () => {
            const shiftsData = await GetShifts();
            setShifts(shiftsData);
        };
        fetchRates();
    }, []);

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/Shifts/create">
                        <Button styleType="Button3" value="Создать смену">
                            <FaPlus />
                            Создать смену
                        </Button>
                    </Link>
                </div>
                <div className={styles.ShiftsInfo}>
                    {shifts
                        ? shifts.map((shift) => (
                              <Shift
                                  shiftId={shift.id}
                                  shiftDate={shift.shiftDate}
                                  shiftMaster={shift.shiftMaster}
                                  shiftInstruction={shift.shiftInstruction}
                                  shiftBasement={shift.shiftBasement}
                                  shiftDayNight={shift.shiftDayNight}
                                  shiftDoneStatus={shift.shiftDoneStatus}
                              />
                          ))
                        : null}
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Shifts;
