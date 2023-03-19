import styled from 'styled-components';

export const NavigationStyled = styled.ul`
  display: flex;
  padding: 10px;
  height: 105px;
  text-align: center;
  font-weight: 300;
`;

export const MenuItemStyled = styled.li`
  font-size: 20px;
  :not(:first-child) {
    margin-left: 20px;
  }
`;
