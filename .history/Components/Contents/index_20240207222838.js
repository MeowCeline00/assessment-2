import Image from 'next/image';
import styles from './Contents.module.css';

export default function Contents() {
    return (
        <contents className={styles.contents}>
            <h3>About</h3>
            <p>This project is my personal project, trying to explore different patterns for the wings of butterflies.
                On this occasion, I tried to draw several variety of Butterflies as referred to the original breed, including
               Agrias Aedon Hewitson',
    2: 'Danaus Plexippus',
    4: 'Morpho Peleides',
    8: 'Ornithoptera Goliath',
    16: 'Pachliopta Hector',
    32: 'Parides Agavus',
    64: 'Trogonoptera Trojana'
            </p>
            <div className={styles.notificationArea}>
                <img src={"images/bellicon.png"} alt="Notification Bell" width={30} />
                <p>Friday</p>
            </div>
        </contents>
    );
}
