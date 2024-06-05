const GetMinions = async () => {
    try {
        const response = await fetch("http://localhost:3000/minions", {
            method: "GET",
            headers: { token: localStorage.token },
        });

        const parseRes = await response.json();
        return parseRes.minions
    } catch (err: any) {
        console.error(err.message);
    }
};

export default GetMinions