import Image from 'next/image';
import styles from './Contents.module.css';

export default function Contents() {
    return (
        <contents className={styles.contents}>
            <h1>Dashboard</h1>
            <div className={styles.notificationArea}>
                <img src={"images/bellicon.png"} alt="Notification Bell" width={30} />
                <p>Friday</p>
            </div>
        </header>
    );
}
