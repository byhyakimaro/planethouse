import Head from 'next/head'
import React, { useEffect } from 'react'

import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {

  })

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
          <a href="#content"><div>Empresa</div></a>
          <a href="#business"><div>Planejados</div></a>
          <a href="#"><div>Escritorio</div></a>
          <a href="https://wa.me/5511932123063">
            <div className={styles.contact}>Contato</div>
          </a>
        </div>
      </div>
      <div className={styles.home}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>
      </div>
      <div className={styles.content} id="content">
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
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7 44q-1.2 0-2.1-.9Q4 42.2 4 41V17q0-1.2.9-2.1.9-.9 2.1-.9h11.85V7q0-1.2.9-2.1.9-.9 2.1-.9h4.35q1.2 0 2.1.9.9.9.9 2.1v7H41q1.2 0 2.1.9.9.9.9 2.1v24q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V17H29.2q0 1.4-.925 2.2-.925.8-2.325.8h-3.9q-1.35 0-2.275-.8-.925-.8-.925-2.2H7v24Zm4.6-5.35h11.95v-.7q0-.9-.45-1.6-.45-.7-1.15-.95-1.6-.55-2.5-.725-.9-.175-1.75-.175-.95 0-2.025.225t-2.425.675q-.75.25-1.2.95-.45.7-.45 1.6Zm16.8-3.35h8.5v-2.5h-8.5Zm-10.7-2.5q1.15 0 1.925-.8.775-.8.775-1.9 0-1.15-.775-1.925-.775-.775-1.925-.775-1.1 0-1.9.775-.8.775-.8 1.925 0 1.1.8 1.9.8.8 1.9.8Zm10.7-3.15h8.5v-2.5h-8.5ZM21.85 17h4.35V7h-4.35ZM24 29Z"/></svg>
            <div className={styles.title}>Garantia de 5 Anos</div>
            <div className={styles.description}>
              Nossos móveis planejados possuem 5 anos de garantia para seu conforto e segurança em comprar conosco.
            </div>
          </div>
          <div className={styles.warranty}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7 25.85V31h34v-5.15ZM7 4h34q1.2 0 2.1.9.9.9.9 2.1v24q0 1.2-.9 2.1-.9.9-2.1.9h-9.7v10L24 40.3 16.7 44V34H7q-1.2 0-2.1-.9Q4 32.2 4 31V7q0-1.2.9-2.1Q5.8 4 7 4Zm0 16.45h34V7H7ZM7 31V7v24Z"/></svg>
            <div className={styles.title}>Designer Planejados</div>
            <div className={styles.description}>
              Nossa equipe especializada vai desenvolver sem custo o projeto que você sonhou, milimetricamente do seu jeito.
            </div>
          </div>
        </div>
        <div className={styles.business} id="business">
          <div className={styles.title}>Conheça Nossa Diversidade</div>
          <div className={styles.description}>
            Nossos projetos são milimetricamente projetados para o seu ambiente, utilizamos desenhos 3D de
            ultima geração para demonstrar para nossos clientes todo o processo, nossa fábrica da possui 
            mais de <strong>10 anos de experiência</strong> no mercado moveleiro e produz móveis planejados 
            <strong> residenciais e corporativos</strong> para todos os ambientes como closets, dormitórios, 
            cozinhas, áreas de serviços, banheiros, home offices e escritórios.
          </div>
          <div className={styles.images}>
            <img src="models/cozinha.png" width="240" height="240"></img>
            <img src="models/sala.png" width="380" height="240"></img>
            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fplanethousemoveisplanejados%2Fvideos%2F947463269072240%2F&show_text=false&width=267&t=0" width="400" height="240"></iframe>
            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fplanethousemoveisplanejados%2Fvideos%2F266554894820795%2F&show_text=false&width=261&t=0" width="400" height="240"></iframe>
            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fplanethousemoveisplanejados%2Fvideos%2F521239651983527%2F&show_text=false&width=476&t=0" width="400" height="240"></iframe>
            <img src="models/closet.png" width="240" height="240"></img>
          </div>
          <a href="https://wa.me/5511932123063" className={styles.budget}>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m6 18-1.417-1.417L11.167 10 4.583 3.417 6 2l8 8Z"/></svg>
            <div>Venha Fazer seu Orçamento dos Sonhos</div>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8 18-8-8 8-8 1.417 1.417L2.833 10l6.584 6.583Z"/></svg>
          </a>
        </div>
        <div className={styles.comments}>
          <div className={styles.title}>Satisfação de Nossos Clientes</div>
          <div className={styles.text}>
            Prezamos Pela Qualidade e Velocidade de Entrega Para <strong>Satisfação de nossos clientes.</strong>
          </div>
          <div className={styles.description}>
            <img src="https://i.imgur.com/MgTJnWe.png" width="420"></img>
            <img src="https://i.imgur.com/TYwQZBj.png" width="420"></img>
            <img src="https://i.imgur.com/SORpBWV.png" width="220"></img>
            <img src="https://i.imgur.com/NJwxPSj.png" width="220"></img>
            <img src="https://i.imgur.com/3uX4a2G.png" width="320"></img>
            <img src="https://i.imgur.com/SmIanoT.png" width="220"></img>
            <img src="https://i.imgur.com/qWPSFOp.png" width="220"></img>
            <img src="https://i.imgur.com/cHiOiyS.png" width="420"></img>
            <img src="https://i.imgur.com/mcEro05.png" width="580"></img>
            <img src="https://i.imgur.com/7sVYYbD.png" width="220"></img>
            <img src="https://i.imgur.com/VLAVaIA.png" width="420"></img>
          </div>
        </div>
        <footer>

        </footer>
      </div>
      <div className={styles.buttonWhats}>
        <a href="https://wa.me/5511932123063"><img src="https://static.whatsapp.net/rsrc.php/yz/r/lOol7j-zq4u.svg"></img></a>
      </div>
    </>
  )
}
