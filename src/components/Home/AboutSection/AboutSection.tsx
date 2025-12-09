import React from "react";
import styles from "./AboutSection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye, faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faEye} />
                        </div>
                        <h3>Vision</h3>
                        <p>
                            Become a global leader in accessible education, 
                            recognised for our commitment to excellence, affordability, and inclusivity.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faBullseye} />
                        </div>
                        <h3>Mission</h3>
                        <p>
                            Democratise education by providing accessible, 
                            high-quality courses and programmes to learners worldwide.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faBookOpen} />
                        </div>
                        <h3>Philosophy</h3>
                        <p>
                            Founded on the principles of affordability, quality, and inclusivity, 
                            LAMS believes in the transformative power of education.
                        </p>
                    </div>
                </div>

                <h2 className={styles.title}>Who we are</h2>

                <div className={styles.content}>
                    <p className={styles.intro}>
                        LAMS is an international academy based in London, offering flexible and affordable pathways in business, technology, science, and professional development.
                        We integrate modern teaching methods with practical, real-world skills to prepare learners for a successful global career. Our academy embraces diversity, 
                        welcoming students from all backgrounds — from young learners to working professionals and international applicants seeking meaningful opportunities for growth.
                    </p>
                </div>
            </div>
        </section>
    );
}
