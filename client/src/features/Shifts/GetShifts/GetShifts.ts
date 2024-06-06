const GetShifts = async () => {
    try {
        const response = await fetch("http://localhost:3000/shifts", {
            method: "GET",
            headers: { token: localStorage.token },
        });

        const parseRes = await response.json();
        return parseRes.shifts
    } catch (err: any) {
        console.error(err.message);
    }
};

export default GetShifts