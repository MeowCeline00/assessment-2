import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className=
            <div className={styles.notificationArea}>
                <img src={"images/bellicon.png"} alt="Notification Bell" width={30} />
                <p>Friday</p>
            </div>
        </header>
    );
}
