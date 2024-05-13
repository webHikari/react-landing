import { ClientProps } from "./Client.props";
import styles from "./Client.module.css";

const Client = ({ clientName, clientAddress }: ClientProps) => {
    return (
        <div className={styles.Client}>
            <div className={styles.Name}>{clientName}</div>
            <div className={styles.Address}>{clientAddress}</div>
        </div>
    );
};

export default Client;
