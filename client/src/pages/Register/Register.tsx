import Header from "@widgets/Header/Header";
import RegisterForm from "@widgets/RegisterForm/RegisterForm"

export default function Register({setAuth}: any) {
    return (
        <>
            <Header />
            <RegisterForm setAuth={setAuth}/>
        </>
    );
}
