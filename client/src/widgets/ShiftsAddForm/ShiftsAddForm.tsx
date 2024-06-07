import { useState, useEffect } from "react";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
import Select from "react-select";
import Checkbox from "@shared/Checkbox/Checkbox.tsx";
import styles from "./ui/ShiftsAddForm.module.css";

import GetInstructions from "@features/Instructions/GetInstructions/GetInstructions";
import GetMinions from "@features/Minions/GetMinions/GetMinions.ts";
import GetRates from "@features/Rates/GetRates/GetRates.ts";
import CreateShift from "@features/Shifts/CreateShift/CreateShift.ts";

import Option from "./model/Option.props.ts";
import Instruction from "./model/Instruction.props.ts";
import Minion from "./model/Minion.props.ts";
import Rate from "./model/Rate.props.ts";

interface ComponentItem {
    componentValue: string;
    componentInstruction: Option;
    componentMinion: Option;
    componentRate: Option;
    componentStartTime: Option;
    componentEndTime: Option;
    componentDinner: Option;
    componentPayment: Option;
}

const ShiftsAddForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [instructionOptions, setInstructionOptions] = useState<Option[]>([]);
    const [selectedInstructionOption, setSelectedInstructionOption] =
        useState<Option>();
    const [selectedShiftBasementOption, setSelectedShiftBasementOption] =
        useState<Option>();
    const [minionOptions, setMinionOptions] = useState<Option[]>([]);
    const [rateOptions, setRateOptions] = useState<Option[]>([]);

    const [shiftDayNight, setShiftDayNight] = useState(true);
    const [shiftDoneStatus, setShiftDoneStatus] = useState(false);

    const [components, setComponents] = useState<ComponentItem[]>([
        {
            componentValue: "",
            componentInstruction: { value: "", label: "" },
            componentMinion: { value: "", label: "" },
            componentRate: { value: "", label: "" },
            componentStartTime: { value: "", label: "" },
            componentEndTime: { value: "", label: "" },
            componentDinner: { value: "", label: "" },
            componentPayment: { value: "", label: "" },
        },
    ]);

    const handleAddComponent = () => {
        setComponents([
            ...components,
            {
                componentValue: "",
                componentInstruction: { value: "", label: "" },
                componentMinion: { value: "", label: "" },
                componentRate: { value: "", label: "" },
                componentStartTime: { value: "", label: "" },
                componentEndTime: { value: "", label: "" },
                componentDinner: { value: "", label: "" },
                componentPayment: { value: "", label: "" },
            },
        ]);
    };

    const handleRemoveComponent = (index: number) => {
        const newComponents = [...components];
        newComponents.splice(index, 1);
        setComponents(newComponents);
    };

    const handleDublicateComponent = (index: number) => {
        const newComponents = [...components];
        setComponents([
            ...components,
            {
                componentValue: newComponents[index].componentValue,
                componentInstruction: newComponents[index].componentInstruction,
                componentMinion: newComponents[index].componentMinion,
                componentRate: newComponents[index].componentRate,
                componentStartTime: newComponents[index].componentStartTime,
                componentEndTime: newComponents[index].componentEndTime,
                componentDinner: newComponents[index].componentDinner,
                componentPayment: newComponents[index].componentPayment,
            },
        ]);
    };

    const handleComponentInstructionChange = (index: number, newValue: any) => {
        const newComponents = [...components];
        newComponents[index].componentInstruction = newValue;
        setComponents(newComponents);
    };

    const handleComponentRateChange = (index: number, newValue: any) => {
        const newComponents = [...components];
        newComponents[index].componentRate = newValue;
        setComponents(newComponents);
    };

    const handleComponentMinionChange = (index: number, newValue: any) => {
        const newComponents = [...components];
        newComponents[index].componentMinion = newValue;
        setComponents(newComponents);
    };

    const handleComponentValueChange = (index: number, value: string) => {
        const newComponents = [...components];
        newComponents[index].componentValue = value;
        setComponents(newComponents);
        console.log(components);
    };

    const handleComponentStartTimeChange = (index: number, newValue: any) => {
        const newComponents = [...components];
        newComponents[index].componentStartTime = newValue;
        setComponents(newComponents);
    };

    const handleComponentEndTimeChange = (index: number, newValue: any) => {
        const newComponents = [...components];
        newComponents[index].componentEndTime = newValue;
        setComponents(newComponents);
    };

    const handleComponentDinnerChange = (index: number, newValue: any) => {
        const newComponents = [...components];
        newComponents[index].componentDinner = newValue;
        setComponents(newComponents);
    };

    const handleComponentPaymentChange = (index: number, newValue: any) => {
        const newComponents = [...components];
        newComponents[index].componentPayment = newValue;
        setComponents(newComponents);
    };

    const basementOptions = [
        { value: "Сборка ГП", label: "Сборка ГП" },
        { value: "Простой", label: "Простой" },
        { value: "Переборка", label: "Переборка" },
        { value: "Уборка", label: "Уборка" },
    ];

    const timeOptions = [
        { value: "00", label: "00" },
        { value: "01", label: "01" },
        { value: "02", label: "02" },
        { value: "03", label: "03" },
        { value: "04", label: "04" },
        { value: "05", label: "05" },
        { value: "06", label: "06" },
        { value: "07", label: "07" },
        { value: "08", label: "08" },
        { value: "09", label: "09" },
        { value: "10", label: "10" },
        { value: "11", label: "11" },
        { value: "12", label: "12" },
        { value: "13", label: "13" },
        { value: "14", label: "14" },
        { value: "15", label: "15" },
        { value: "16", label: "16" },
        { value: "17", label: "17" },
        { value: "18", label: "18" },
        { value: "19", label: "19" },
        { value: "20", label: "20" },
        { value: "21", label: "21" },
        { value: "22", label: "22" },
        { value: "23", label: "23" },
    ];

    const dinnerOptions = [
        { value: "Нет", label: "Без обеда" },
        { value: "Час", label: "1 час" },
    ];

    const paymentOptions = [
        { value: "Сделка", label: "Сделка" },
        { value: "Почасовая", label: "Почасовая" },
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
        const fetchInstructions = async () => {
            const instructionData = await GetInstructions();
            const instruction = instructionData.map(
                (instruction: Instruction) => ({
                    value: instruction.id,
                    label: instruction.instructionCount,
                })
            );
            setInstructionOptions(instruction);
        };
        const fetchMinions = async () => {
            const minionsData = await GetMinions();
            const minions = minionsData.map((minion: Minion) => ({
                value: minion.id,
                label: `${minion.minionSurname} ${minion.minionName} ${minion.minionPatronymic}`,
            }));
            setMinionOptions(minions);
        };
        const fetchRates = async () => {
            const ratesData = await GetRates();
            const rates = ratesData.map((rate: Rate) => ({
                value: rate.id,
                label: `${rate.rateValue} - ${rate.rateComment}`,
            }));
            setRateOptions(rates);
        };
        fetchRates();
        fetchMinions();
        fetchInstructions();
    }, []);

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        const shiftInstruction = selectedInstructionOption
            ? parseInt(selectedInstructionOption.value)
            : 0;
        const shiftBasement = selectedShiftBasementOption
            ? selectedShiftBasementOption.value
            : "Сборка ГП";
        CreateShift(
            { setIsLoading },
            date,
            shiftMaster,
            shiftInstruction,
            shiftBasement,
            shiftDoneStatus,
            shiftDayNight,
            components
        );
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
                    <h3>Табель</h3>
                    {components.map((component, index) => (
                        <>
                            <h4>Вахтер {index + 1}</h4>
                            <div className={styles.Child} key={index}>
                                <Select
                                    className={styles.Select}
                                    onChange={(newValue) =>
                                        handleComponentMinionChange(
                                            index,
                                            newValue
                                        )
                                    }
                                    options={minionOptions}
                                    placeholder="ФИО Вахтера"
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
                                    onChange={(newValue) =>
                                        handleComponentInstructionChange(
                                            index,
                                            newValue
                                        )
                                    }
                                    options={instructionOptions}
                                    defaultValue={
                                        component.componentInstruction.value
                                            .length !== 0
                                            ? {
                                                  value: component
                                                      .componentInstruction
                                                      .value,
                                                  label: component
                                                      .componentInstruction
                                                      .label,
                                              }
                                            : null
                                    }
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
                                    onChange={(newValue) =>
                                        handleComponentRateChange(
                                            index,
                                            newValue
                                        )
                                    }
                                    defaultValue={
                                        component.componentRate.value.length !==
                                        0
                                            ? {
                                                  value: component.componentRate
                                                      .value,
                                                  label: component.componentRate
                                                      .label,
                                              }
                                            : null
                                    }
                                    options={rateOptions}
                                    placeholder="Выберите ставку"
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
                                    className={`${styles.Select} ${styles.TimeSelect}`}
                                    onChange={(newValue) =>
                                        handleComponentStartTimeChange(
                                            index,
                                            newValue
                                        )
                                    }
                                    defaultValue={
                                        component.componentStartTime.value
                                            .length !== 0
                                            ? {
                                                  value: component
                                                      .componentStartTime.value,
                                                  label: component
                                                      .componentStartTime.label,
                                              }
                                            : timeOptions[8]
                                    }
                                    options={timeOptions}
                                    placeholder="Начало смены"
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
                                <Select
                                    className={`${styles.Select} ${styles.TimeSelect}`}
                                    onChange={(newValue) =>
                                        handleComponentEndTimeChange(
                                            index,
                                            newValue
                                        )
                                    }
                                    defaultValue={
                                        component.componentEndTime.value
                                            .length !== 0
                                            ? {
                                                  value: component
                                                      .componentEndTime.value,
                                                  label: component
                                                      .componentEndTime.label,
                                              }
                                            : timeOptions[20]
                                    }
                                    options={timeOptions}
                                    placeholder="Конец смены"
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
                                <Select
                                    className={styles.Select}
                                    onChange={(newValue) =>
                                        handleComponentDinnerChange(
                                            index,
                                            newValue
                                        )
                                    }
                                    defaultValue={
                                        component.componentDinner.value
                                            .length !== 0
                                            ? {
                                                  value: component
                                                      .componentDinner.value,
                                                  label: component
                                                      .componentDinner.label,
                                              }
                                            : dinnerOptions[0]
                                    }
                                    options={dinnerOptions}
                                    placeholder="Обед"
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
                                <Input
                                    styleType="Input1"
                                    placeholderValue="Количество"
                                    type="text"
                                    value={component.componentValue}
                                    onChange={(value) =>
                                        handleComponentValueChange(index, value)
                                    }
                                    required
                                />
                                <Select
                                    className={styles.Select}
                                    onChange={(newValue) =>
                                        handleComponentPaymentChange(
                                            index,
                                            newValue
                                        )
                                    }
                                    defaultValue={
                                        component.componentPayment.value
                                            .length !== 0
                                            ? {
                                                  value: component
                                                      .componentPayment.value,
                                                  label: component
                                                      .componentPayment.label,
                                              }
                                            : null
                                    }
                                    options={paymentOptions}
                                    placeholder="Вид расчета"
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
                                <Button
                                    styleType="Button1"
                                    onClick={() => handleRemoveComponent(index)}
                                >
                                    Удалить
                                </Button>
                                <Button
                                    styleType="Button1"
                                    onClick={() =>
                                        handleDublicateComponent(index)
                                    }
                                >
                                    Дублировать
                                </Button>
                            </div>
                        </>
                    ))}
                    <div className={styles.Child}>
                        <button
                            className={styles.AddButton}
                            onClick={handleAddComponent}
                        >
                            Добавить компонент
                        </button>
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

export default ShiftsAddForm;
