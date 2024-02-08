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
                <p>The species of the genus Agrias have, variously, very bright red, orange, 
                    iridescent blue and yellow colouration contrasting on the black or bluish background of their upperside wing. The underside wings are patterned. They have a robust appearance (broad thorax and short wide abdomen) allowing fast flight. The wingspan is 70–120 mm. Males of all Agrias species have prominent yellow tufts of androconial scales on the hindwings. These disperse pheromones for attracting suitable mates.</p>
                <img src={"/agrias_aedon_hewitson.png"} alt="Agrias Aedon Hewitson" width={30} />
            </div>
        </contents>
    );
}
