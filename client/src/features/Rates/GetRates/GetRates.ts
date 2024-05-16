const GetRates = async () => {
    try {
        const response = await fetch("http://localhost:3000/rates", {
            method: "GET",
            headers: { token: localStorage.token },
        });

        const parseRes = await response.json();
        return parseRes.rates
    } catch (err: any) {
        console.error(err.message);
    }
};

export default GetRates