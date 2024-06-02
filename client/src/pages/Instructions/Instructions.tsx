import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Instructions.module.css";

import { useState, useEffect } from "react";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@shared/Button/Button";

import GetInstructions from "@features/Instructions/GetInstructions/GetInstructions";
import Instruction from "@entities/Instruction/Instruction";

interface InstructionsProps {
    setAuth: SetAuthFunction;
    name: string;
}

interface Instruction {
    id: number,
    instructionDate: string,
    instructionCount: string,
    instructionProductsValue: number,
    instructionProject: string,
    instructionProduct: string,
    instructionBet: number
}

const Instructions = ({ setAuth, name }: InstructionsProps) => {
    const [instructions, setInstructions] = useState<Instruction[]>([])

    useEffect(() => {
        const fetchInstructions = async () => {
            const productsData = await GetInstructions();
            setInstructions(productsData);
        };
        fetchInstructions();
    }, []);

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/instructions/create">
                        <Button styleType="Button3" value="Создать проект">
                            <FaPlus />
                            Создать инструкцию
                        </Button>
                    </Link>
                </div>
                <div className={styles.InstructionsInfo}>
                    {instructions ? instructions.map((instruction) => (
                        <Instruction
                            id={instruction.id}
                            instructionDate={instruction.instructionDate}
                            instructionCount={instruction.instructionCount}
                            instructionProduct={instruction.instructionProduct}
                            instructionProject={instruction.instructionProject}
                            instructionBet={instruction.instructionBet}
                            instructionProductsValue={instruction.instructionProductsValue}
                        />
                    ))
                        : null}
                </div>
            </div>
            <div className={styles.Secondary}></div>
        </div>
    );
};

export default Instructions;
