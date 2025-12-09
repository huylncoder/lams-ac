import React from "react";
import Link from "next/link";
import styles from "./page.module.scss";

export const metadata = {
    title: "Postgraduate Programs — LAMS",
    description: "Explore LAMS postgraduate programs",
};

const programs = [{ id: "mba", title: "Master of Business Administration" }];

export default function PostgraduateListPage() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Postgraduate Programs</h1>
                <p className={styles.pageDescription}>
                    Advance your career with our master's level programs designed for experienced professionals.
                </p>

                <div className={styles.programsGrid}>
                    {programs.map((program) => (
                        <Link
                            key={program.id}
                            href={`/programs/postgraduate/${program.id}`}
                            className={styles.programCard}
                        >
                            <h3>{program.title}</h3>
                            <span className={styles.arrow}>→</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
