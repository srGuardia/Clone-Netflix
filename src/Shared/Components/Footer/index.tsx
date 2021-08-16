import React from 'react';

import {
  Container,
  SocialMedia,
  LinksPages,
  Service,
  Copyright,
} from './styles';
import facebook from '../../Assets/img/fb.png';
import insta from '../../Assets/img/ig.png';
import twitter from '../../Assets/img/tt.png';
import youtube from '../../Assets/img/yt.png';

export const Footer = () => (
  <Container>
    <SocialMedia>
      <figure>
        <img src={facebook} alt='Facebook' />
        <figcaption>Facebook</figcaption>
      </figure>

      <figure>
        <img src={insta} alt='Instagram' />
        <figcaption>Instagram</figcaption>
      </figure>

      <figure>
        <img src={twitter} alt='Twitter' />
        <figcaption>Twitter</figcaption>
      </figure>

      <figure>
        <img src={youtube} alt='Youtube' />
        <figcaption>Youtube</figcaption>
      </figure>
    </SocialMedia>

    <LinksPages>
      <div>
        <a href='/'>Idioma e legendas</a>
        <a href='/'>Imprensa</a>
        <a href='/'>Privacidade</a>
        <a href='/'>Entre em contato</a>
      </div>

      <div>
        <a href='/'>Audiodescrição</a>
        <a href='/'>Relação com investidores</a>
        <a href='/'>Avisos legais</a>
      </div>

      <div>
        <a href='/'>Central de ajuda</a>
        <a href='/'>Carreiras</a>
        <a href='/'>Preferências de cookies</a>
      </div>

      <div>
        <a href='/'>Cartão pré-pago</a>
        <a href='/'>Termos de uso</a>
        <a href='/'>Informações corporativas</a>
      </div>
    </LinksPages>
    <Service>
      <a href='/'>Código do serviço</a>
    </Service>

    <Copyright>1997-2021 Netflix, Inc.</Copyright>
  </Container>
);
