import { useState, useEffect } from "react";
import AuthForm from "@shared/AuthForm/AuthForm";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";


export default function RegisterForm({ setAuth }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [isEqual, setIsEqual] = useState(true);
    const [isEmailCorrect, setIsEmailCorrect] = useState(true);

    useEffect(() => {
        setIsEqual(password === repeatPassword);
    }, [repeatPassword]);

    const handleEmailChange = (value: string) => {
        setEmail(value);
        if (!value.length) {
            setIsEmailCorrect(true);
            return;
        }
        setIsEmailCorrect(Boolean(validateEmail(value)));
    };

    const validateEmail = (email: string): RegExpMatchArray | null => {
        return email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleRepeatPasswordChange = (value: string) => {
        setRepeatPassword(value);
        setIsEqual(() => {
            const isEqual = value === password;
            return isEqual;
        });
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        console.log(email);
        console.log(password);
        try {
            console.log("Loading...");
            const response = await fetch(
                "http://localhost:3000/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );

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
    };

    return (
        <AuthForm>
            <h1>Register</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {!isEmailCorrect ? <p>Incorrect email</p> : null}
                    <Input
                        styleType="Input1"
                        placeholderValue="Your email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <Input
                        styleType="Input1"
                        placeholderValue="Your password"
                        value={password}
                        type="password"
                        onChange={handlePasswordChange}
                        required
                    />
                    {!isEqual ? <p>Not Equal </p> : null}
                    <Input
                        styleType="Input1"
                        placeholderValue="Repeat your password"
                        value={repeatPassword}
                        type="password"
                        onChange={handleRepeatPasswordChange}
                        required
                    />
                    <Button styleType="Button1" onClick={handleSubmit} />
                </>
            )}
        </AuthForm>
    );
}
