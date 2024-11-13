import styles from './page.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <span className={styles.logo}>
        LandingPage.X
      </span>
  
      <ul className={styles.navList}>
        <li><a href="">Home</a></li>
        <li><a href="">Aboutus</a></li>
        <li><a href="">Contacts</a></li>
        <li><a href="">Services</a></li>
      </ul>

      <button className={styles.loginButton}>
        Login
      </button>
    </div>
  );
};

export default Header;
