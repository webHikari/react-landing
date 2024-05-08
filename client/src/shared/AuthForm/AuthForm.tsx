import React from "react";
import styles from "./ui/AuthForm.module.css";

const WidgetContainer: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return <form className={styles.Container}>{children}</form>;
};

export default WidgetContainer;
