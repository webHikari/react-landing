interface Component {
    componentName: string;
    componentValue: string;
}

export default async function CreateInstruction(
    { setIsLoading }: any,
    instructionDate: string,
    instructionCount: string,
    instructionProductsValue: string,
    instructionProject: any,
    instructionProduct: any,
    instructionBet: any,
    components: Component[]
) {
    setIsLoading(true);
    try {
        console.log("Loading...");
        const response = await fetch(
            "http://localhost:3000/instructions/create",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    token: localStorage.token,
                },
                body: JSON.stringify({
                    instructionDate: instructionDate,
                    instructionCount: instructionCount,
                    instructionProductsValue: instructionProductsValue,
                    instructionProject: instructionProject.value,
                    instructionProduct: instructionProduct.value,
                    instructionBet: instructionBet.value,
                    components: components,
                }),
            }
        );

        if (response.ok) {
            const parseRes = await response.json();
            console.log(parseRes);
        } else {
            console.log(response.body);
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        setIsLoading(false);
    }
}
