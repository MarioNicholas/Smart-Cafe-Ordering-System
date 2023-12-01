import React from "react";

import styles from "./MealsSummary.module.css"

const MealsSummary = () => {
    return (
        <section className={styles.summary}>
            <h2>Pokonya yang enak enak aja</h2>
            <p>
                Kami menyediakan makanan spesial yang pastinya akan sangat bisa
                anda dan keluarga anda nikmati di rumah masing-masing
            </p>
            <p>
                Masakan kami dibuat dengan penuh kasih sayang dan menggunakan bahan-
                bahan yang berkualitas tinggi oleh koki yang berpengalaman.
            </p>
        </section>
    )
}

export default MealsSummary