import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */

  div {
    margin: 10px 0;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 0 300px;
`;

export const LinksPages = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 0 300px;

  div {
    display: flex;
    flex-direction: column;
    margin: 0 50px 0 0;
  }
`;

export const Service = styled.div`
  padding: 0 0 0 300px;
  /* display: flex;
  justify-content: flex-start;
  flex: 1; */
  text-align: left;
`;

export const Copyright = styled.div`
  padding: 0 0 0 300px;
`;
