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
                <div className={styles.butterfly1Des}>
                <h3>Agrias Aedon Hewitson</h3>
                <p>The species of the genus Agrias have, variously, very bright red, orange, 
                    iridescent blue and yellow colouration contrasting on the black or bluish background of their upperside wing. 
                    The underside wings are patterned. They have a robust appearance - broad thorax and short wide abdomen, allowing fast flight. 
                    The wingspan is 70 to 120 mm. Males of all Agrias species have prominent yellow tufts of androconial scales on the hindwings. 
                    These disperse pheromones for attracting suitable mates.</p>
                </div>
                <div className={styles.butterfly1Pic}></div>
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
                    is a large green triangle which reaches the dorsum but not the black sternum. The underside is greenish yellow and greenish. 
                    The veins are black and there is a black border. The outer cells have small black spots. 
                    The hindwings are golden with a black edge bordered basally by a thin green line. 
                    There are some green spots in the cells of the golden area. The underside is similar to the upperside, 
                    but there is no black border. The edge is green. The spots in the cells of the golden area are black.
                    The abdomen is yellow with black-edged tergites. The head and thorax are black and the underside of the 
                    thorax has tufts of red hair.
                    <br />
                    Female. The female is larger than the male and the basic colour is dark brown. 
                    At the outer edge there is a postdiscal chain of white spots. In the discal cell there is a cluster of white spots, 
                    sometimes shaped like an "E". The hindwings have a broad yellow postdiscal band with a chain of dark-brown spots in the cells. 
                    The underside is very like the upper but the colours are stronger.</p>
                <img src={"/ornithoptera_goliath.png"} alt="Ornithoptera Goliath" width={500} />
                </div>
                <div className={styles.buttfly5}>
                <h3>Pachliopta Hector</h3>
                <p>The male's upperside is black. Forewing with a broad white interrupted band from the subcostal nervure 
                    opposite the origin of veins 10 and 11, extended obliquely to the tornus, and a second short pre-apical similar band; 
                    both bands composed of detached irregularly indented broad streaks in the interspaces. 
                    Hindwing with a distal posteriorly strongly curved series of seven crimson spots followed by a subterminal series of 
                    crimson lunules. Cilia black alternated with white. Underside: forewing dull brownish black, hindwing black; 
                    markings as on the upperside, but the crimson spots and crescent-shaped markings on the hindwing larger. 
                    Antennae, thorax and abdomen above at base, black; head and rest of the abdomen bright crimson; beneath: 
                    iho palpi, the sides of the thorax and abdomen crimson.
                    <br />
                    The female is similar, the discal series of spots and subterminal lunules much duller, 
                    pale crimson sprinkled with black scales; in some specimens the anterior spots and lunules almost white barely 
                    tinged with crimson; abdomen above with the black colour extended further towards the apex.
                    </p>
                <img src={"/pachliopta_hector.png"} alt="Pachliopta Hector" width={500} />
                </div>
                <div className={styles.buttfly6}>
                <h3>Parides Agavus</h3>
                <p>The Parides agavus, also known as the Agavus Swallowtail, is a visually striking butterfly that belongs 
                    to the Papilionidae family. Its wingspan can range from 3 to 4 inches, showcasing a bold contrast of colors and patterns. 
                    The primary coloration of its wings is a deep, glossy black, which serves as a dramatic backdrop for the vibrant 
                    red or pink bands that adorn the edges of its hindwings. These vivid markings are complemented by smaller, 
                    iridescent blue or green spots that add a touch of shimmer and complexity to its appearance. 
                    The butterfly's body is slender and predominantly black, with legs that may have hints of red. 
                    Its distinctive tail-like extensions on the hindwings, characteristic of swallowtail butterflies, 
                    enhance its elegant silhouette, making the Parides agavus a remarkable specimen in the butterfly world.</p>
                <img src={"/parides_agavus.png"} alt="Parides Agavus" width={500} />
                </div>
                <div className={styles.buttfly7}>
                <h3>Trogonoptera Trojana</h3>
                <p>
                    The Trogonoptera trojana, known as the Rajah Brooke's Birdwing, is an exquisite and large butterfly, 
                    hailing from the Birdwing genus that captivates with its sheer size and stunning coloration. 
                    Typically, the wingspan of this magnificent creature can stretch up to about 7 inches, 
                    making it one of the larger species within the butterfly realm. The male of the species boasts a velvety black color 
                    on the upper side of its wings, dramatically offset by an electric green or turquoise hue that forms broad, 
                    iridescent bands across the forewings and a series of smaller, similarly colored streaks on the hindwings. 
                    This contrast is not only striking but serves as a natural spectacle in the wild. The female, while larger, 
                    tends to have a more subdued color palette, with wings that are predominantly brown or black, 
                    accented with white or cream-colored spots. The Trogonoptera trojana's body is slender, 
                    with the thorax and abdomen often matching the dark hue of the wings, creating a cohesive and sleek appearance. 
                    The elegant, yet powerful flight of this butterfly, coupled with its vivid coloration, 
                    makes it a breathtaking sight in its natural rainforest habitats</p>
                <img src={"/trogonoptera_trojana.png"} alt="Trogonoptera Trojana" width={500} />
                </div>
            </div>
        </contents>
    );
}
