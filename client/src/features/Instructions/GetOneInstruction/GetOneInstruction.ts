const GetOneInstruction = async (id: string) => {
    try {
        const response = await fetch("http://localhost:3000/instructions/" + id, {
            method: "GET",
            headers: { token: localStorage.token },
        });

        const parseRes = await response.json();
        return parseRes
    } catch (err: any) {
        console.error(err.message);
    }
};

export default GetOneInstruction