import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faBook, faHeadset } from "@fortawesome/free-solid-svg-icons";
import styles from "./FooterFeatures.module.scss";

const features = [
    {
        icon: faCertificate,
        title: "Certificates",
        description: "Earn official recognition for your work.",
    },
    {
        icon: faBook,
        title: "Coursework",
        description: "Each course is like an interactive textbook.",
    },
    {
        icon: faHeadset,
        title: "Support",
        description: "Connect with thousands of other learners.",
    },
];

const FooterFeatures = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.feature}>
                            <div className={styles.iconWrapper}>
                                <FontAwesomeIcon icon={feature.icon} className={styles.icon} />
                            </div>
                            <h3 className={styles.title}>{feature.title}</h3>
                            <p className={styles.description}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className={styles.button}>
              ALL CATEGORIES
            </button>
        </section>
    );
};

export default FooterFeatures;
