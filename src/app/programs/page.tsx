import React from "react";
import Link from "next/link";
import styles from "./page.module.scss";

const programCategories = [
    {
        id: "undergraduate",
        title: "Undergraduate",
        programs: [{ id: "bba", title: "Bachelor of Business Administration" }],
    },
    {
        id: "postgraduate",
        title: "Postgraduate",
        programs: [{ id: "mba", title: "Master of Business Administration" }],
    },
    {
        id: "doctorate",
        title: "Doctorate",
        programs: [{ id: "dba", title: "Doctor of Business Administration" }],
    },
];

export default function ProgramsPage() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {programCategories.map((category) => (
                        <div key={category.id} className={styles.column}>
                            <h2 className={styles.categoryTitle}>{category.title}</h2>
                            <ul className={styles.programList}>
                                {category.programs.map((program) => (
                                    <li key={program.id}>
                                        <Link href={`/programs/${category.id}/${program.id}`} className={styles.link}>
                                            {program.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
