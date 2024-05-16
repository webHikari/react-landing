import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { useState, useEffect } from "react";
import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Rates.module.css";

import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";

import Rate from "@entities/Rate/Rate";

import GetRates from "@features/Rates/GetRates/GetRates";

interface RatesProps {
    setAuth: SetAuthFunction;
    name: string;
}

interface Rate {
    id: number;
    rateValue: string;
    rateStandart: number;
    rateComment: string;
}

const Rates = ({ setAuth, name }: RatesProps) => {
    const [rates, setRates] = useState<Rate[]>([]);

    useEffect(() => {
        const fetchRates = async () => {
            const ratesData = await GetRates();
            setRates(ratesData);
        };
        fetchRates();
    }, []);

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/rates/create">
                        <Button styleType="Button3" value="Создать проект">
                            <FaPlus />
                            Создать ставку
                        </Button>
                    </Link>
                </div>
                <div className={styles.RatesInfo}>
                    {rates.map((rate) => (
                        <Rate
                            rateValue={rate.rateValue}
                            rateStandart={rate.rateStandart}
                            rateId={rate.id}
                            rateComment={
                                rate.rateComment ? rate.rateComment : undefined
                            }
                        />
                    ))}
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Rates;
