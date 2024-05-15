const GetOneClient = async (id: string) => {
    try {
        const response = await fetch("http://localhost:3000/clients/" + id, {
            method: "GET",
            headers: { token: localStorage.token },
        });

        const parseRes = await response.json();
        return parseRes.client
    } catch (err: any) {
        console.error(err.message);
    }
};

export default GetOneClient