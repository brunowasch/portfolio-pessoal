import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useIdiom } from '../hooks/useIdiom';

function Projects() {
  const idiom = useIdiom();

  const projects = [
    {
      id: 'connect-skills',
      title: 'Connect Skills',
      descPt:
        'Plataforma que conecta candidatos e empresas com base em habilidades comportamentais e IA (teste DISC e recomendação de vagas).',
      descEn:
        "A platform that connects candidates and companies based on behavioral skills and AI (DISC test and job recommendations).",
      links: [
        { href: 'https://github.com/brunowasch/connect-skills', icon: 'bi-github', label: 'GitHub' },
        { href: 'https://connectskills.com.br', icon: 'bi-browser-chrome', label: idiom === 'en' ? 'See project' : 'Ver projeto' }
      ],
      badge: 'Full-Stack',
    },
    {
      id: 'swift-racing',
      title: idiom === 'en' ? 'POO Racing Game (Swift)' : 'Corrida POO em Swift',
      descPt:
        'Jogo de corrida no terminal com piloto e veículos diferentes; ações de acelerar, frear, reabastecer e eventos aleatórios.',
      descEn:
        'Terminal racing game with driver and different vehicles; accelerate, brake, refuel and random events.',
      links: [
        { href: 'https://github.com/brunowasch/projeto-swift', icon: 'bi-github', label: 'GitHub' }
      ],
      badge: 'Swift',
    },
    {
      id: 'movie-react',
      title: idiom === 'en' ? 'Movie App (React)' : 'API Filme em React',
      descPt:
        'App em React que consome uma API de filmes; rotas dinâmicas, pôsteres e estados de carregamento.',
      descEn:
        'React app that consumes a movies API; dynamic routes, posters and loading states.',
      links: [
        { href: 'https://github.com/brunowasch/api-filme-react', icon: 'bi-github', label: 'GitHub' }
      ],
      badge: 'React',
    }
  ];

  return (
    <section
      className="container my-5 px-3 px-md-4"
      id="Projects"
      style={{ paddingTop: '10rem', paddingBottom: '10rem' }}
    >
      <h3 className="fw-bold mb-4">
        {idiom === 'en' ? 'My Projects' : 'Meus Projetos'}
      </h3>

      <div className="row g-4">
        {projects.map((p) => (
          <div className="col-12 col-md-6 col-lg-4" key={p.id}>
            <article className="project-card h-100 d-flex flex-column">
              <div className="project-card__header d-flex align-items-center justify-content-between">
                <span className="project-badge">{p.badge}</span>
              </div>

              <div className="project-card__body mt-2">
                <h5 className="project-title">{p.title}</h5>
                <p className="project-desc">
                  {idiom === 'en' ? p.descEn : p.descPt}
                </p>
              </div>

              <div className="project-card__footer mt-auto d-flex flex-wrap gap-2">
                {p.links.map((l, idx) => (
                  <a
                    key={`${p.id}-${idx}`}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost d-inline-flex align-items-center gap-2 mt-4"
                  >
                    <i className={`bi ${l.icon}`}></i>
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
