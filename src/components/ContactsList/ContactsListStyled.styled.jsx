import styled from 'styled-components';

export const ContactItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  padding: 8px;
  margin: auto;
  border: 1px solid black;
  :not(:first-child) {
    margin-top: 10px;
  }
`;

export const LoadingStyled = styled.p`
  text-align: center;
`;
