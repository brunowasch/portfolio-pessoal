import React from "react";
import { useIdiom } from "../hooks/useIdiom"; 

function Technologies() {
  const idiom = useIdiom();

  const technologies = [
    { nome: "React", icon: "react/react-original.svg" },
    {nome: "Typescript", icon: "typescript/typescript-original.svg" },
    { nome: "JavaScript", icon: "javascript/javascript-original.svg" },
    { nome: "HTML5", icon: "html5/html5-original.svg" },
    { nome: "CSS3", icon: "css3/css3-original.svg" },
    { nome: "Bootstrap", icon: "bootstrap/bootstrap-original.svg" },
    { nome: "Node.js", icon: "nodejs/nodejs-original.svg" },
    { nome: "C", icon: "c/c-original.svg" },
    { nome: "Java", icon: "java/java-original.svg" },
    { nome: "Python", icon: "python/python-original.svg" },
    { nome: "Swift", icon: "swift/swift-original.svg" },
    { nome: "MySQL", icon: "mysql/mysql-original.svg" },
    { nome: "MongoDB", icon: "mongodb/mongodb-original.svg" },
    { nome: "Git", icon: "git/git-original.svg" },
  ];

  return (
    <section className="container my-5 px-3 px-md-4">
      <h5 className="fw-bold mb-4">
        {idiom === 'en' ? 'Technologies I Use' : 'Tecnologias que utilizo'}
      </h5>
      <div className="d-flex flex-wrap gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="text-center">
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
              alt={tech.nome}
              title={tech.nome}
              width="40"
              height="40"
            />
            <div className="mt-1" style={{ fontSize: '0.9rem' }}>
              {tech.nome}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
