import styles from './page.module.css';

const Aboutus = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Boost Your <br className={styles.lineBreak} />
        <span className={styles.highlight}>Website</span> SEO
      </h1>

      <p className={styles.description}>
        This is simply dummy text of the printing and typesetting industry. Lorem has been the industry s standard dummy text ever since the 1500s when the specimen book was first created. It has survived not only five centuries but also the leap into electronic typesetting.
      </p>
    </div>
  );
};

export default Aboutus;
