interface Tabel {
    shiftMinion: number;
    shiftTabelInstruction: number;
    shiftTabelRate: number;
    shiftTabelStart: string;
    shiftTabelEnd: string;
    shiftTabelDinner: string;
    shiftTabelValue: number;
    shiftTabelPayment: string;
}

export default async function CreateShift(
    { setIsLoading }: any,
    shiftDate: string,
    shiftMaster: string,
    shiftInstruction: number,
    shiftBasement: string,
    shiftDoneStatus: boolean,
    shiftDayNight: boolean,
    tabel: Tabel[]
) {
    setIsLoading(true);
    try {
        console.log("Loading...");
        const response = await fetch("http://localhost:3000/shifts/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.token,
            },
            body: JSON.stringify({
                shiftDate: shiftDate,
                shiftMaster: shiftMaster,
                shiftInstruction: shiftInstruction,
                shiftBasement: shiftBasement,
                shiftDoneStatus: shiftDoneStatus,
                shiftDayNight: shiftDayNight,
                tabel: tabel,
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
