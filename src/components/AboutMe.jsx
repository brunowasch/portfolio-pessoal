import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useIdiom } from '../hooks/useIdiom'; 
import curriculoPDF from '../assets/Curriculo-Bruno-Waschburger-Silva.pdf';
import resumePDF from "../assets/Bruno-Waschburger-Silva-Resume.pdf";
import brazilFLag from '../assets/brazil.svg';
import usaFlag from '../assets/usa.svg';

function AboutMe() {
  const idiom = useIdiom();

  return (
    <div className="fs-6">
      <h3 className="fw-bold mb-3">
        {idiom === 'en' ? 'About Me' : 'Sobre Mim'}
      </h3>

      {idiom === 'en' ? (
        <>
          <p className='text-justify'>
            Student of the Technical Informatics program at Escola Técnica Estadual Monteiro Lobato (CIMOL) and an enthusiast of the web development world. I believe in the power of technology to turn ideas into practical solutions, creating digital experiences that are functional, intuitive, and accessible.
          </p>

          <p className='text-justify'>
            Experience in both front-end and back-end development enables me to build complete, well-structured applications, with a particular appreciation for front-end technologies and the creation of intuitive user interfaces. I have a strong interest in databases — both relational (SQL) and non-relational (NoSQL) — and continuously explore their features to ensure organization, performance, and scalability.
          </p>

          <p className='text-justify'>
            Winner of <a href="#Events" className="text-white text-decoration-underline">Hackatime 2024</a> with the project Up Connections — currently called <a href="#Projects" className="text-white text-decoration-underline">Connect Skills</a>. The project was also presented at the <a href="#Events" className="text-white text-decoration-underline">Taquara Summit</a> that same year and awarded at the <a href="#Events" className="text-white text-decoration-underline">16th FEINTEC</a> in 2025.
          </p>

          <p className='text-justify'>
            I am always seeking new learning opportunities, staying up to date with modern technologies, and continuously refining my system-development skills. For me, web development is a way to solve problems and drive innovation.
          </p>
        </>
      ) : (
        <>
          <p className='text-justify'>
            Sou estudante do Curso Técnico em Informática na Escola Técnica Estadual Monteiro Lobato (CIMOL) e entusiasta do desenvolvimento web. Acredito no poder da tecnologia para transformar ideias em soluções práticas, criando experiências digitais funcionais, intuitivas e acessíveis.
          </p>
          <p className='text-justify'>
            Tenho experiência em front-end e back-end, o que me permite construir aplicações completas e bem estruturadas, com apreço especial por tecnologias de front-end e pela criação de interfaces de usuário intuitivas. Possuo grande interesse em bancos de dados — tanto relacionais (SQL) quanto não relacionais (NoSQL) — e exploro suas funcionalidades para garantir organização, desempenho e escalabilidade.
          </p>
          <p className='text-justify'>
            Vencedor do <a href="#Events" className="text-white text-decoration-underline">Hackatime 2024</a> com o projeto Up Connections — atualmente denominado <a href="#Projects" className="text-white text-decoration-underline">Connect Skills</a>. O projeto também foi apresentado no <a href="#Events" className="text-white text-decoration-underline">Taquara Summit</a> do mesmo ano e premiado na <a href="#Events" className="text-white text-decoration-underline">16ª FEINTEC</a> em 2025.
          </p>
          <p className='text-justify'>
            Estou constantemente em busca de novos aprendizados, acompanhando tecnologias modernas e aprimorando minhas habilidades em desenvolvimento de sistemas. Vejo o desenvolvimento web como uma forma de solucionar problemas e impulsionar a inovação.
          </p>
        </>
      )}

      {/* Idiomas */}
      <h4 className="fw-bold mt-4">
        {idiom === 'en' ? 'Languages I speak' : 'Idiomas que falo'}
      </h4>
      <ul className="list-unstyled">
        <li>
          <div className="mt-4 mb-4 d-flex align-items-center gap-2">
            <img src={brazilFLag} width={30} height={30} alt="Brazil flag" />
            {idiom === 'en' ? 'Portuguese — Native' : 'Português — Nativo'}
          </div>
        </li>
        <li>
          <div className="mb-4 d-flex align-items-center gap-2">
            <img src={usaFlag} width={30} height={30} alt="USA flag" />
            {idiom === 'en' ? 'English — Advanced' : 'Inglês — Avançado'}
          </div>
        </li>
      </ul>

      {/* Currículo/Resume */}
      {idiom === 'en' ? (
        <a href={resumePDF} download="Bruno Waschburger Silva's Resume" className="btn btn-primary mb-5">
          <i className="bi bi-download me-2" />
          Download Resume
        </a>
      ) : (
        <a href={curriculoPDF} download="Currículo de Bruno Waschburger Silva" className="btn btn-primary mb-5">
          <i className="bi bi-download me-2" />
          Baixar Currículo
        </a>
      )}
    </div>
  );
}

export default AboutMe;
