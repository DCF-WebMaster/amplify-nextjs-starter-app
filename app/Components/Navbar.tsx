// components/Navbar.tsx

import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="../page">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="./Newsletter">Newsletter</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="./Contact">Contact Us</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="./Team">Meet the Team</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="./Events">Upcoming Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
