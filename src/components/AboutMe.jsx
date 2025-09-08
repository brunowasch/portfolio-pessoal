import 'bootstrap/dist/css/bootstrap.min.css';
import { useIdiom } from '../hooks/useIdiom'; 
import curriculoPDF from '../assets/Currículo de Bruno Waschburger Silva.pdf';

function AboutMe() {
  const idiom = useIdiom();

  return (
    <div className="fs-6 text-justify">
      <h3 className="fw-bold mb-3">
        {idiom === 'en' ? 'About Me' : 'Sobre Mim'}
      </h3>

      {idiom === 'en' ? (
        <>
          <p>
            I am a student of the Technical Informatics course at Escola Técnica Estadual Monteiro Lobato (CIMOL) and an enthusiast of the web development world. I believe in the power of technology as a tool to transform ideas into practical solutions, creating digital experiences that are functional, intuitive, and accessible.
          </p>
          <p>
            I have experience in both front-end and back-end development, which allows me to build complete and well-structured applications. I have a strong interest in databases, both relational (SQL) and non-relational (NoSQL), and I enjoy exploring their features to ensure organization, performance, and scalability in projects.
          </p>
          <p>
            I am constantly seeking new learning opportunities, keeping up with modern technologies and improving my system development skills. For me, web development is a way to solve problems and drive innovation.
          </p>
        </>
      ) : (
        <>
          <p>
            Sou estudante do Curso Técnico em Informática na Escola Técnica Estadual Monteiro Lobato (CIMOL) e um entusiasta do mundo do desenvolvimento web. Acredito no poder da tecnologia como ferramenta para transformar ideias em soluções práticas, criando experiências digitais que sejam funcionais, intuitivas e acessíveis.
          </p>
          <p>
            Tenho experiência tanto no desenvolvimento front-end quanto no back-end, o que me permite construir aplicações completas e bem estruturadas. Possuo grande interesse em bancos de dados, tanto relacionais (SQL) quanto não relacionais (NoSQL), e gosto de explorar suas funcionalidades para garantir organização, desempenho e escalabilidade aos projetos.
          </p>
          <p>
            Estou constantemente em busca de novos aprendizados, atualizando meus conhecimentos em tecnologias modernas e aprimorando minhas habilidades no desenvolvimento de sistemas. Vejo o desenvolvimento web como uma forma de solucionar problemas e inovar.
          </p>
        </>
      )}

      {/* Currículo */}
      <a href={curriculoPDF} download="Currículo de Bruno Waschburger Silva.pdf" className="btn btn-primary mt-3">
        <i class="bi bi-download pe-2"></i>
        {idiom === 'en' ? 'Download Resume' : 'Baixar Currículo'}
      </a>
    </div>
  );
}   

export default AboutMe;
