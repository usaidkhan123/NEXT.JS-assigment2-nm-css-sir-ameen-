import Image from 'next/image';
import hero1 from "@/public/hero4.jpg";
import hero2 from "@/public/hero5.jpg";
import styles from './page.module.css';

const PortFolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio Projects</h1>
      
      <div className={styles.project}>
        <h2 className={styles.projectTitle}>Project 1</h2>
        <h3 className={styles.projectSubtitle}>E-commerce Mobile App Design</h3>
        <p className={styles.description}>
          Is simply dummy text of the printing and typesetting industry. Lorem has been the industry s standard dummy text ever since the 1500s when the specimen book was first created. It has survived not only five centuries but also the leap into electronic typesetting  remaining essentially unchanged.
        </p>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={hero1}
            alt="E-commerce App Design"
            width={400}
            height={250}
            objectFit="cover"
          />
        </div>
      </div>

      <div className={styles.project}>
        <h2 className={styles.projectTitle}>Project 2</h2>
        <h3 className={styles.projectSubtitle}>Social Media Mobile App Design</h3>
        <p className={styles.description}>
          Is simply dummy text of the printing and typesetting industry. Lorem has been the industry s standard dummy text ever since the 1500s when the specimen book was first created. It has survived not only five centuries but also the leap into electronic typesetting  remaining essentially unchanged.
        </p>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={hero2}
            alt="Social Media App Design"
            width={400}
            height={250}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
