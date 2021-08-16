import styled from 'styled-components';
import colors from '../../Global/Styles/colors';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    & {
      height: 50px;
    }
  }
`;

export const ActionsLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 30px;

  @media screen and (max-width: 700px) {
    & {
      justify-content: center;
      margin: 0;
      padding: 0;
    }

    nav {
      display: none !important;
    }
  }

  nav {
    display: flex;
    align-items: center;
  }

  a:link {
    text-decoration: none;
  }

  a {
    color: ${colors.gray_dark};
  }

  a:focus {
    color: ${colors.white};
  }

  a:hover {
    color: ${colors.white};
  }
`;

export const ActionsRight = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  padding-right: 30px;

  @media screen and (max-width: 700px) {
    & {
      display: none !important;
    }
  }

  img {
    padding: 0 20px 0 0;
    cursor: pointer;
  }

  img:last-child {
    padding-right: 0px !important;
  }

  span {
    padding: 0 20px 0 0;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
  }
`;
