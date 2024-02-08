import Image from 'next/image';
import styles from './Contents.module.css';

export default function Contents() {
    return (
        <contents className={styles.contents}>
            <h3>About</h3>
            <p>This project is my personal project, trying to explore different patterns for the wings of butterflies.
                
            </p>
            <div className={styles.notificationArea}>
                <img src={"images/bellicon.png"} alt="Notification Bell" width={30} />
                <p>Friday</p>
            </div>
        </contents>
    );
}
