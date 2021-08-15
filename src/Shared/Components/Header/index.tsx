import React from 'react';

import { ActionsLeft, ActionsRight, Container } from './styles';

import logo from '../../Assets/img/logo.png';
import buscar from '../../Assets/img/pesquisa.png';
import presente from '../../Assets/img/presente.png';
import notificacao from '../../Assets/img/notificacao.png';

export const Header = () => (
  <Container>
    <ActionsLeft>
      <img src={logo} alt='Netflix' />

      <nav>
        <ul>
          <li>
            <a href='#'>Início</a>
          </li>
          <li>
            <a href='#'>Séries</a>
          </li>
          <li>
            <a href='#'>Filmes</a>
          </li>
          <li>
            <a href='#'>Bombando</a>
          </li>
          <li>
            <a href='#'>Minha lista</a>
          </li>
        </ul>
      </nav>
    </ActionsLeft>

    <ActionsRight>
      <img src={buscar} alt='Buscar' />
      <span>Infantil</span>
      <img src={presente} alt='Presente' />
      <img src={notificacao} alt='Notificação' />
    </ActionsRight>
  </Container>
);
