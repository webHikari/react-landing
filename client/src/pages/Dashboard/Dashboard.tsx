import Header from "@widgets/Header/Header";
import Button from "@shared/Button/Button";

export default function Dashboard({setAuth}: any) {

    const logout = () => {
        localStorage.removeItem('token');
        setAuth(false);
    };

    return (
        <>
            <Header />
            <p>Dashboard.</p>
            <Button value="Log out" onClick={() =>logout()} styleType="Button1"/>
        </>
    );
}
