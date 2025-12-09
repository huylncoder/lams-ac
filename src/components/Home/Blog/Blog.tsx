import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blog.module.scss";

export default function NewsSection() {
    const articles = [
        {
            id: 1,
            title: "The Importance Of Occupational Standards To Higher Education Learners: 3 Reasons Why.",
            excerpt:
                "In today's fast-paced job market, employees must have a thorough understanding of the skills, knowledge, and behaviours required for their position.",
            date: "2024-11-09",
            image: "/images/blog1.jpg",
        },
        {
            id: 2,
            title: "5 Most Common Master's Degrees In 2023",
            excerpt:
                "In a world of perpetual change and boundless opportunities, the pursuit of higher education has never been more integral to personal and professional growth.",
            date: "2024-08-27",
            image: "/images/blog2.jpg",
        },
        {
            id: 3,
            title: "The Critical Power of Self-Assessment for Lifelong Learners",
            excerpt:
                "Self-assessment is a powerful tool for personal growth, development, and learning. It involves taking a step back from your daily routine to examine your thoughts, behaviours, and experiences.",
            date: "2025-09-23",
            image: "/images/blog3.jpg",
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>London Academy of Management and Sciences</h2>

                <div className={styles.grid}>
                    {articles.map((article) => (
                        <article key={article.id} className={styles.card}>
                            <div className={styles.image}>
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    width={400}
                                    height={250}
                                    priority
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <time dateTime={article.date}>
                                        {new Date(article.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </time>
                                </div>
                                <h3>{article.title}</h3>
                                <p>{article.excerpt}</p>
                                <Link href="/news" className={styles.link}>
                                    Read more →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
