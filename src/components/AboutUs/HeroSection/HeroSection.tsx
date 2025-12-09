import styles from "./HeroSection.module.scss";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.accent}></div>
                        <div>
                            <p className={styles.label}>Accessible Education-Oriented</p>
                            <h1 className={styles.title}>'AFFORDABILITY' IS AT HEART</h1>
                        </div>
                    </div>

                    <p className={styles.description}>
                        Welcome to the London Academy of Management and Sciences (LAMS), your gateway to accessible,
                        high-quality education designed to empower individuals worldwide. At LAMS, we believe that
                        education should not be a privilege but a fundamental right, accessible to all, regardless of
                        background or financial circumstances.
                    </p>
                </div>
            </div>
        </section>
    );
}