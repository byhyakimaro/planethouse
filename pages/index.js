import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>  
      <Head>
        <title>Home - Planet House</title>
      </Head>
      <div className={styles.navbar}>
        <div className={styles.logo}><img src="logo.png" width="90"></img></div>
        <div className={styles.tools}>
          <a href="#"><div className={styles.home}>Home</div></a>
          <a href="#"><div className={styles.about}>Sobre</div></a>
          <a href="#"><div className={styles.locate}>Localização</div></a>
          <a href="https://wa.me/5511932123063">
            <div className={styles.contact}>11 932123063</div>
          </a>
        </div>
      </div>
      <div className={styles.home}>
        <img src="home.png"></img>
      </div>
    </>
  )
}
