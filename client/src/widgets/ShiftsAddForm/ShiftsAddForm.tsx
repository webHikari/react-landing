import { useState, useEffect } from "react";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
import Select from "react-select";
import Checkbox from "@shared/Checkbox/Checkbox.tsx";
import styles from "./ui/ShiftsAddForm.module.css";

import GetInstructions from "@features/Instructions/GetInstructions/GetInstructions";

import Option from "./model/Option.props.ts";
import Instruction from "./model/Instruction.props.ts";

const InstructionAddForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [instructionOptions, setInstructionOptions] = useState<Option[]>([]);
    const [selectedInstructionOption, setSelectedInstructionOption] =
        useState(null);
    const [selectedShiftBasementOption, setSelectedShiftBasementOption] =
        useState(null);
    const [shiftDayNight, setShiftDayNight] = useState(true);
    const [shiftDoneStatus, setShiftDoneStatus] = useState(false);

    const basementOptions = [
        { value: "Сборка ГП", label: "Сборка ГП" },
        { value: "Простой", label: "Простой" },
        { value: "Переборка", label: "Переборка" },
        { value: "Уборка", label: "Уборка" },
    ];

    const [shiftMaster, setShiftMaster] = useState("");

    const handleShiftMasterChange = (value: string) => {
        setShiftMaster(value);
    };

    const handleDateChange = (value: string) => {
        setDate(value);
    };

    const handleInstructionOptionChange = (option: any) => {
        setSelectedInstructionOption(option);
        console.log(selectedInstructionOption);
    };

    const handleBasementOptionChange = (option: any) => {
        setSelectedShiftBasementOption(option);
        console.log(selectedShiftBasementOption);
    };

    const handleShiftDoneClick = () => {
        setShiftDoneStatus(!shiftDoneStatus);
        console.log(shiftDoneStatus);
    };

    const handleShiftDayNightlick = () => {
        setShiftDayNight(!shiftDayNight);
        console.log(shiftDayNight);
    };

    useEffect(() => {
        const fetchRates = async () => {
            const instructionData = await GetInstructions();
            const instruction = instructionData.map(
                (instruction: Instruction) => ({
                    value: instruction.id,
                    label: instruction.instructionCount,
                })
            );
            setInstructionOptions(instruction);
        };
        fetchRates();
    }, []);

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        // CreateInstruction(
        //     { setIsLoading },
        //     date,
        //     instructionCount,
        //     instructionValue,
        //     selectedProjectOption,
        //     selectedProductOption,
        //     selectedRateOption,
        //     components
        // );
    };

    return (
        <div className={styles.FormContainer}>
            <h1>Добавить смену</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className={styles.Form}>
                    <div className={styles.Child}>
                        <Input
                            styleType="Input1"
                            placeholderValue="Мастер"
                            type="text"
                            value={shiftMaster}
                            onChange={handleShiftMasterChange}
                            required
                        />
                        <Input
                            styleType="Input1"
                            placeholderValue="Дата"
                            type="date"
                            value={date}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className={styles.Child}>
                        <Select
                            className={styles.Select}
                            defaultValue={instructionOptions[0]}
                            onChange={handleInstructionOptionChange}
                            options={instructionOptions}
                            placeholder="Выберите инструкцию"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 4,
                                colors: {
                                    ...theme.colors,
                                    // Background
                                    neutral0: "#1f1f1f",
                                    // Default border
                                    neutral20: "#3e3e3e",
                                    // Hover-select-color
                                    neutral30: "#34c471",
                                    // Picked color
                                    neutral80: "#34c471",
                                    // Placeholder color
                                    neutral50: "#3e3e3e",
                                    // Hover-option-color
                                    primary25: "#34c47180",
                                    // Focus-select-color
                                    primary: "#34c471",
                                },
                            })}
                        />
                    </div>
                    <div className={styles.Child}>
                        <Select
                            className={styles.Select}
                            onChange={handleBasementOptionChange}
                            options={basementOptions}
                            placeholder="Основание"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 4,
                                colors: {
                                    ...theme.colors,
                                    // Background
                                    neutral0: "#1f1f1f",
                                    // Default border
                                    neutral20: "#3e3e3e",
                                    // Hover-select-color
                                    neutral30: "#34c471",
                                    // Picked color
                                    neutral80: "#34c471",
                                    // Placeholder color
                                    neutral50: "#3e3e3e",
                                    // Hover-option-color
                                    primary25: "#34c47180",
                                    // Focus-select-color
                                    primary: "#34c471",
                                },
                            })}
                        />
                    </div>
                    <div className={styles.Child}>
                        <Checkbox
                            value="День/Ночь"
                            onClick={handleShiftDayNightlick}
                            checked={shiftDayNight}
                        />
                        <Checkbox
                            value="Проведена"
                            onClick={handleShiftDoneClick}
                            checked={shiftDoneStatus}
                        />
                    </div>
                    <Button
                        styleType="Button1"
                        onClick={(e) => handleSubmit(e)}
                        value="Создать инструкцию"
                    />
                </div>
            )}
        </div>
    );
};

export default InstructionAddForm;
