export default async function CreateClient(
    { setIsLoading }: any,
    projectId: string,
    projectCount: string,
    projectName: string,
    projectClient: string,
    clientName: string,
    projectStatus: string,
    projectComment: string
) {
    setIsLoading(true);
    try {
        console.log("Loading...");
        const response = await fetch("http://localhost:3000/projects/edit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.token,
            },
            body: JSON.stringify({
                projectId: projectId,
                // Ща будет кринж, приготовьтесь
                projectCount: projectName,
                projectName: projectCount,
                // Блять простите пожалуйста
                projectClient: projectClient,
                clientName: clientName,
                projectStatus: projectStatus,
                projectComment: projectComment,
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
