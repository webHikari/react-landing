const GetProducts = async () => {
    try {
        const response = await fetch("http://localhost:3000/products", {
            method: "GET",
            headers: { token: localStorage.token },
        });

        const parseRes = await response.json();
        return parseRes.products
    } catch (err: any) {
        console.error(err.message);
    }
};

export default GetProducts