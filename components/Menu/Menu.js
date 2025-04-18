// components/Menu.js
import { useState } from 'react';
import styles from './Menu.module.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.menu}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${styles.menuList} ${isOpen ? styles.menuListOpen : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
