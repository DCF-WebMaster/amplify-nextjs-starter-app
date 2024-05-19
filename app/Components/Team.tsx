// app/team/page.tsx

import Head from 'next/head';
import styles from '../Components/Home.module.css';

export default function Team() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meet the Team</title>
      </Head>
      <main className={styles.main}>
        <h1>Meet the Team</h1>
        <p>Get to know our amazing team members!</p>
        {/* Add team member profiles here */}
      </main>
    </div>
  );
}
