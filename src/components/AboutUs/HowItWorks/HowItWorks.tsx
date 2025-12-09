import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserPlus, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import styles from "./HowItWorks.module.scss";

const steps = [
    {
        icon: faSearch,
        title: "Browse",
        description:
            "Browse through our wide range of courses, including certificate programmes, short courses, and executive programmes.",
    },
    {
        icon: faUserPlus,
        title: "Register",
        description:
            "Register the course that best fits your needs and interests using our user-friendly registration process.",
    },
    {
        icon: faGraduationCap,
        title: "Attend",
        description:
            "Once registered, you will have access to all learning materials and can attend classes at your convenience.",
    },
];

const HowItWorks = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.label}>HOW IT WORKS</p>
                    <h2 className={styles.title}>Invest in Your Future</h2>
                </div>

                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.iconWrapper}>
                                <FontAwesomeIcon icon={step.icon} className={styles.icon} />
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
