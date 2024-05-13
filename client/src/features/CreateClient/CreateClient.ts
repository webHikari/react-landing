export default async function CreateClient(
    { setIsLoading }: any,
    clientName: string,
    clientAddress: string,
    isContractor: boolean,
    isClient: boolean
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
                clientName: clientName,
                clientAddress: clientAddress,
                isContractor: isContractor,
                isClient: isClient,
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
