const GetProjects = async () => {
    try {
        const response = await fetch("http://localhost:3000/projects", {
            method: "GET",
            headers: { token: localStorage.token },
        });

        const parseRes = await response.json();
        return parseRes.projects
    } catch (err: any) {
        console.error(err.message);
    }
};

export default GetProjects