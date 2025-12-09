import styles from './FeatureCards.module.scss';

const features = [
  {
    number: "01",
    title: "Quality Education",
    description: "Our courses are developed and taught by industry experts and academic professionals, ensuring that you receive a top-notch education that's relevant to today's demands."
  },
  {
    number: "02",
    title: "Affordable Pricing",
    description: "We understand the importance of making education accessible. That's why we strive to keep our prices affordable, making it possible for anyone to pursue their educational goals without financial strain."
  },
  {
    number: "03",
    title: "Diverse Offerings",
    description: "From business management to IT certifications, we offer a wide range of courses to cater to diverse interests and career aspirations."
  }
];

const FeatureCards = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.number}>{feature.number}</span>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
