import { useState } from "react";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
import Checkbox from "@shared/Checkbox/Checkbox";
import Textarea from "@shared/Textarea/Textarea";
import Select from "react-select";

import styles from "./ui/MinionAddForm.module.css";

// import CreateMinion from "@features/Minions/CreateMinion/CreateMinion";

const MinionAddForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [minionName, setMinionName] = useState("");
    const [minionSurname, setMinionSurname] = useState("");
    const [minionPatronymic, setMinionPatronymic] = useState("");
    const [minionPhone, setMinionPhone] = useState("");
    const [minionComment, setMinionComment] = useState("");
    const [minionRate, setMinionRate] = useState(
        "180,00 ₽ - вахта почасовая с 23.10 "
    );
    const [minionDayNightStatus, setMinionDayNightStatus] = useState(true);
    const [selectedMinionWorkStatusOption, setSelectedMinionWorkStatusOption] =
        useState(null);
    const [selectedMinionAgentOption, setSelectedMinionAgentOption] =
        useState(null);

    const options = [
        { value: "Работает", label: "Работает" },
        { value: "Не работает", label: "Не работает" },
        { value: "Потенциальный", label: "Потенциальный" },
        { value: "Резерв", label: "Резерв" },
        { value: "HOLD", label: "HOLD" },
    ];

    const agentOptions = [
        { value: "КАСКАД", label: "КАСКАД" },
        { value: "ДВД", label: "ДВД" },
        { value: "ALL HR", label: "ALL HR" },
        { value: "Подработчик", label: "Подработчик" },
    ];

    const handleMinionNameChange = (value: string) => {
        setMinionName(value);
    };

    const handleMinionSurnameChange = (value: string) => {
        setMinionSurname(value);
    };

    const handleMinionPatronymicChange = (value: string) => {
        setMinionPatronymic(value);
    };

    const handleMinionPhoneChange = (value: string) => {
        setMinionPhone(value);
    };

    const handleMinionRateChange = (value: string) => {
        setMinionRate(value);
        console.log(minionRate);
    };

    const handleMinionCommentChange = (value: string) => {
        setMinionComment(value);
        console.log(minionComment);
    };

    const handleMinionDayNightStatusClick = () => {
        setMinionDayNightStatus(!minionDayNightStatus);
        console.log(minionDayNightStatus);
    };

    const handleMinionWorkStatusOptionChange = (option: any) => {
        setSelectedMinionWorkStatusOption(option);
        console.log(selectedMinionWorkStatusOption);
    };
    const handleAgentOptionChange = (option: any) => {
        setSelectedMinionAgentOption(option);
        console.log(selectedMinionAgentOption);
    };

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        // CreateClient(
        //     { setIsLoading },
        //     clientName,
        //     clientAddress,
        //     isContractor,
        //     isClient
        // );
    };

    return (
        <div className={styles.FormContainer}>
            <h1>Добавить вахтера</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className={styles.Form}>
                    <div className={styles.Child}>
                        <Input
                            styleType="Input1"
                            placeholderValue="Имя"
                            type="text"
                            value={minionName}
                            onChange={handleMinionNameChange}
                            required
                        />
                    </div>
                    <div className={styles.Child}>
                        <Input
                            styleType="Input1"
                            placeholderValue="Фамилия"
                            type="text"
                            value={minionSurname}
                            onChange={handleMinionSurnameChange}
                            required
                        />
                    </div>
                    <div className={styles.Child}>
                        <Input
                            styleType="Input1"
                            placeholderValue="Отчество"
                            type="text"
                            value={minionPatronymic}
                            onChange={handleMinionPatronymicChange}
                            required
                        />
                    </div>
                    <div className={styles.Child}>
                        <Input
                            styleType="Input1"
                            placeholderValue="Телефон"
                            type="text"
                            value={minionPhone}
                            onChange={handleMinionPhoneChange}
                            required
                        />
                    </div>
                    <div className={styles.Child}>
                        <Input
                            styleType="Input1"
                            placeholderValue="Ставка"
                            type="text"
                            value={minionRate}
                            onChange={handleMinionRateChange}
                            required
                        />
                    </div>
                    <div className={styles.Child}>
                        <Checkbox
                            value="День/Ночь"
                            onClick={handleMinionDayNightStatusClick}
                            checked={minionDayNightStatus}
                        />
                        <Select
                            className={styles.Select}
                            onChange={handleMinionWorkStatusOptionChange}
                            options={options}
                            placeholder="Статус"
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
                            onChange={handleAgentOptionChange}
                            options={agentOptions}
                            placeholder="Рекрутер"
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
                        <Textarea 
                            value={minionComment}
                            onChange={handleMinionCommentChange}
                            placeholderValue="Комментарий"
                        />
                    </div>
                    <Button
                        styleType="Button1"
                        onClick={(e) => handleSubmit(e)}
                        value="Создать вахтера"
                    />
                </div>
            )}
        </div>
    );
};

export default MinionAddForm;
