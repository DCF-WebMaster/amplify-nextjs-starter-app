// app/events/page.tsx

import Head from 'next/head';
import styles from '../Components/Home.module.css';

export default function Events() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Upcoming Events</title>
      </Head>
      <main className={styles.main}>
        <h1>Upcoming Events</h1>
        <p>Check out our upcoming events!</p>
        {/* Add events list or calendar here */}
      </main>
    </div>
  );
}
