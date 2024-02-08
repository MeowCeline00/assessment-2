import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";


export default function Home() {

  // Butterfly Patterns
  const classFilters = {
    //key : value
    1: 'Agrias Aedon Hewitson',
    2: 'Danaus Plexippus',
    4: 'Morpho Peleides',
    8: 'Ornithoptera Goliath',
    16: 'Pachliopta Hector',
    32: 'Parides Agavus',
    64: 'Trogonoptera Trojana'
  }

  const [input, setInput] = useState();
                                    // 3
                                    // 2 & 2 Remainder 1
                                    // 1 & 1 Remainder 0
                                    // 9
                                    // 8 & 8 Remainder 1
                                    // 1 & 1 Remainder 0
  const getClassStyle = flagValue => (input & flagValue) > 0 ? {backgroundColor: 'yellow'} : null;

  return (
    <>
      <Head>
        <title>General View of Butterfly Wing Patterns</title>
        <meta name="description" content="General View of Butterfly Wing Patterns" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/butt_favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.main}`}>
       <input
       id="input"
       type="text"
       placeholder='Bitmask Decimal'
       value={input}
       onChange={event => setInput(event.target.value)}
       />
       <table>
        <tbody>
          {
            Object.keys(classFilters).map(item => (
              <tr key={item} style={getClassStyle(item)}>
                <td>{item}</td>
                <td>{classFilters[item]}</td>
              </tr>
            ))
          }
        </tbody>
       </table>
       <Con
      </main>
      <Footer />
    </>
  );
}
