import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/InstructionsView.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";
import Button from "@shared/Button/Button";

import { Link } from "react-router-dom";
import { FaArrowLeft, FaEdit } from "react-icons/fa";

import GetOneInstruction from "@features/Instructions/GetOneInstruction/GetOneInstruction";

interface InstructionsViewProps {
    setAuth: SetAuthFunction;
    name: string;
}

interface Instruction {
    id: number;
    instructionDate: string;
    instructionCount: string;
    instructionProductsValue: number;
    instructionProject: string;
    projectName: string;
    instructionProduct: string;
    productName: string;
    instructionBet: number;
    betValue: number;
}

interface Component {
    componentName: string;
    componentValue: number;
}

const InstructionsView = ({ setAuth, name }: InstructionsViewProps) => {
    let { instructionId } = useParams();
    const [instruction, setInstruction] = useState<Instruction>();
    const [components, setComponents] = useState<Component[]>([]);

    useEffect(() => {
        const fetchProject = async () => {
            const instructionData = await GetOneInstruction(
                instructionId || ""
            );
            setInstruction(instructionData.instruction);
            setComponents(instructionData.components);
            console.log(instructionData);
        };
        fetchProject();
    }, []);

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <Link to="/instructions/">
                        <Button styleType="Button3">
                            <FaArrowLeft />
                            Вернуться
                        </Button>
                    </Link>
                    <Link to={`/instructions/edit/${instruction?.id}`}>
                        <Button styleType="Button3">
                            <FaEdit />
                            Редактировать
                        </Button>
                    </Link>
                </div>
                <div className={styles.ProjectInfo}>
                    {instruction ? (
                        <div className={styles.Project}>
                            <h3 className={styles.ProjectItemTitle}>
                                Инструкция: {instruction.instructionCount}
                            </h3>
                            <div className={styles.ProjectClient}>
                                <p className={styles.ProjectItem}>Клиент: </p>
                                <Link
                                    to={`/projects/view/${instruction?.instructionProject}`}
                                >
                                    {instruction?.projectName}
                                </Link>
                            </div>
                            <div className={styles.InstructionChild}>
                                Кол-во ГП:{" "}
                                {instruction.instructionProductsValue}
                            </div>
                        </div>
                    ) : null}
                    {components
                        ? components.map((component) => {
                              return (
                                  <>
                                      {component.componentName}
                                      {component.componentValue}
                                  </>
                              );
                          })
                        : null}
                </div>
            </div>
        </div>
    );
};

export default InstructionsView;
