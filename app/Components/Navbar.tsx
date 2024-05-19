// components/Navbar.tsx

import Link from 'next/link';
import styles from '../Components/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="../page.tsx">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="../Pages/Newsletter.tsx">Newsletter</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="../Pages/Contact.tsx">Contact Us</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="../Pages/Team">Meet the Team</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="../Pages/Events">Upcoming Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
