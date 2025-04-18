import React, { useState } from 'react';
import styles from './MenuHamburger.module.css';

const MenuHamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className={styles.hamburger}>
        ☰
      </button>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.menuItem}>Item 1</div>
        <div className={styles.menuItem}>Item 2</div>
        <div className={styles.menuItem}>Item 3</div>
      </div>
    </div>
  );
};

export default MenuHamburger;
