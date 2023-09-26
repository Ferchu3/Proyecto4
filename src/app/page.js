import Image from 'next/image'
import styles from "./page.module.css"
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header id="header" className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}> </span>
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
      <section id="info" className={styles.infoSection}>
        <img
          src = "/imagen-para-website.png"
          alt = "Imagen"
          className = {styles.image}
        />
        <div className={styles.infoContainer}>
          <span className={styles.title + "" + styles.greenText}>Lionel</span>
          <br />
          <span className={styles.title}>Messi</span>
          <div className={styles.list}>
            <ul>
              <li>
                <span className={styles.grayText}>Age: </span> 15
              </li>
              <li>
                <span className={styles.grayText}>Nacionality: </span>Guatemaltecan
              </li>
              <li>
                <span className={styles.grayText}>Skills: </span> Chambeador 
              </li>
              <li>
                <span className={styles.grayText}>Languages: </span> English. Spanish
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );   
}