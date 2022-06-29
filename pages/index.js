import Head from 'next/head'
import React, { useEffect } from 'react'

import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <>  
      <Head>
        <title>Home - Planet House</title>
      </Head>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src="logo.png" width="90"></img>
          <div className={styles.logotext}>Planet House Móveis Planejados</div>
          </div>
        <div className={styles.tools}>
          <a href="#"><div >Home</div></a>
          <a href="#"><div>Sobre</div></a>
          <a href="#"><div>Localização</div></a>
          <a href="https://wa.me/5511932123063">
            <div className={styles.contact}>11 932123063</div>
          </a>
        </div>
      </div>
      <div className={styles.home}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Moveis Planejados</div>
        <div className={styles.description}>Trabalhamos com móveis planejados, e na otimização do seu espaço, para o melhor aproveitamento, unindo estetica e glamour num mesmo ambiente. Wats</div>
      </div>
    </>
  )
}
