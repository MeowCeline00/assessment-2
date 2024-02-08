import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.titleArea}>
            <h1> Colorful Butterflies</h1>
            <h2> A General Peek at Butterfly Wing Patterns</h2>
            <div className={styles.logoArea}>
                <img src={"images/bellicon.png"} alt="Notification Bell" width={30} />
                <p>Friday</p>
            </div>
            </div>
        </header>
    );
}
