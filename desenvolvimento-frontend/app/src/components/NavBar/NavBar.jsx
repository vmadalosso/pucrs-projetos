import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Home, BookOpenText, Car, CirclePlus } from 'lucide-react';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
          <Home />
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>
            <BookOpenText />
            Sobre
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/lista" className={styles.navLink}>
            <Car />
            Carros
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/adicionar" className={styles.navLink}>
            <CirclePlus />
            Add Carro
          </Link>
        </li>
      </ul>
    </nav>
  );
}
