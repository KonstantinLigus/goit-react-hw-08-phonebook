import { ErrorMessage } from 'formik';
import styled from 'styled-components';

export const ErrorMessageStyled = ({ name }) => (
  <ErrorMessage name={name} render={message => <PStyled>{message}</PStyled>} />
);
const PStyled = styled.p`
  font-size: 14px;
  color: red;
`;
