"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    const closeMenu = () => setOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/anhlogo.jpg"
                        alt="LAMS Logo"
                        width={120}
                        height={50}
                        priority
                        style={{ objectFit: "contain" }}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.navDesktop}>
                    <Link href="/about" className={styles.navLink}>
                        About Us
                    </Link>
                    <Link href="/programs" className={styles.navLink}>
                        Programs
                        <FontAwesomeIcon icon={faAngleDown}  className={styles.drownIcon}/>
                    </Link>
                    <Link href="/contact" className={styles.navLink}>
                        Contact Us
                    </Link>
                    <Link href="/news" className={styles.navLink}>
                        News
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className={styles.mobileToggle} aria-label="Toggle menu" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={open ? faTimes : faBars} />
                </button>
            </div>

            {/* Mobile Navigation */}
            <nav className={`${styles.navMobile} ${open ? styles.navMobileOpen : ""}`}>
                <Link href="/about" className={styles.mobileLink} onClick={closeMenu}>
                    About Us
                </Link>
                <Link href="/programs" className={styles.mobileLink} onClick={closeMenu}>
                    Programs
                </Link>
                <Link href="/contact" className={styles.mobileLink} onClick={closeMenu}>
                    Contact Us
                </Link>
                <Link href="/news" className={styles.mobileLink} onClick={closeMenu}>
                    News
                </Link>
            </nav>
        </header>
    );
}
