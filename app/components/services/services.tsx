import styles from './page.module.css';

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.title}>Our Services</h1>
      
      <div className={styles.grid}>
        <section className={styles.card}>
          <h1 className={styles.cardTitle}>Marketing</h1>
          <p className={styles.cardText}>
            This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.
          </p>
        </section>

        <section className={styles.card}>
          <h1 className={styles.cardTitle}>SEO/SEM</h1>
          <p className={styles.cardText}>
            This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.
          </p>
        </section>

        <section className={styles.card}>
          <h1 className={styles.cardTitle}>Viral Campaign</h1>
          <p className={styles.cardText}>
            This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Services;
