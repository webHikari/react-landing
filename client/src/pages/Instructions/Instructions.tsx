import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Instructions.module.css";

import { useState, useEffect } from "react";

import { SetAuthFunction } from "@app/providers/model/Provider.props";

import GetInstructions from "@features/Instructions/GetInstructions/GetInstructions";
import Instruction from "@entities/Instruction/Instruction";
import InstructionsTable from "@widgets/InstructionsTable/InstructionsTable";

interface InstructionsProps {
    setAuth: SetAuthFunction;
    name: string;
}

interface Instruction {
    id: number,
    instructionDate: string,
    instructionCount: string,
    instructionProductsValue: number,
    instructionProject: number,
    projectName: string,
    instructionProduct: number,
    productName: string,
    instructionBet: number,
    betValue: number 
}

const Instructions = ({ setAuth, name }: InstructionsProps) => {
    const [instructions, setInstructions] = useState<Instruction[]>([]);

    useEffect(() => {
        const fetchInstructions = async () => {
            const instructionsData = await GetInstructions();
            setInstructions(instructionsData);
            console.log(instructionsData);
        };
        fetchInstructions();
    }, []);

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                    <InstructionsTable instructions={instructions} />
            </div>
        </div>
    );
};

export default Instructions;
