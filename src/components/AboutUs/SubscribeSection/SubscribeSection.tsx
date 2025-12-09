import styles from './SubscribeSection.module.scss';

const SubscribeSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Subscribe</h2>
        <p className={styles.description}>
          Get the latest news and articles to your inbox every month.
        </p>
        <form className={styles.form}>
          <input 
            type="email" 
            placeholder="Enter your email"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
