import { Box } from 'components/Box';
import { Form, Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubscription } from 'redux/auth/authSelectors';
import {
  deleteContact,
  updateContact,
} from 'redux/contacts/conatactsOperations';
import { Schema } from 'schema';
import {
  ButtonItemStyled,
  ContactInputStyled,
  EditLogoStyled,
  FavoriteLogoStyled,
  FieldWrapper,
} from './ContactItemStyled.styled';
import { ErrorMessageStyled } from 'components/commonStyles/commonStyles';
import { ReactComponent as PersonLogo } from '../../icons/person.svg';
import { ReactComponent as PhoneLogo } from '../../icons/telephone.svg';
import { ReactComponent as EmailLogo } from '../../icons/envelope.svg';

export const ContactItem = ({
  contact: { name, phone, email = '', _id, favorite },
  setShoudFetchFavoriteContacts,
  isItFavoritePage = false,
  shouldFetchFavoriteContacts,
}) => {
  const inputNameRef = useRef(null);
  const inputPhoneRef = useRef(null);
  const inputEmailRef = useRef(null);

  const [isInputNameReadOnly, setIsInputNameReadOnly] = useState(true);
  const [isInputPhoneReadOnly, setIsInputPhoneReadOnly] = useState(true);
  const [isInputEmailReadOnly, setIsInputEmailReadOnly] = useState(true);

  const dispatch = useDispatch();

  const subscription = useSelector(selectSubscription);

  useEffect(() => {
    const onDocumentClick = e => {
      setIsInputNameReadOnly(true);
      setIsInputPhoneReadOnly(true);
    };
    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, []);

  const onEditNameInputClick = e => {
    e.stopPropagation();
    setIsInputPhoneReadOnly(true);
    setIsInputEmailReadOnly(true);
    setIsInputNameReadOnly(false);
    inputNameRef.current.focus();
  };
  const onEditPhoneInputClick = e => {
    e.stopPropagation();
    setIsInputNameReadOnly(true);
    setIsInputEmailReadOnly(true);
    setIsInputPhoneReadOnly(false);
    inputPhoneRef.current.focus();
  };

  const onEditEmailInputClick = e => {
    e.stopPropagation();
    setIsInputNameReadOnly(true);
    setIsInputPhoneReadOnly(true);
    setIsInputEmailReadOnly(false);
    inputEmailRef.current.focus();
  };

  const onFavoriteIconClick = () => {
    const values = { favorite: !favorite };
    dispatch(updateContact({ values, _id }));
    if (isItFavoritePage) {
      setShoudFetchFavoriteContacts(!shouldFetchFavoriteContacts);
    }
  };

  function onDeleteBtnClick(e) {
    dispatch(deleteContact(e.target.id));
  }

  const onSubmitClick = (values, formikBag) => {
    dispatch(updateContact({ values, _id }));
    formikBag.setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={{ name, phone, email }}
        validationSchema={Schema}
        onSubmit={onSubmitClick}
      >
        {props => {
          let isSaveBtnShow = false;
          const onInputChange = values => {
            if (
              values.name === name &&
              values.phone === phone &&
              values.email === email
            ) {
              return;
            }
            isSaveBtnShow = true;
          };
          onInputChange(props.values);
          return (
            <Form>
              <FieldWrapper>
                <PersonLogo />
                <ContactInputStyled
                  name="name"
                  value={props.values.name}
                  readOnly={isInputNameReadOnly}
                  innerRef={inputNameRef}
                />
                <EditLogoStyled onClick={onEditNameInputClick} />
                <ErrorMessageStyled name="name" />
              </FieldWrapper>
              <FieldWrapper>
                <PhoneLogo />
                <ContactInputStyled
                  name="phone"
                  value={props.values.phone}
                  readOnly={isInputPhoneReadOnly}
                  innerRef={inputPhoneRef}
                />
                <EditLogoStyled onClick={onEditPhoneInputClick} />
                <ErrorMessageStyled name="phone" />
              </FieldWrapper>
              {subscription !== 'starter' && (
                <FieldWrapper>
                  <EmailLogo />
                  <ContactInputStyled
                    name="email"
                    value={props.values.email}
                    readOnly={isInputEmailReadOnly}
                    innerRef={inputEmailRef}
                  />
                  <EditLogoStyled onClick={onEditEmailInputClick} />
                  <ErrorMessageStyled name="email" />
                </FieldWrapper>
              )}
              {isSaveBtnShow && (
                <Box mt={10}>
                  <ButtonItemStyled type="submit">Save</ButtonItemStyled>
                </Box>
              )}
            </Form>
          );
        }}
      </Formik>
      <Box>
        <ButtonItemStyled type="button" id={_id} onClick={onDeleteBtnClick}>
          Delete
        </ButtonItemStyled>
        {subscription === 'pro' && (
          <FavoriteLogoStyled
            favorite={favorite.toString()}
            onClick={onFavoriteIconClick}
          />
        )}
      </Box>
    </>
  );
};
