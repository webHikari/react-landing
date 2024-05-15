export default async function CreateClient(
    { setIsLoading }: any,
    rateValue: string,
    rateStandart: string,
    rateComment: string,
) {
    setIsLoading(true);
    try {
        console.log("Loading...");
        const response = await fetch("http://localhost:3000/clients/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.token,
            },
            body: JSON.stringify({
                rateValue: rateValue,
                rateStandart: rateStandart,
                rateComment: rateComment,
            }),
        });

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
