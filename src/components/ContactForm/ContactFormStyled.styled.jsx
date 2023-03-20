import { Form } from 'formik';
import styled from 'styled-components';

export const ContactFormWrapper = styled.div`
  margin-top: 20px;
`;

export const ButtonSyled = styled.button`
  margin-top: 20px;
  height: 30px;
  font-size: 15px;
  background-color: rgb(0, 128, 0);
  border-color: rgb(0, 128, 0);
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 300;
  text-align: center;
`;

export const FormStyled = styled(Form)`
  max-width: 320px;
  margin: auto;
  padding: 0 10px;
`;
