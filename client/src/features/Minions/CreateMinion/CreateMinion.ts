export default async function CreateProduct(
    { setIsLoading }: any,
    minionName: string,
    minionSurname: string,
    minionPatronymic: string,
    minionPhone: string,
    minionWorkStatus: any,
    minionAgent: any,
    minionRate: string,
    minionDayNightStatus: boolean,
    minionComment: string
) {
    setIsLoading(true);
    try {
        console.log("Loading...");
        const response = await fetch("http://localhost:3000/minions/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.token,
            },
            body: JSON.stringify({
                minionName: minionName,
                minionSurname: minionSurname,
                minionPatronymic: minionPatronymic,
                minionPhone: minionPhone,
                minionWorkStatus: minionWorkStatus.value,
                minionAgent: minionAgent.value,
                minionRate: minionRate,
                minionDayNightStatus: minionDayNightStatus,
                minionComment: minionComment,
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
