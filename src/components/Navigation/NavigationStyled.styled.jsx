import styled from 'styled-components';

export const NavigationStyled = styled.ul`
  display: flex;
  padding: 10px;
  height: 105px;
  & * {
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    font-weight: 300;
  }
  & li:not(:first-child) {
    margin-left: 20px;
  }
`;
