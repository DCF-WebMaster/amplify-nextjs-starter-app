// pages/index.js

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Gallery from '../Components/Gallery';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next.js Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Next.js Home Page
        </h1>

        <Gallery />
      </main>
    </div>
  );
}
