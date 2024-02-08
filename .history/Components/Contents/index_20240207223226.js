import Image from 'next/image';
import styles from './Contents.module.css';

export default function Contents() {
    return (
        <contents className={styles.contents}>
            <div className={styles.projectDescription}>
            <h3>About</h3>
            <p>This project is my personal project, trying to explore different patterns for the wings of butterflies.
                On this occasion, I tried to draw several variety of Butterflies as referred to the original breed, including
               Agrias Aedon Hewitson, Danaus Plexippus, Morpho Peleides, Ornithoptera Goliath, Pachliopta Hector, Parides Agavus,
               and Trogonoptera Trojana.
            </p>
            </div>
            <div className={styles.butterflyPatterns}>
                <h1>Agrias Aedon Hewitson</h1>
                <img src={"/agrias_aedon_hewitson.png"} alt="Ag" width={30} />
                <p>Friday</p>
            </div>
        </contents>
    );
}
