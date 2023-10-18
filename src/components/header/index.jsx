import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <li className={styles.listitem}>
          <Link to="/">Главная страница</Link>
        </li>
        <li className={styles.listitem}>
          <Link to="/chat">Мессенджер</Link>
        </li>
        <li className={styles.listitem}>
          <Link to="/api">Данные</Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
