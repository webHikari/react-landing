import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Minions.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";

import { useState, useEffect } from "react";
import GetMinions from "@features/Minions/GetMinions/GetMinions";
import Minion from "@entities/Minion/Minion";

interface MinionsProps {
    setAuth: SetAuthFunction;
    name: string;
}

interface Minion {
    id: number;
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

const Minions = ({ setAuth, name }: MinionsProps) => {
    const [minions, setMinions] = useState<Minion[]>([]);

    useEffect(() => {
        const fetchMinions = async () => {
            const minionsData = await GetMinions();
            setMinions(minionsData);
        };
        fetchMinions();
    }, []);

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/minions/create">
                        <Button styleType="Button3" value="Создать проект">
                            <FaPlus />
                            Создать вахтера
                        </Button>
                    </Link>
                </div>
                <div className={styles.MinionsInfo}>
                    {minions
                        ? minions.map((minion) => (
                              <Minion
                                  key={minion.id}
                                  minionId={minion.id}
                                  minionName={minion.minionName}
                                  minionSurname={minion.minionSurname}
                                  minionPatronymic={minion.minionPatronymic}
                                  minionPhone={minion.minionPhone}
                                  minionWorkStatus={minion.minionWorkStatus}
                                  minionAgent={minion.minionAgent}
                                  minionRate={minion.minionRate}
                                  minionDayNightStatus={
                                      minion.minionDayNightStatus
                                  }
                                  minionComment={minion.minionComment}
                              />
                          ))
                        : null}
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Minions;
