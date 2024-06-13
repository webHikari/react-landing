export default async function CreateClient(
    { setIsLoading }: any,
    projectCount: string,
    projectName: string,
    projectClient: string,
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
                projectCount: projectCount,
                projectName: projectName,
                projectClient: projectClient,
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
