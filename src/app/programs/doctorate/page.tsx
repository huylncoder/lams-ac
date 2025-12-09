import React from "react";
import Link from "next/link";
import styles from "./page.module.scss";

export const metadata = {
    title: "Doctorate Programs — LAMS",
    description: "Explore LAMS doctorate programs",
};

const programs = [{ id: "dba", title: "Doctor of Business Administration" }];

export default function DoctorateListPage() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Doctorate Programs</h1>
                <p className={styles.pageDescription}>
                    Pursue doctoral-level research and contribute to knowledge advancement.
                </p>

                <div className={styles.programsGrid}>
                    {programs.map((program) => (
                        <Link
                            key={program.id}
                            href={`/programs/doctorate/${program.id}`}
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
