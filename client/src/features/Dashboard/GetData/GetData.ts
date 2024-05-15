const getData = async () => {
    try {
        const response = await fetch("http://localhost:3000/dashboard", {
            method: "GET",
            headers: { token: localStorage.token },
        });

        const parseRes = await response.json();
        return parseRes
    } catch (err: any) {
        console.error(err.message);
    }
};

export default getData