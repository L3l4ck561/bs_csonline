import React, { forwardRef } from "react";
import "./curriculo.css";

import {
  tecnologias,
  skills,
  FormAcademico,
  cursos,
  eadCurso,
  expeProf,
  icp
} from './HOME/data';

const Tela2 = forwardRef((props, ref) => {
  const hoje = new Date().toLocaleDateString("pt-BR");
  return (
    <div
      ref={ref}
      style={{
        fontFamily: "'Segoe UI', Arial, sans-serif",
        width: "210mm",
        minHeight: "297mm",
        margin: "0 auto",
        padding: "10mm 18mm 25mm 18mm",
        backgroundColor: "#fff",
        color: "#222",
        fontSize: "11pt",
        boxSizing: "border-box"
      }}
    >
      {/* HEADER */}
      <header style={{ marginBottom: "5mm" }}>
        <h1 style={{ margin: 0, fontSize: "22pt", fontWeight: 700 }}>
          Carlos Gabriel dos Santos Araújo
        </h1>
        <p style={{ margin: "4px 0", fontSize: "12pt", color: "#555" }}>
          Desenvolvedor Full Stack | Análise e Desenvolvimento de Sistemas
        </p>

        <div style={{ fontSize: "10pt", color: "#444" }}>
          Botucatu – SP • carlos.gabriel561btu@gmail.com •
          github.com/L3l4ck561 • linkedin.com/in/carlos-araújo-6447653a6
        </div>
      </header>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* COLUNA ESQUERDA */}
        <div style={{ width: "35%" }}>

          <SectionTitle title="Habilidades Técnicas" />

          <div style={{ marginBottom: "10px" }}>
            <strong style={{ fontSize: "10pt" }}>
              Linguagens de Programação
            </strong>
            <div style={{ fontSize: "9.5pt", color: "#444" }}>
              {tecnologias.map((nome) => (nome.nome)).join(", ")}
            </div>
          </div>


          {skills.map((categoria, idx) => (
            <div key={idx} style={{ marginBottom: "10px" }}>
              <strong style={{ fontSize: "10pt" }}>
                {categoria.titulo}
              </strong>
              <div style={{ fontSize: "9.5pt", color: "#444" }}>
                {categoria.nomes.join(", ")}
              </div>
            </div>
          ))}

          <SectionTitle title="Formação" />

          {FormAcademico.map((item, idx) => (
            <div key={idx} style={{ marginBottom: "8px" }}>
              <strong>{item.nome}</strong>
              <div style={{ fontSize: "9.5pt", color: "#555" }}>
                {item.instituicao}
              </div>
              <div style={{ fontSize: "9pt", color: "#777" }}>
                {item.status}
              </div>
            </div>
          ))}

          <div style={{ pageBreakBefore: "always" }} />
          <SectionTitle title="Cursos" />

          {cursos.map((curso, idx) => (
            <div key={idx} style={{ marginBottom: "6px", fontSize: "9.5pt" }}>
              <strong>{curso.nome}</strong>
              <div style={{ color: "#555" }}>{curso.instituicao}</div>
            </div>
          ))}
        </div>

        {/* COLUNA DIREITA */}
        <div className="section-block" style={{ width: "65%" }}>
          <SectionTitle title="Resumo Profissional" />

          <p style={{ textAlign: "justify" }}>
            Análista e Desenvolvedor de Sistemas com experiência
            prática em desenvolvimento web, APIs REST e projetos corporativos.
            Atuação como estagiário Full Stack, com foco em boas práticas,
            organização de código e aprendizado contínuo.
          </p>

          <SectionTitle title="Experiência Profissional" />

          {expeProf.map((exp, idx) => (
            <div key={idx} className="section-block" style={{ marginBottom: "12px" }}>
              <strong>{exp.titulo}</strong>
              <div style={{ fontStyle: "italic", fontSize: "10pt" }}>
                {exp.texto.cargo} • {exp.texto.periodo}
              </div>
              <p style={{ margin: "4px 0", fontSize: "10pt" }}>
                {exp.texto.desc}
              </p>
            </div>
          ))}

          <SectionTitle title="Projetos e Pesquisa" />

          {icp.map((proj, idx) => (
            <div key={idx} style={{ marginBottom: "10px" }}>
              <strong>{proj.titulo}</strong>
              <p style={{ fontSize: "10pt", margin: "4px 0" }}>
                {proj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pdf-footer">
        Este documento corresponde à versão do currículo gerada em {hoje}.
        Informações podem ser atualizadas posteriormente.
      </div>
    </div>
  );
});

const SectionTitle = ({ title }) => (
  <h2
    style={{
      fontSize: "12pt",
      marginTop: "12px",
      marginBottom: "6px",
      borderBottom: "1px solid #ddd",
      paddingBottom: "3px",
      fontWeight: 600
    }}
  >
    {title}
  </h2>
);


export default Tela2;