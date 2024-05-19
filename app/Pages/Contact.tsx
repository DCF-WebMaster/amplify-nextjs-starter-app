// app/contact/page.tsx

import Head from 'next/head';
import styles from '../Components/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className={styles.main}>
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us!</p>
        {/* Add contact form here */}
      </main>
    </div>
  );
}
