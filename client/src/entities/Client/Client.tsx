import { useNavigate } from 'react-router-dom'

import { ClientProps } from "./Client.props";
import styles from "./Client.module.css";

const Client = ({ clientName, clientAddress, onClick, clientId }: ClientProps) => {
    const navigate = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        onClick?.(event);
        navigate("/clients/edit/" + clientId);
    };

    return (
        <div className={styles.Client} onClick={handleClick}>
            <div className={styles.Name}>{clientName}</div>
            <div className={styles.Address}>{clientAddress}</div>
        </div>
    );
};

export default Client;
