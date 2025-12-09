import React from "react";
import Link from "next/link";
import styles from "./WhyChooseSection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faClock, faGlobe, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseSection() {
    const reasons = [
        {
            icon: faDollarSign,
            title: "Học phí phải chăng",
        },
        {
            icon: faClock,
            title: "Học tập linh hoạt",
        },
        {
            icon: faGlobe,
            title: "Chương trình giảng dạy tập trung toàn cầu",
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h2 className={styles.title}>Why Choose LAMS?</h2>
                        <p className={styles.subtitle}>
                            At LAMS, we believe that quality education should empower rather than limit. 
                            Our institution is built around the values of accessibility, innovation, 
                            and real-world relevance — ensuring every learner gains the knowledge, confidence, 
                            and practical skills needed to thrive in today's global environment. W
                            hether you are starting your academic journey or advancing your career, 
                            LAMS provides a supportive pathway toward meaningful success.
                        </p>

                        <div className={styles.reasons}>
                            {reasons.map((reason, idx) => (
                                <div key={idx} className={styles.item}>
                                    <div className={styles.icon}>
                                        <FontAwesomeIcon icon={reason.icon} />
                                    </div>
                                    <div className={styles.text}>
                                        <h4>{reason.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link href="/about" className={styles.btn}>
                            About LAMS
                        </Link>
                    </div>

                    <div className={styles.right} style={{ backgroundImage: `url('/images/career-readiness.jpg')` }}>
                        <div className={styles.card}>
                            <h3>Full Accreditation</h3>
                            <p>
                                LAMS works in partnership with recognized educational bodies to ensure that our programmes meet high academic and industry standards. 
                                Our qualifications are designed to align with international frameworks, 
                                giving students confidence that the education they receive is credible, reputable, and globally relevant.
                            </p>

                            <div className={styles.stats}>
                                <div className={styles.stat}>
                                    <span className={styles.number}>70%</span>
                                    <span className={styles.label}>International Learners</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.number}>50%</span>
                                    <span className={styles.label}>Average Tuition Savings</span>
                                </div>
                            </div>
                            <div>
                                <Link href="/about" className={styles.btn}>
                                    Careeer Services & Center
                                    <FontAwesomeIcon icon={faArrowRight} className={styles.arrowRight}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
