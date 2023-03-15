import { Box } from 'components/Box';
import { ErrorMessageStyled } from 'components/commonStyles/ErrorMessageStyled.styled';
import { Form, Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/conatactsOperations';
import { Schema } from 'schema';
import {
  ButtonItemStyled,
  ContactInputStyled,
  EditLogoStyled,
} from './ContactItemStyled.styled';

export function ContactItem({
  contact: { name, phone, _id },
  deleteBtnHandler,
}) {
  const [isInputNameReadOnly, setIsInputNameReadOnly] = useState(true);
  const [isInputPhoneReadOnly, setIsInputPhoneReadOnly] = useState(true);
  // const [isSaveBtnShow, setIsSaveBtnShow] = useState(false);
  const inputNameRef = useRef(null);
  const inputPhoneRef = useRef(null);
  const dispatch = useDispatch();

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
    setIsInputNameReadOnly(!isInputNameReadOnly);
    inputNameRef.current.focus();
  };
  const onEditPhoneInputClick = e => {
    e.stopPropagation();
    setIsInputNameReadOnly(true);
    setIsInputPhoneReadOnly(!isInputPhoneReadOnly);
    inputPhoneRef.current.focus();
  };

  const submitHandler = (values, formikBag) => {
    // if (values.name === name && values.phone === phone) {
    //   return;
    // }
    dispatch(updateContact({ values, _id }));
    formikBag.setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={{ name, phone }}
        validationSchema={Schema}
        onSubmit={submitHandler}
      >
        {props => {
          let isSaveBtnShow = false;
          const onInputChange = values => {
            if (values.name === name && values.phone === phone) {
              return;
            }
            isSaveBtnShow = true;
          };
          onInputChange(props.values);
          return (
            <Form>
              <div>
                <ContactInputStyled
                  name="name"
                  value={props.values.name}
                  readOnly={isInputNameReadOnly}
                  innerRef={inputNameRef}
                />
                <EditLogoStyled onClick={onEditNameInputClick} />
                <ErrorMessageStyled name="name" />
              </div>
              <div>
                <ContactInputStyled
                  name="phone"
                  value={props.values.phone}
                  readOnly={isInputPhoneReadOnly}
                  innerRef={inputPhoneRef}
                />
                <EditLogoStyled onClick={onEditPhoneInputClick} />
                <ErrorMessageStyled name="phone" />
              </div>
              {isSaveBtnShow && (
                <Box mt={10}>
                  <ButtonItemStyled type="submit">Save</ButtonItemStyled>
                </Box>
              )}
            </Form>
          );
        }}
      </Formik>

      <ButtonItemStyled type="button" id={_id} onClick={deleteBtnHandler}>
        Delete
      </ButtonItemStyled>
    </>
  );
}
