import { Field } from 'formik';
import styled from 'styled-components';
import { ReactComponent as EditLogo } from '../../icons/pencil.svg';

export const ButtonItemStyled = styled.button`
  display: inline;
  height: 30px;
  font-size: 15px;
  cursor: pointer;
  background-color: ${props =>
    props.type === 'submit' ? 'rgb(0, 140, 255)' : 'rgb(255, 44, 44)'};
  border-color: rgb(255, 44, 44);
`;

export const ContactInputStyled = styled(Field)`
  width: ${props => props.value.length + 1 + 'ch'};
  border-style: none;
`;

export const EditLogoStyled = styled(EditLogo)`
  cursor: pointer;
  :hover {
    fill: rgb(0, 140, 255);
  }
  :active {
    box-shadow: 2px 2px 5px #fc894d;
  }
`;
