import styled from 'styled-components';

export const ContactItemStyled = styled.li`
  width: 500px;
  padding: 8px;
  border: 1px solid black;
  :not(:first-child) {
    margin-top: 10px;
  }
`;
