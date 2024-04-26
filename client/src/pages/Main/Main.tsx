
import Header from "@widgets/Header/Header";
import Button from "@shared/Button/Button";

import styles from "./ui/Main.module.css";

export default function Main() {
    return (
        <>
            <div className={styles.Main}>
                <Button value="Use Winter" styleType="Button3" />
                <h1>Hello world</h1>
            </div>
            <Header />
        </>
    );
}
