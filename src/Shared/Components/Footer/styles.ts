import styled from 'styled-components';
import colors from '../../Global/Styles/colors';

export const Container = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${colors.space};
  overflow: hidden;

  div {
    margin: 10px 0;
  }

  a {
    color: ${colors.space};
  }

  a:link {
    text-decoration: none;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 0 300px;

  figure {
    margin: 0 10px;
  }

  figure:first-child {
    margin: 0 10px 0 0 !important;
  }

  figure:last-child {
    margin: 0 !important;
  }

  @media screen and (max-width: 700px) {
    padding: 0 0 0 10px;
  }
`;

export const LinksPages = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 0 300px;
  line-height: 30px;

  @media screen and (max-width: 700px) {
    padding: 0 0 0 10px;
    overflow-x: scroll;
    font-size: 0.6rem;
  }

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const Service = styled.div`
  padding: 0 0 0 300px;
  /* display: flex;
  justify-content: flex-start;
  flex: 1; */
  text-align: left;

  a {
    padding: 10px;
    border: 1px solid ${colors.gray_dark};
    display: inline-block;
  }

  @media screen and (max-width: 700px) {
    padding: 0 0 0 10px;
  }
`;

export const Copyright = styled.div`
  padding: 0 0 0 300px;
  font-weight: 300;
  font-size: 0.8rem;

  @media screen and (max-width: 700px) {
    padding: 0 0 0 10px;
  }
`;
