import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Home.module.css";


export default function Home() {

  // Maplestory
  const classFilters = {
    //key : value
    1: 'Magician',
    2: 'Thief',
    4: 'Warrior',
    8: 'Bowman',
    16: 'Pirate',
    32: 'Nothing'
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
        <title>Create Next App</title>
        <meta name="description" content="General View of " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/butt_favicon.ico" />
      </Head>
      <header>header area</header>
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
      </main>
      <footer>footer area</footer>
    </>
  );
}
