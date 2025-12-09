import React from "react";
import Link from "next/link";
import styles from "./Banner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url('/images/banner.png')` }}>
            <div className={styles.overlay} />

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>LAMS</h1>
                    <p className={styles.subtitle}>
                        Advance your profession and enhance your abilities with a wide range of online courses, including certificates, short courses, and executive programmes.
                    </p>
                    <div className={styles.buttons}>
                        <Link href="/about" className={styles.btnPrimary}>
                            About us
                        </Link>
                        <Link href="/contact" className={styles.btnSecondary}>
                            Free Consultation
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.scroll}>
                <span>
                    <FontAwesomeIcon icon={faAngleDown}  className={styles.drownIcon}/>
                </span>
            </div>
        </section>
    );
}
