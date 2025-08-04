import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useIdiom } from '../hooks/useIdiom';

function Projects() {
  const idiom = useIdiom();

  return (
    <section
      className="container my-5 px-3 px-md-4"
      id="Projects"
      style={{ paddingTop: '6rem' }}
    >
      <h3 className="fw-bold mb-4">
        {idiom === 'en' ? 'My Projects' : 'Meus Projetos'}
      </h3>

      <div className="row g-4">
        {/* Connect Skills */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 d-flex flex-column">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title fw-bold">Connect Skills</h5>
                <p className="card-text text-justify">
                  {idiom === 'en'
                    ? "A platform that connects candidates and companies based on behavioral skills. It uses AI to recommend jobs that are compatible with the user's profile and includes a DISC-based behavioral test to match candidates with suitable opportunities. Project developed as a Capstone Project."
                    : "Plataforma que conecta candidatos e empresas com base em habilidades comportamentais. Utiliza IA para recomendar vagas compatíveis com o perfil do usuário e inclui um teste comportamental para calcular a compatibilidade. Projeto desenvolvido como Trabalho de Conclusão de Curso (TCC)."}
                </p>
              </div>
              <div className="mt-3 d-flex justify-content-center gap-2 flex-wrap">
                <a
                  href="https://github.com/brunowasch/connect-skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-github"></i> GitHub
                </a>
                <a
                  href="https://connectskills.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-browser-chrome"></i>
                  {idiom === 'en' ? 'See project' : 'Ver projeto'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Corrida POO em Swift */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 d-flex flex-column">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title fw-bold">
                  {idiom === 'en' ? 'POO Racing Game (Swift)' : 'Corrida POO em Swift'}
                </h5>
                <p className="card-text text-justify">
                  {idiom === 'en'
                    ? 'A terminal-based racing game in Swift where players control a driver and a vehicle (sports car, truck, or motorcycle), each with distinct behavior. Choose actions like accelerating, braking, refueling, checking status, or exiting. The goal is to reach 3000 km first, managing fuel and handling random events.'
                    : 'Jogo de corrida em Swift no terminal onde os jogadores controlam um piloto e um veículo (carro esportivo, caminhonete ou moto), cada um com comportamento único. É possível acelerar, frear, reabastecer, verificar status ou sair. O objetivo é alcançar 3000 km antes dos demais, gerenciando combustível e lidando com eventos aleatórios.'}
                </p>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <a
                  href="https://github.com/brunowasch/projeto-swift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* API Filme React */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 d-flex flex-column">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title fw-bold">
                  {idiom === 'en' ? 'Movie App (React)' : 'API Filme em React'}
                </h5>
                <p className="card-text text-justify">
                  {idiom === 'en'
                    ? 'A React application that fetches movie data from an external API. It includes dynamic routing, poster images, and loading states, offering a clean and responsive interface to explore various film titles.'
                    : 'Aplicação React que consome dados de uma API de filmes. Inclui rotas dinâmicas, imagens de pôster e estados de carregamento, com uma interface limpa e responsiva para explorar diversos títulos de filmes.'}
                </p>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <a
                  href="https://github.com/brunowasch/api-filme-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
