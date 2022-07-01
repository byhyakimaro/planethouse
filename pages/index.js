import Head from 'next/head'
import React, { useEffect } from 'react'

import styles from '../styles/Home.module.css'

export default function Home() {
  const handleScroll = () => {
    if(document.documentElement.scrollTop <= 637) {
      document.querySelector('#navbar').setAttribute('style', "background-image: url('../public/home.png');")
    } else {
      document.querySelector('#navbar').setAttribute('style', "background: rgba(37, 80, 58, 1);")
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>  
      <Head>
        <title>Home - Planet House</title>
        <meta name="viewport" content="width=800" />
      </Head>
      <div className={styles.navbar} id="navbar">
        <div className={styles.logo}>
          <img src="logo.png" width="90"></img>
          <div className={styles.logotext}>Planet House Móveis Planejados</div>
          </div>
        <div className={styles.tools}>
          <a href="#content"><div>Empresa</div></a>
          <a href="#business"><div>Planejados</div></a>
          <a href="https://www.facebook.com/planethousemoveisplanejados/photos/?ref=page_internal" target="_blank" rel="noreferrer"><div>Catalogo</div></a>
          <a href="#contact"><div>Contato</div></a>
        </div>
      </div>
      <div className={styles.home}>
        <div className={styles.homecontent}>
          <div className={styles.title}>
            Somos uma empresa especializada na confecção de móveis sob medidas
          </div>
        </div>
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
          <div className={styles.warranty}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M25.8 44q-.6 0-1.15-.175-.55-.175-1.05-.675L4.85 24.4q-.5-.5-.675-1.05Q4 22.8 4 22.2V7q0-1.3.85-2.15Q5.7 4 7 4h15.2q.6 0 1.2.175t1.1.675L43.15 23.5q1 1 1 2.225t-1 2.225l-15.2 15.2q-.4.4-.975.625Q26.4 44 25.8 44Zm.1-2.9 15.2-15.2L22.2 7H7v15.2ZM12.25 14.8q1.05 0 1.825-.775.775-.775.775-1.825 0-1.05-.775-1.825Q13.3 9.6 12.25 9.6q-1.05 0-1.825.775-.775.775-.775 1.825 0 1.05.775 1.825.775.775 1.825.775ZM7 7Z"/></svg>
            <div className={styles.title}>Custo Beneficio</div>
            <div className={styles.description}>
            O melhor preço com uma condição especial de pagamento: 
            Até 12x sem acréscimo com entrada.
            </div>
          </div>
          <div className={styles.warranty}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m17.3 45-3.8-6.5-7.55-1.55.85-7.35L2 24l4.8-5.55-.85-7.35 7.55-1.55L17.3 3 24 6.1 30.7 3l3.85 6.55 7.5 1.55-.85 7.35L46 24l-4.8 5.6.85 7.35-7.5 1.55L30.7 45 24 41.9Zm1.35-3.95L24 38.8l5.5 2.25 3.35-5 5.85-1.5-.6-5.95 4.05-4.6-4.05-4.7.6-5.95-5.85-1.4-3.45-5L24 9.2l-5.5-2.25-3.35 5-5.85 1.4.6 5.95L5.85 24l4.05 4.6-.6 6.05 5.85 1.4ZM24 24Zm-2.15 6.65L33.2 19.4l-2.25-2.05-9.1 9-4.75-4.95-2.3 2.25Z"/></svg>
            <div className={styles.title}>Especialidade no Ramo</div>
            <div className={styles.description}>
            Uma Empresa com mais de 10 anos de experiencia, onde
            garantimos sua satisfação e conforto.
            </div>
          </div>
        </div>
        <div className={styles.business} id="business">
          <div className={styles.title}>Conheça Nossa Diversidade</div>
          <div className={styles.description}>
            Nossos projetos são milimetricamente projetados para o seu ambiente, utilizamos desenhos 3D de
            ultima geração para demonstrar para nossos clientes todo o processo, nossa fábrica possui 
            mais de <strong>10 anos de experiência</strong> no mercado moveleiro e produz móveis planejados 
            <strong> residenciais e corporativos</strong> para todos os ambientes como closets, dormitórios, 
            cozinhas, áreas de serviços, banheiros, home offices e escritórios.
          </div>
          <div className={styles.images}>
            <a href=""><img src="models/cozinha.png" width="240" height="240"></img></a>
            <a href=""><img src="models/sala.png" width="380" height="240"></img></a>
            <a href=""><img src="models/closet.png" width="240" height="240"></img></a>
            <a href=""><img src="models/quarto.png" width="380" height="240"></img></a>
            <a href=""><img src="models/cozinha2.png" width="240" height="240"></img></a>
            <a href=""><img src="models/sala2.png" width="380" height="240"></img></a>
          </div>
          <a href="https://wa.me/5511939517330" className={styles.budget} target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m6 18-1.417-1.417L11.167 10 4.583 3.417 6 2l8 8Z"/></svg>
            <div>Solicite seu orçamento pelo WhastApp</div>
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
        <div className={styles.contact} id="contact">
          <div className={styles.network}>
            <div className={styles.title}>conheça nossas redes sociais</div>
            <a href="https://www.facebook.com/planethousemoveisplanejados" target="_blank" rel="noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png"></img>
            </a>
            <a href="https://www.instagram.com/planethousemoveisplanejados" target="_blank" rel="noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"></img>
            </a>
            <a href="https://twitter.com/PlanetMoveis" target="_blank" rel="noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Twitter_logo.svg/1280px-Twitter_logo.svg.png"></img>
            </a>
          </div>
          <div className={styles.title}>Converse diretamente com nossa fabricante</div>
          <div className={styles.description}>
            <strong>Caieiras/Perus - SP</strong>
          </div>
          <div className={styles.description}>
            (11) 939517330
          </div>
        </div>
      </div>
      <footer>
        <div className={styles.logo}>
          <img src="logo.jpg" width="150"></img>
        </div>
        <div className={styles.details}>
          <div className={styles.title}>
          © 2022 Planet House - Móveis Planejados. Todos os direitos reservados. Desenvolvido por 
          <a href="https://www.facebook.com/knownetworks" target="_blank" rel="noreferrer"> KnowNetworks</a>.
          </div>
        </div>
      </footer>
      <div className={styles.buttonWhats}>
        <a href="https://wa.me/5511939517330" target="_blank" rel="noreferrer"><img src="https://static.whatsapp.net/rsrc.php/yz/r/lOol7j-zq4u.svg"></img></a>
      </div>
    </>
  )
}
