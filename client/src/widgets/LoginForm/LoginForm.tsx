import { useState } from "react";
import AuthForm from "@shared/AuthForm/AuthForm";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            console.log("Loading...");
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                console.log(response.body);
            } else {
                console.log(response.body);
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthForm>
            <h1>Login form</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Input
                        styleType="Input1"
                        placeholderValue="Your email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <Input
                        styleType="Input1"
                        placeholderValue="Your password"
                        value={password}
                        type="password"
                        onChange={handlePasswordChange}
                    />
                    <Button styleType="Button1" onClick={handleSubmit} />
                </>
            )}
        </AuthForm>
    );
}
