import styled from 'styled-components';

export const ContactItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  max-width: 480px;
  padding: 8px;
  border: 1px solid black;
  :not(:first-child) {
    margin-top: 10px;
  }
`;
