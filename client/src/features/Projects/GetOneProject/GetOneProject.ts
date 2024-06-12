const GetOneProject = async (id: string | undefined) => {
    try {
        const response = await fetch("http://localhost:3000/projects/" + id, {
            method: "GET",
            headers: { token: localStorage.token },
        });

        const parseRes = await response.json();
        // returns project and array with instructions
        return parseRes;
    } catch (err: any) {
        console.error(err.message);
    }
};

export default GetOneProject;
