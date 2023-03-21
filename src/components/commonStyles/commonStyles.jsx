import { Field, Form } from 'formik';
import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const LabelStyled = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const FormStyled = styled(Form)`
  max-width: 300px;
  margin: auto;
`;
export const FieldStyled = styled(Field)`
  display: block;
  width: 100%;
  height: 30px;
  font-size: 14px;
  :not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const ErrorMessageStyled = ({ name }) => (
  <ErrorMessage
    name={name}
    render={message => <ErrorStyled>{message}</ErrorStyled>}
  />
);
export const ErrorStyled = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  color: red;
`;
