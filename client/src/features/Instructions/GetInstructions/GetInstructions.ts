const GetInstructions = async () => {
    try {
        const response = await fetch("http://localhost:3000/instructions", {
            method: "GET",
            headers: { token: localStorage.token },
        });

        const parseRes = await response.json();
        return parseRes.instructions
    } catch (err: any) {
        console.error(err.message);
    }
};

export default GetInstructions