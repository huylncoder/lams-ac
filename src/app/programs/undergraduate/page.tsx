import React from "react";
import Link from "next/link";
import styles from "./page.module.scss";

export const metadata = {
    title: "Undergraduate Programs — LAMS",
    description: "Explore LAMS undergraduate programs",
};

const programs = [{ id: "bba", title: "Bachelor of Business Administration" }];

export default function UndergraduateListPage() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Undergraduate Programs</h1>
                <p className={styles.pageDescription}>
                    Explore our comprehensive undergraduate programs designed to build your career foundation.
                </p>

                <div className={styles.programsGrid}>
                    {programs.map((program) => (
                        <Link
                            key={program.id}
                            href={`/programs/undergraduate/${program.id}`}
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
