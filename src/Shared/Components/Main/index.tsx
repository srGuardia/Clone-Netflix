import React from 'react';

import {
  Container,
  Destaque,
  SectionGeral,
  SectionContinuarAssistindo,
} from './styles';
import destaque from '../../Assets/img/destaque.png';
import titulo_destaque from '../../Assets/img/titulo-destaque.png';
import filme1 from '../../Assets/img/filme1.png';
import filme2 from '../../Assets/img/filme2.png';
import filme3 from '../../Assets/img/filme3.png';
import filme4 from '../../Assets/img/filme4.png';
import netflix1 from '../../Assets/img/netflix1.png';
import netflix2 from '../../Assets/img/netflix2.png';
import netflix3 from '../../Assets/img/netflix3.png';

export const Main = () => (
  <Container>
    <Destaque>
      <figure>
        <img src={destaque} alt='Stranger Things' />
        <figcaption>Imagem destaque</figcaption>
      </figure>

      <article>
        <figure>
          <img src={titulo_destaque} alt='Stranger Things' />
          <figcaption>Título destaque</figcaption>
        </figure>

        <p>
          Will, um garoto de 12 anos, desaparece em Montauk, Long Island.
          Enquanto a polícia, família e amigos procuram respostas, eles
          mergulham em um extraordinário mistério, envolvendo um experimento
          secreto do governo, forças sobrenaturais e uma garotinha.
        </p>
      </article>

      <div>
        <a href='#'>Assistir</a>
        <a href='#'>Mais informações</a>
      </div>
    </Destaque>

    <SectionGeral>
      <h2>Em alta</h2>

      <ul>
        <li>
          <figure>
            <img src={filme1} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={filme2} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={filme3} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={filme4} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={filme1} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={filme2} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
      </ul>
    </SectionGeral>

    <SectionContinuarAssistindo>
      <h2>Continuar assistindo</h2>

      <ul>
        <li>
          <figure>
            <img src={filme1} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={filme2} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={filme3} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={filme4} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
      </ul>
    </SectionContinuarAssistindo>

    <SectionGeral>
      <h2>Minha lista</h2>

      <ul>
        <li>
          <figure>
            <img src={filme1} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={filme2} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={filme3} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={filme4} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
      </ul>
    </SectionGeral>

    <SectionGeral>
      <h2>Só na Netflix</h2>

      <ul>
        <li>
          <figure>
            <img src={netflix1} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={netflix2} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={netflix3} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={netflix1} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={netflix2} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={netflix3} alt='Filme 1' />
            <figcaption>Filme 1</figcaption>
          </figure>
        </li>
      </ul>
    </SectionGeral>
  </Container>
);
