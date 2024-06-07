interface Option {
    value: string;
    label: string;
}

// interface Tabel {
//     shiftMinion: number;
//     shiftTabelInstruction: number;
//     shiftTabelRate: number;
//     shiftTabelStart: string;
//     shiftTabelEnd: string;
//     shiftTabelDinner: string;
//     shiftTabelValue: number;
//     shiftTabelPayment: string;
// }
interface Tabel {
    componentValue: string;
    componentInstruction: Option;
    componentMinion: Option;
    componentRate: Option;
    componentStartTime: Option;
    componentEndTime: Option;
    componentDinner: Option;
    componentPayment: Option;
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
                tabel: tabel.map((item) => ({
                    shiftMinion: item.componentMinion?.value,
                    shiftTabelInstruction: item.componentInstruction?.value,
                    shiftTabelRate: item.componentRate?.value,
                    shiftTabelStart: item.componentStartTime?.value,
                    shiftTabelEnd: item.componentEndTime?.value,
                    shiftTabelDinner: item.componentDinner?.value,
                    shiftTabelValue: item.componentValue,
                    shiftTabelPayment: item.componentPayment?.value,
                })),
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
