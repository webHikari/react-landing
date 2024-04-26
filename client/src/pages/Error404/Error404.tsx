import Header from "@widgets/Header/Header";
import Button from "@shared/Button/Button";

export default function Login() {
    return (
        <>
            <Header />
            <p>404 page, leave it.</p>
            <Button value="hello" callback={() => console.log("click")} styleType="Button2"/>
        </>
    );
}
