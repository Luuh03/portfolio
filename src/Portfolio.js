import { useState } from 'react';
import { FaRegFileLines, FaRegEnvelope, FaBars, FaXmark } from "react-icons/fa6";
import { Box, Button, Fade, Modal, Typography, Backdrop } from '@mui/material';

import './Portfolio.css';
import curriculo from './assets/files/Curriculo Luan Emidio de Queiroz.pdf';

import fotoLuan from './assets/imgs/luanPicture.png';
import citLogo from './assets/imgs/citLogo.png';
import apexLogo from './assets/imgs/apexLogo.png';
import githubIcon from './assets/imgs/icons/11icon_github.png';
import linkedinIcon from './assets/imgs/icons/linkedin.png';
import wedfy from './assets/imgs/projects/wedfy.png';
import naturezaViva from './assets/imgs/projects/naturezaViva.png';
import estoque from './assets/imgs/projects/estoque.png';
import agenda from './assets/imgs/projects/agenda.png';

function Portfolio() {
  // importação dos ícones da seção Habilidades
  const importIcones = (r) => {
    return r.keys().map(r)
  }
  const icones = importIcones(require.context('./assets/imgs/icons', false, /\.png$/));

  // controle do menu na versão mobile
  const [abreMenu, setAbreMenu] = useState(false);
  function FechaMenuMobile() {
    setAbreMenu(false);
  }

  //
  const [abreModal, setAbreModal] = useState(false);
  const abrirModal = () => setAbreModal(true);
  const fecharModal = () => setAbreModal(false);

  return (
    <div className='portfolio'>
      <header className='portfolio-header'>
        <nav>
          <div className='mobile' onClick={() => {
            setAbreMenu(!abreMenu);
          }}>
            <FaBars id='abrir' />
            <FaXmark id='fechar' />
          </div>

          <ul className={abreMenu ? "open" : ""}>
            <li><a href="#sobre" onClick={FechaMenuMobile}>Sobre mim</a></li>
            <li><a href="#habilidades" onClick={FechaMenuMobile}>Habilidades</a></li>
            <li><a href="#experiencia" onClick={FechaMenuMobile}>Experiência</a></li>
            <li><a href="#projetos" onClick={FechaMenuMobile}>Projetos</a></li>
            <li><a href="#contato" onClick={FechaMenuMobile}>Contato</a></li>
          </ul>

        </nav>
      </header>
      <main>
        <section className='inicio'>
          <div className='containerImagem'>
            <img src={fotoLuan} alt='Foto Luan Queiroz' />
          </div>

          <div className='containerApresentacao'>
            <h1>Olá! Eu sou o <br /><span>Luan Queiroz</span></h1>
            <h2>Desenvolvedor FullStack</h2>

            <a href={curriculo} download='Curriculo Luan'>
              <button><FaRegFileLines />Baixar CV</button>
            </a>
          </div>

          <div className='containerContato'>
            <ul>
              <li><a href='https://github.com/Luuh03' target='_blank' rel='noreferrer'><img src={githubIcon} alt='Ícone GitHub' />Luuh03</a></li>
              <li><a href='https://www.linkedin.com/in/luan-queiroz/' target='_blank' rel='noreferrer'><img src={linkedinIcon} alt='Ícone LinkedIn' />Luan Queiroz</a></li>
              <li><a href='mailto:luan.queiroz2003@gmail.com'><FaRegEnvelope />luan.queiroz2003@gmail.com</a></li>
            </ul>
          </div>

        </section>

        <hr id='sobre' />

        <section className='secao sobre'>
          <h1>Sobre mim</h1>

          <p>
            Desenvolvedor FullStack com experiência em React, ASP.NET Core, HTML, CSS, JavaScript, Java, C# e PHP.
            Meu interesse em programação surgiu aos meus 14 anos quando comecei o curso técnico em informática da Etec de Hortolândia com o desenvolvimento de sites usando HTML e CSS.
          </p>
          <p>
            Também obtive experiência profissional em projetos gerenciados por Metodologias Ágeis como SCRUM e Kanban.
            Formado em Análise e Desenvolvimento de Sistemas no IFSP Campus Hortolândia.
          </p>
          <p>
            Atualmente meu foco é buscar oportunidades para desenvolver aplicações inovadoras e acessíveis que gerem impacto de forma eficiente.
          </p>

        </section>

        <hr id='habilidades' />

        <section className='secao habilidades'>
          <h1>Habilidades</h1>

          <div className='containerHabilidades'>
            <fieldset className='frontend secaoHabilidades'>
              <legend>Front-end</legend>

              <ul>
                <li><img src={icones[0]} alt='Ícone HTML5' />HTML5</li>
                <li><img src={icones[1]} alt='Ícone CSS3' />CSS3</li>
                <li><img src={icones[2]} alt='Ícone JavaScript' />JavaScript</li>
                <li><img src={icones[3]} alt='Ícone React' />React</li>
              </ul>
            </fieldset>

            <fieldset className='backend secaoHabilidades'>
              <legend>Back-end</legend>

              <ul>
                <li><img src={icones[4]} alt='Ícone CSharp' />CSharp</li>
                <li><img src={icones[5]} alt='Ícone Java' />Java</li>
                <li><img src={icones[6]} alt='Ícone PHP' />PHP</li>
                <li><img src={icones[7]} alt='Ícone ASP.Net Core' />ASP.Net Core</li>
                <li><img src={icones[8]} alt='Ícone MySQL' />MySQL</li>
              </ul>
            </fieldset>

            <fieldset className='ferramentas secaoHabilidades'>
              <legend>Ferramentas</legend>

              <ul>
                <li><img src={icones[9]} alt='Ícone Figma' />Figma</li>
                <li><img src={icones[10]} alt='Ícone Git' />Git</li>
                <li><img src={icones[11]} alt='Ícone GitHub' />GitHub</li>
                <li><img src={icones[12]} alt='Ícone Visual Studio' />Visual Studio</li>
                <li><img src={icones[13]} alt='Ícone Jira' />Jira</li>
                <li><img src={icones[14]} alt='Ícone Eclipse IDE' />Eclipse IDE</li>
                <li><img src={icones[15]} alt='Ícone Visual Studio Code' />Visual Studio Code</li>
              </ul>
            </fieldset>

            <fieldset className='metodologias secaoHabilidades'>
              <legend>Metodologias</legend>

              <ul>
                <li><img src={icones[16]} alt='Ícone sprint Scrum' />Scrum</li>
                <li><img src={icones[17]} alt='Ícone quadro Kanban' />Kanban</li>
              </ul>
            </fieldset>

          </div>

        </section>

        <hr id='experiencia' />

        <section className='secao'>
          <h1>Experiência</h1>

          <div className='containerExperiencia'>
            <div className='cardExperiencia'>
              <span className='data'>Fev/2022 - Mar/2023</span>

              <img src={citLogo} alt='Logo CI&T' />
              <strong>Estagiario de Desenvolvimento</strong>

              <p>Responsável por desenvolvimento de novas rotas em APIs, correção de código, testes unitários e injeção de dados.</p>
              <p><span>Tecnologias:</span> ASP.Net Core, C#, SQL, API REST, AWS</p>
            </div>

            <div className='cardExperiencia'>
              <span className='data'>Mai/2024 - Jun/2024</span>

              <img src={apexLogo} alt='Logo Apex America' />
              <strong>Consultor de Atendimento Bilíngue (Inglês)</strong>

              <p>Responsável por realizar atendimento em inglês de clientes por chat e ligação.</p>
              <p><span>Competências:</span> Escrita e fala em inglês, resolução de problemas</p>
            </div>
          </div>

        </section>

        <hr id='projetos' />

        <section className='secao'>
          <h1>Projetos</h1>

          <div className='containerProjetos'>

            <Button onClick={abrirModal} >
              <div className='cardProjeto'>
                <div className='imagemProjeto' style={{ backgroundImage: `url(${wedfy})` }} ></div>
                <h2 className='nomeProjeto'>WedFY</h2>
                <h2 className='verDetalhes'>Ver detalhes do projeto</h2>
              </div>
            </Button>

            <Modal
              open={abreModal}
              onClose={fecharModal}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={abreModal}>
                <Box className='modalProjeto'>
                  <Typography variant="h1" className='tituloModal'>
                    Wedfy
                  </Typography>
                  <Typography className='descricaoModal'>
                    O Wedfy é uma aplicação web que desenvolvi como a primeira versão de uma plataforma 
                    de <i>freelancing</i> onde desenvolvedores tem acesso a recomendações de notícias e conteúdos 
                    para ajudar a se desenvolver profissionalmente além de se inscrever para desenvolver projetos.
                  </Typography>
                  <Typography className='descricaoModal'>
                    O Wedfy é uma aplicação web que desenvolvi como a primeira versão de uma plataforma 
                    de <i>freelancing</i> onde desenvolvedores tem acesso a recomendações de notícias e conteúdos 
                    para ajudar a se desenvolver profissionalmente além de se inscrever para desenvolver projetos.
                  </Typography>
                </Box>
              </Fade>
            </Modal>

            <Button >
              <div className='cardProjeto'>
                <div className='imagemProjeto' style={{ backgroundImage: `url(${naturezaViva})` }} ></div>
                <h2 className='nomeProjeto'>Natureza Viva</h2>
                <h2 className='verDetalhes'>Ver detalhes do projeto</h2>
              </div>

            </Button>

            <Button >
              <div className='cardProjeto'>
                <div className='imagemProjeto' style={{ backgroundImage: `url(${estoque})` }} ></div>
                <h2 className='nomeProjeto'>App Estoque</h2>
                <h2 className='verDetalhes'>Ver detalhes do projeto</h2>
              </div>
            </Button>

            <Button >
              <div className='cardProjeto'>
                <div className='imagemProjeto' style={{ backgroundImage: `url(${agenda})` }} ></div>
                <h2 className='nomeProjeto'>App Agenda</h2>
                <h2 className='verDetalhes'>Ver detalhes do projeto</h2>
              </div>
            </Button>
          </div>
        </section>

        <hr id='contato' />

        <section className='secao'>
          <h1>Contato</h1>

          <div className='containerContato'>
            <ul>
              <li><a href='mailto:luan.queiroz2003@gmail.com'><FaRegEnvelope /><span>E-Mail</span>luan.queiroz2003@gmail.com</a></li>
              <li><a href='https://www.linkedin.com/in/luan-queiroz/' target='_blank' rel='noreferrer'><img src={linkedinIcon} alt='Ícone LinkedIn' /><span>LinkedIn</span>Luan Queiroz</a></li>
              <li><a href='https://github.com/Luuh03' target='_blank' rel='noreferrer'><img src={githubIcon} alt='Ícone GitHub' /><span>GitHub</span>Luuh03</a></li>
            </ul>
          </div>
        </section>

        <footer>
          <p>© 2024 Luan Queiroz | Todos os direitos reservados.</p>
        </footer>

      </main>
    </div>
  );
}

export default Portfolio;
