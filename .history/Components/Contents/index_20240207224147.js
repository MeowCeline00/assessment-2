import Image from 'next/image';
import styles from './Contents.module.css';

export default function Contents() {
    return (
        <contents className={styles.contents}>
            <div className={styles.projectDescription}>
            <h1>About</h1>
            <p>This project is my personal project, trying to explore different patterns for the wings of butterflies.
                On this occasion, I tried to draw several variety of Butterflies as referred to the original breed, including
               Agrias Aedon Hewitson, Danaus Plexippus, Morpho Peleides, Ornithoptera Goliath, Pachliopta Hector, Parides Agavus,
               and Trogonoptera Trojana.
            </p>
            </div>
            <div className={styles.butterflyPatterns}>
              <div className={styles.buttfly1}>
                <h3>Agrias Aedon Hewitson</h3>
                <p>The species of the genus Agrias have, variously, very bright red, orange, 
                    iridescent blue and yellow colouration contrasting on the black or bluish background of their upperside wing. 
                    The underside wings are patterned. They have a robust appearance - broad thorax and short wide abdomen, allowing fast flight. 
                    The wingspan is 70 to 120 mm. Males of all Agrias species have prominent yellow tufts of androconial scales on the hindwings. 
                    These disperse pheromones for attracting suitable mates.</p>
                <img src={"/agrias_aedon_hewitson.png"} alt="Agrias Aedon Hewitson" width={500} />
                </div>
                <div className={styles.buttfly2}>
                <h3>Danaus Plexippus</h3>
                <p>Monarch butterflies are well-known for their appearance. 
                Adult monarch butterflies possess two pairs of brilliant orange-red wings, 
                featuring black veins and white spots along the edges. The males possess distinguishing 
                black dots along the veins of their wings. Their orange color alerts predators to stay away.
                <As caterpillars, Monarchs are striped with yellow, black and white bands. Monarch caterpillars have a set of antennae-like tentacles at each end of their body. They reach about two inches in length before metamorphosis. The monarch chrysalis, where the caterpillar undergoes metamorphosis into the winged adult butterfly, is seafoam green with tiny yellow spots along its edge.</p>
                <img src={"/agrias_aedon_hewitson.png"} alt="Agrias Aedon Hewitson" width={500} />
                </div>
            </div>
        </contents>
    );
}
