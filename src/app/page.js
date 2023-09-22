import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span>Ferchu Oliva</span>
          </h1>
        </div>
      </header>
      <section className={styles.infoSecion}>
        <img
          src="/imagen-para-website.png"
          alt="imagen"
          className={styles.image}
        />
        <div className={styles.infoContainer}>
          <span className={styles.title +" " +styles.yellowText}>Lionel</span>
          <br />
          <span className={styles.title}>Messi</span>
        </div>
        <div className={styles.list}>
          <ul>
            <li>
              <span className={styles.grayText}> Age: </span> 15
            </li>  
            <li>
              <span className={styles.grayText}> Nacionality: </span> Guatemaltecan
            </li>
            <li>
              <span className={styles.grayText}> Skill set: </span> Project Management and Financial Performance
            </li>
            <li>
              <span className={styles.grayText}> Languages: </span> Spanish, English
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}