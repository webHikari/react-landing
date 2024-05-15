export default async function Login(
    { setIsLoading }: any,
    { setAuth }: any,
    email: string,
    password: string
) {
    setIsLoading(true);
    console.log(email);
    console.log(password);
    try {
        console.log("Loading...");
        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const parseRes = await response.json();
            localStorage.setItem("token", parseRes.token);
            setAuth(true);
        } else {
            console.log(response.body);
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        setIsLoading(false);
    }
}
