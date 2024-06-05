import { useState, useEffect } from "react";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";
import Select from "react-select";

import GetProjects from "@features/Projects/GetProjects/GetProjects";
import GetProducts from "@features/Products/GetProducts/GetProducts";
import GetRates from "@features/Rates/GetRates/GetRates";
import CreateInstruction from "@features/Instructions/CreateInstruction/CreateInstruction";

import styles from "./ui/InstructionAddForm.module.css";

import Project from "./model/Project.props";
import Product from "./model/Product.props";
import Rate from "./model/Rate.props";
import Option from "./model/Option.props";
import Component from "./model/Component.props";

const InstructionAddForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [projectsOptions, setProjectsOptions] = useState<Option[]>([]);
    const [productsOptions, setProductsOptions] = useState<Option[]>([]);
    const [ratesOptions, setRatesOptions] = useState<Option[]>([]);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    const [instructionCount, setInstructionCount] = useState("");
    const [instructionValue, setInstructionValue] = useState("");
    const [selectedProjectOption, setSelectedProjectOption] = useState(null);
    const [selectedProductOption, setSelectedProductOption] = useState(null);
    const [selectedRateOption, setSelectedRateOption] = useState(null);
    const [components, setComponents] = useState<Component[]>([
        { componentName: "", componentValue: "" },
    ]);

    const handleInstructionCountChange = (value: string) => {
        setInstructionCount(value);
    };

    const handleInstructionValueChange = (value: string) => {
        setInstructionValue(value);
    };

    const handleProjectsOptionChange = (option: any) => {
        setSelectedProjectOption(option);
        console.log(selectedProjectOption);
    };

    const handleProductsOptionChange = (option: any) => {
        setSelectedProductOption(option);
        console.log(selectedProductOption);
    };

    const handleRateOptionChange = (option: any) => {
        setSelectedRateOption(option);
        console.log(selectedRateOption);
    };

    const handleDateChange = (value: string) => {
        setDate(value);
    };

    const handleAddComponent = () => {
        setComponents([
            ...components,
            { componentName: "", componentValue: "" },
        ]);
    };

    const handleRemoveComponent = (index: number) => {
        const newComponents = [...components];
        newComponents.splice(index, 1);
        setComponents(newComponents);
    };

    const handleComponentNameChange = (index: number, value: string) => {
        const newComponents = [...components];
        newComponents[index].componentName = value;
        setComponents(newComponents);
    };

    const handleComponentValueChange = (index: number, value: string) => {
        const newComponents = [...components];
        newComponents[index].componentValue = value;
        setComponents(newComponents);
    };

    useEffect(() => {
        const fetchProjects = async () => {
            const projectsData = await GetProjects();
            const projects = projectsData.map((project: Project) => ({
                value: project.id,
                label: project.projectCount,
            }));
            setProjectsOptions(projects);
        };
        const fetchProducts = async () => {
            const productsData = await GetProducts();
            const products = productsData.map((product: Product) => ({
                value: product.id,
                label: product.productCount,
            }));
            setProductsOptions(products);
        };
        const fetchRates = async () => {
            const ratesData = await GetRates();
            const rates = ratesData.map((rate: Rate) => ({
                value: rate.id,
                label: rate.rateValue,
            }));
            setRatesOptions(rates);
        };
        fetchRates();
        fetchProducts();
        fetchProjects();
    }, []);

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        CreateInstruction(
            { setIsLoading },
            date,
            instructionCount,
            instructionValue,
            selectedProjectOption,
            selectedProductOption,
            selectedRateOption,
            components
        );
    };

    return (
        <div className={styles.FormContainer}>
            <h1>Добавить инструкцию</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className={styles.Form}>
                    <div className={styles.Child}>
                        <Input
                            styleType="Input1"
                            placeholderValue="Номер"
                            type="text"
                            value={instructionCount}
                            onChange={handleInstructionCountChange}
                            required
                        />
                    </div>
                    <div className={styles.Child}>
                        <Input
                            styleType="Input1"
                            placeholderValue="Количество ГП"
                            type="text"
                            value={instructionValue}
                            onChange={handleInstructionValueChange}
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
                            defaultValue={projectsOptions[0]}
                            onChange={handleProjectsOptionChange}
                            options={projectsOptions}
                            placeholder="Выберите проект"
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
                            defaultValue={productsOptions[0]}
                            onChange={handleProductsOptionChange}
                            options={productsOptions}
                            placeholder="Выберите артикул"
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
                            defaultValue={ratesOptions[0]}
                            onChange={handleRateOptionChange}
                            options={ratesOptions}
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
                    {components.map((component, index) => (
                        <div className={styles.Child} key={index}>
                            <Input
                                styleType="Input1"
                                placeholderValue={`Компонент ${index + 1}`}
                                type="text"
                                value={component.componentName}
                                onChange={(value) =>
                                    handleComponentNameChange(index, value)
                                }
                                required
                            />
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
                            <button
                                className={styles.DeleteButton}
                                onClick={() => handleRemoveComponent(index)}
                            >
                                Удалить
                            </button>
                        </div>
                    ))}
                    <div className={styles.Child}>
                        <Button
                            styleType="Button1"
                            onClick={handleAddComponent}
                            value="Добавить компонент"
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
