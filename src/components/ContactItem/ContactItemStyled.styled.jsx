import { Field } from 'formik';
import styled from 'styled-components';
import { ReactComponent as EditLogo } from '../../icons/pencil.svg';
import { ReactComponent as FavoriteLogo } from '../../icons/star-fill.svg';

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
  width: ${props => props.value?.length + 1 + 'ch'};
  height: 25px;
  margin-left: 5px;
  border-style: none;
  font-size: 16px;
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

export const FavoriteLogoStyled = styled(FavoriteLogo)`
  display: block;
  cursor: pointer;
  margin: 10px auto 0;
  fill: ${props => (props.favorite === 'true' ? 'rgb(0, 140, 255)' : 'none')};
  stroke: ${props =>
    props.favorite === 'true' ? 'rgb(0, 140, 255)' : 'rgb(0, 0, 0)'};
  stroke-width: 1.2px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  :not(:last-of-type) {
    margin-bottom: 10px;
  }
`;
