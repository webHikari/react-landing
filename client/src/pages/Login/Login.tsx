import Header from "@widgets/Header/Header";
import LoginForm from "@widgets/LoginForm/LoginForm";

import styles from "./ui/Login.module.css"

export default function Login({setAuth}: any) {
    return (
        <div className={styles.Container}>
            <Header />
            <LoginForm setAuth={setAuth}/>
        </div>
    );
}
