import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./MainLayout.module.scss";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.root}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
}
