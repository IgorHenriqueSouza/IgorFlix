import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src="https://fontmeme.com/permalink/200731/7f9ed6db4c0f3e71c38ac8e4a0be8ed1.png" alt="Logo Alura" />
      </a>
      <p>
        Acesse meu GitHub
        {' '}
        <a href="https://github.com/IgorHenriqueSouza">
          lique Aqui!
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
