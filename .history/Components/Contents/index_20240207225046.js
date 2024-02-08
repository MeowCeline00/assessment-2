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
                <br />
                As caterpillars, Monarchs are striped with yellow, black and white bands. 
                Monarch caterpillars have a set of antennae-like tentacles at each end of their body. 
                They reach about two inches in length before metamorphosis. The monarch chrysalis, 
                where the caterpillar undergoes metamorphosis into the winged adult butterfly, 
                is seafoam green with tiny yellow spots along its edge.</p>
                <img src={"/Danaus_plexippus.png"} alt="Danaus Plexippus" width={500} />
                </div>
                <div className={styles.buttfly3}>
                <h3>Morpho Peleides</h3>
                <p>Morpho peleides is recognized by the iridescent blue coloration on the top side of the wings. 
                    Conversely, the undersides of the wings are brown and have a cryptic coloration and pattern. 
                    Large eyespots are present on the bottom side of the forewings and hindwings. 
                    The number of forewing eyespots on each individual may vary. 
                    This coloration serves as protection from predators by making the butterfly somewhat camouflaged in the forest, 
                    and the eyespots can startle or intimidate potential predators. 
                    They are large butterflies, with adult wingspan measuring 5-8 inches.</p>
                <img src={"/morpho_peleides.png"} alt="Morpho Peleides" width={500} />
                </div>
                <div className={styles.buttfly4}>
                <h3>Ornithoptera Goliath</h3>
                <p>Ornithoptera goliath has a wingspan up to 11 in. This makes it the world's second largest butterfly. 
                    The African giant swallowtail reaches an almost equal wingspan.
                    <br />
                    Male. The Goliath birdwing's forewings are black. The costal edge is green and beyond the medium black bar 
                    is a large green triangle which reaches the dorsum but not the black sternum. The underside is greenish yellow and greenish. The veins are black and there is a black border. The outer cells have small black spots. The hindwings are golden with a black edge bordered basally by a thin green line. There are some green spots in the cells of the golden area. The underside is similar to the upperside, but there is no black border. The edge is green. The spots in the cells of the golden area are black.

The abdomen is yellow with black-edged tergites. The head and thorax are black and the underside of the thorax has tufts of red hair.

Female. The female is larger than the male and the basic colour is dark brown. At the outer edge there is a postdiscal chain of white spots. In the discal] cell there is a cluster of white spots, sometimes shaped like an "E". The hindwings have a broad yellow postdiscal band with a chain of dark-brown spots in the cells. The underside is very like the upper but the colours are stronger.</p>
                <img src={"/morpho_peleides.png"} alt="Ornithoptera Goliath" width={500} />
                </div>
            </div>
        </contents>
    );
}
