import React from "react";
import styles from "./About.module.css"; // Importa o arquivo CSS Module

export function About() {
  return (
    <div className={styles.container}> {/* Aplica a classe do CSS Module */}
      <h2>Sobre</h2>
      <p>Esta é uma aplicação para um CRUD de carros HotWheels.</p>
      <p>Elaborada na Disciplina Desenvolvimento de Sistemas Fron-End.</p>
      <p>Do Curso de Graduação Online da PUCRS.</p>
    </div>
  );
}
