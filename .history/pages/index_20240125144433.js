import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Home.module.css";


export default function Home() {

  // Maplestory
  const classFilters = {
    1: 'Magician',
    2: 'Thief',
    4: 'Warrior',
    8: 'Bowman',
    16: 'Pirate',
    32: 'Nothing'
  }

  const [input, setInput] = useState();

  const getClassStyle = flagValue => (input & flagValue) > 0 ? {backgroundColor: 'yellow'} : null;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>header area</header>
      <main className={`${styles.main}`}>
       <input
       id="input"
      </main>
    </>
  );
}
