import styled from 'styled-components';

import destaque from '../../Assets/img/destaque.png';
import colors from '../../Global/Styles/colors';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  /* img {
    width: 100%;
    height: 100%;
  } */

  section {
    padding: 10px 30px;
    overflow-x: hidden;
  }

  section figure {
    cursor: pointer;
  }

  section h2 {
    padding: 0 0 0 40px;
    margin: 0 auto;
  }

  @media screen and (max-width: 700px) {
    section {
      padding: 10px;
    }

    section h2 {
      padding: 0 !important;
    }

    ul {
      display: flex;
      padding: 0 !important;
      flex-wrap: nowrap;
      overflow-x: scroll;
    }

    li {
      margin: 0 10px 0 0;
    }
  }
`;

export const Destaque = styled.section`
  @media screen and (max-width: 700px) {
    figure {
      display: none;
    }

    h1 img {
      max-width: 180px;
    }

    p {
      margin: 15px 0;
      font-size: 0.8rem;
    }

    & {
      background-image: url(${destaque});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      padding: 25px 30px !important;
    }
  }

  div {
    display: flex;
    flex-direction: row;
  }

  a {
    background-color: ${colors.white};
    font-size: 0.9rem;
    margin: 0 10px 0 0;
    color: ${colors.dark};
    padding: 10px 15px;
    display: flex;
    align-items: center;
    border-radius: 4px;
  }

  a img {
    width: 20px;
    margin: 0 10px 0 0;
  }

  a:link {
    text-decoration: none;
  }

  a:last-child {
    margin: 0;
    opacity: 0.8;
    color: ${colors.white};
    background-color: ${colors.gray_dark};
  }
`;

export const SectionGeral = styled.section`
  /* @media screen and (max-width: 700px) {
    
  } */
`;

export const SectionContinuarAssistindo = styled.section``;
