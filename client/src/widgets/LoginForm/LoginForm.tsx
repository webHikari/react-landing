import { useState } from "react";
import AuthForm from "@shared/AuthForm/AuthForm";
import Input from "@shared/Input/Input";
import Button from "@shared/Button/Button";

import Login from "@/features/Auth/Login/Login"

export default function RegisterForm({ setAuth }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [isEmailCorrect, setIsEmailCorrect] = useState(true);

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

    const handleSubmit = async () => {
        Login({ setIsLoading }, { setAuth }, email, password);
    };

    return (
        <AuthForm>
            <h1>Login</h1>
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
                    <Button styleType="Button1" onClick={handleSubmit} />
                </>
            )}
        </AuthForm>
    );
}
