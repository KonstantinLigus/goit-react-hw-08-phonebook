import { Formik } from 'formik';
import {
  FieldStyled,
  LabelStyled,
  ErrorMessageStyled,
  FormStyled,
} from '../commonStyles/commonStyles';
import { ButtonSyled, FormTitle } from './ContactFormStyled.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/conatactsOperations';
import { selectContacts } from 'redux/contacts/conatacsSelectors';
import { Schema } from 'schema';
import { selectSubscription } from 'redux/auth/authSelectors';
import { Box } from 'components/Box';

const initialValues = {
  name: '',
  phone: '',
  email: '',
};

export function ContactForm() {
  const contacts = useSelector(selectContacts);
  const subscription = useSelector(selectSubscription);

  const dispatch = useDispatch();

  function submitHandler(values, actions) {
    const { name, phone, email } = values;
    actions.resetForm({
      values: {
        name: '',
        phone: '',
        email: '',
      },
    });
    if (contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (email === '') {
      return dispatch(addContact({ name, phone }));
    }
    dispatch(addContact({ name, phone, email }));
  }
  return (
    <Box mb={20}>
      <FormTitle>Add new contact</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={submitHandler}
      >
        <FormStyled>
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <FieldStyled id="name" name="name" />
          <ErrorMessageStyled name="name" />
          <LabelStyled htmlFor="phone">Phone</LabelStyled>
          <FieldStyled id="phone" name="phone" />
          <ErrorMessageStyled name="phone" />
          {subscription !== 'starter' && (
            <>
              <LabelStyled htmlFor="email">Email</LabelStyled>
              <FieldStyled id="email" name="email" />
              <ErrorMessageStyled name="email" />
            </>
          )}
          <ButtonSyled type="submit">Add contact</ButtonSyled>
        </FormStyled>
      </Formik>
    </Box>
  );
}
