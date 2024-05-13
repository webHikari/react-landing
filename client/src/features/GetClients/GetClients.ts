const GetClients = async () => {
    try {
        const response = await fetch("http://localhost:3000/clients", {
            method: "GET",
            headers: { token: localStorage.token },
        });

        const parseRes = await response.json();
        return parseRes
    } catch (err: any) {
        console.error(err.message);
    }
};

export default GetClients