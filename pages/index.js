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
          <a href="."><div>Empresa</div></a>
          <a href="#"><div>Planejados</div></a>
          <a href="#"><div>Escritorio</div></a>
          <a href="https://wa.me/5511932123063">
            <div className={styles.contact}>Contato</div>
          </a>
        </div>
      </div>
      <div className={styles.home}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>Conheça a Empresa Planet House</div>
          <div className={styles.description}>
          Somos uma Empresa especialista em conforto e bem-estar que possui mais de <strong>10 anos de experiência no setor.</strong>
          </div>
          <div className={styles.description}>
          Trabalhamos com móveis planejados, e na otimização do seu 
          espaço, para o melhor aproveitamento, unindo estetica e glamour num mesmo ambiente
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.warranty}>
            <div className={styles.title}>Garantia de 5 Anos</div>
            <div className={styles.description}>
              Nossos móveis planejados possuem 5 anos de garantia para seu conforto e segurança em comprar conosco.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonWhats}>
        <a href="https://wa.me/5511932123063"><img src="https://static.whatsapp.net/rsrc.php/yz/r/lOol7j-zq4u.svg"></img></a>
      </div>
    </>
  )
}
