import Sidebar from "@widgets/Sidebar/Sidebar";
import styles from "./ui/Dashboard.module.css";

import { SetAuthFunction } from "@app/providers/model/Provider.props";

interface DashboardProps {
    setAuth: SetAuthFunction
    name: any
}

const Dashboard: React.FC<DashboardProps> = ({ setAuth, name }) => {

    return (
        <div className={styles.Container}>
            <Sidebar setAuth={setAuth} name={name} />
            <div className={styles.Main}></div>
            {/* <div className={styles.Secondary}></div> */}
        </div>
    );
}

export default Dashboard
