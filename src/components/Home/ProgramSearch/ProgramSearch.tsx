"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./ProgramSearch.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function ProgramSearch() {
    const [searchText, setSearchText] = useState("");
    const [selectedDept, setSelectedDept] = useState("Select Department");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const departments = [
        { id: 1, name: "D1" },
        { id: 2, name: "D2" },
        { id: 3, name: "D3" },
    ];

    const handleDeptSelect = (deptName: string) => {
        setSelectedDept(deptName);
        setIsDropdownOpen(false);
    };

    const handleSearch = () => {
        console.log("Search:", searchText, "Department:", selectedDept);
    };

    return (
        <section className={styles.section}>
            <div className={styles.background} />
            <div className={styles.overlay} />

            <div className={styles.container}>
                <h2 className={styles.title}>FIND YOUR DREAM COURSE</h2>

                <div className={styles.searchBox}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Search Program Here"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    <div className={styles.selectWrapper}>
                        <button
                            className={styles.selectButton}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span className={styles.selectText}>{selectedDept}</span>
                           <FontAwesomeIcon icon={faAngleDown}  className={styles.drownIcon}/>
                        </button>

                        {isDropdownOpen && (
                            <div className={styles.dropdown}>
                                {departments.map((dept) => (
                                    <button
                                        key={dept.id}
                                        className={styles.option}
                                        onClick={() => handleDeptSelect(dept.name)}
                                    >
                                        {dept.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/" className={styles.btn} onClick={handleSearch}>
                        FIND PROGRAM
                    </Link>
                </div>
            </div>
        </section>
    );
}
