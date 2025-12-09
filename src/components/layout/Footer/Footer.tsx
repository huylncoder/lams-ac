import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* About us */}
                    <div className={styles.section}>
                        <h3>About us</h3>
                        <p>
                            Welcome to the LAMS, 
                            a premier platform offering courses from top universities and institutions around the world.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h3>Page</h3>
                        <ul>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/programs">Programs</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link href="/news">News</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Blog */}
                    <div className={styles.section}>
                        <h3>Blog</h3>
                        <ul>
                            <li>
                                <Link href="/news">
                                    The Importance Of Occupational Standards To Higher Education Learners
                                </Link>
                            </li>
                            <li>
                                <Link href="/news">
                                    5 Most Common Master’s Degrees In 2023
                                </Link>
                            </li>
                            <li>
                                <Link href="/news">
                                    The Critical Power of Self-Assessment for Lifelong Learners
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.section}>
                        <h3>Contact</h3>
                        <p>Email: info@lams.edu</p>
                        <p>Phone: +44 (0) 123 456 7890</p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} LAMS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
