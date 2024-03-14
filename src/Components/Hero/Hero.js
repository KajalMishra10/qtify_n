import React from "react";
import headphone from "../../assets/vibrating.png";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroTitle}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div className={styles.HeroImage}>
        <img src={headphone} width={122} alt="headphones" />
      </div>
    </div>
  );
}
