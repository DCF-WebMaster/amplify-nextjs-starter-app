// components/Navbar.tsx

import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/newsletter">Newsletter</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/team">Meet the Team</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/events">Upcoming Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
