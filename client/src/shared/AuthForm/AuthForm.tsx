import React from "react";
import styles from "./ui/AuthForm.module.css";

const WidgetContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.Container}>{children}</div>;
};

export default WidgetContainer;
