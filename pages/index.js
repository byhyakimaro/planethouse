import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>  
      <div className={styles.navbar}>
        <div className={styles.logo}><img src="logo.png" width="90"></img></div>
        <a href="#"><div className={styles.home}>Home</div></a>
        <a href="#"><div className={styles.about}>Sobre</div></a>
        <a href="#"><div className={styles.contact}>Localização</div></a>
        <a href="https://wa.me/5511932123063"><div className={styles.contact}>11 932123063</div></a>
      </div>
    </>
  )
}
