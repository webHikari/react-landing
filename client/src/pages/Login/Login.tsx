import Header from "@widgets/Header/Header";
import LoginForm from "@widgets/LoginForm/LoginForm";

export default function Login({setAuth}: any) {
    return (
        <>
            <Header />
            <LoginForm setAuth={setAuth}/>
        </>
    );
}
