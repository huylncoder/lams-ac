import styles from './QuoteSection.module.scss';
import Image from "next/image";

const QuoteSection = () => {
  return (
    <>
      <section className={styles.section} >
      <div className={styles.background} />
      <div className={styles.overlay} />
        <div className={styles.container}>
          <blockquote className={styles.quote}>
            "We need to give every individual the opportunity to reach their full potential, 
            regardless of their background or circumstance."
          </blockquote>
          <cite className={styles.cite}>
            - Cory Booker -
          </cite>
        </div>
      </section>
    </>
  );
};

export default QuoteSection;