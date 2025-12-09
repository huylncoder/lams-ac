import "./globals.scss";
import React from "react";
import MainLayout from "../components/layout/MainLayout/MainLayout";

export const metadata = {
    title: "LAMS - London Academy of Management and Sciences",

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
