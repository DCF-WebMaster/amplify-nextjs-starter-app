// app/newsletter/page.tsx

import Head from 'next/head';
import styles from '../Components/Home.module.css';

export default function Newsletter() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Newsletter</title>
      </Head>
      <main className={styles.main}>
        <h1>Newsletter</h1>
        <p>Subscribe to our newsletter!</p>
        {/* Add newsletter subscription form here */}
      </main>
    </div>
  );
}
