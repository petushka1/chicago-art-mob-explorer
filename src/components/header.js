import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import cat from './cat.svg';
import Navbar from './navbar';

const Header = () => {
  const [exhibitions, total] = useSelector((state) => state.gallery);
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.color}>
        <div className={styles.home}>
          <NavLink to="/">
            <img className="icon" src={cat} />
          </NavLink>
        </div>
        <div className={styles.header}>
          <div className={styles.logo}>
            <span>Art</span>
            <span>Institute</span>
            <span>Chicago</span>
          </div>
          <div className={styles.title}>
            <h1 className={styles.titleText}>Exhibitions</h1>
            <p className={styles.total}>Total: {total}</p>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
