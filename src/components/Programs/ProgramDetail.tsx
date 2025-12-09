import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProgramDetail.module.scss";

interface ProgramDetailProps {
    title: string;
    subtitle: string;
    description: string;
    fullDescription: string;
    image: string;
    sections: {
        [key: string]: {
            title: string;
            content: string[];
        };
    };
    categoryTitle: string;
    categoryLink: string;
}

export default function ProgramDetail({
    title,
    subtitle,
    description,
    fullDescription,
    image,
    sections,
    categoryTitle,
    categoryLink,
}: ProgramDetailProps) {
    return (
        <article className={styles.section}>
            <div className={styles.container}>
                {/* Hero Section */}
                <div className={styles.hero}>
                    <div className={styles.heroLeft}>
                        <h1 className={styles.title}>{title}</h1>

                        {/* Sidebar Navigation */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarBox}>
                                <h3 className={styles.sidebarTitle}>{title}</h3>
                                <nav className={styles.navMenu}>
                                    {Object.entries(sections).map(([key, section]) => (
                                        <a key={key} href={`#${key}`} className={styles.navLink}>
                                            {section.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>
                    </div>

                    <div className={styles.heroRight}>
                        <h2 className={styles.subtitle}>{subtitle}</h2>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={image}
                                alt={title}
                                width={800}
                                height={450}
                                priority
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            />
                        </div>
                        <div className={styles.desc}>
                            <p className={styles.overview}>{description}</p>
                            <p className={styles.fullDescription}>{fullDescription}</p>
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <main className={styles.content}>
                    {Object.entries(sections).map(([key, section]) => (
                        <section key={key} id={key} className={styles.contentSection}>
                            <h2 className={styles.sectionTitle}>{section.title}</h2>
                            <div className={styles.sectionContent}>
                                {section.content.map((paragraph, idx) => (
                                    <p
                                        key={idx}
                                        className={
                                            idx > 0 && paragraph.match(/^[A-Z]/) ? styles.bulletPoint : undefined
                                        }
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </section>
                    ))}
                </main>
            </div>
        </article>
    );
}
