import { Formik, Form } from 'formik';
import { Box } from 'components/Box';
import { FieldStyled } from '../commonStyles/FieldStyled.styled';
import { LabelStyled } from '../commonStyles/LabelStyled.styled';
import { ErrorMessageStyled } from '../commonStyles/ErrorMessageStyled.styled';
import { ButtonSyled, FormTitle } from './ContactFormStyled.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/conatactsOperations';
import { selectContacts } from 'redux/contacts/conatacsSelectors';
import { Schema } from 'schema';

const initialValues = {
  name: '',
  phone: '',
};

export function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  function submitHandler(values, actions) {
    const { name, phone } = values;
    actions.resetForm({
      values: {
        name: '',
        phone: '',
      },
    });
    if (contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, phone }));
  }

  return (
    <Box p="20px">
      <FormTitle>Phonebook</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={submitHandler}
      >
        <Form>
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <FieldStyled className="Field_mg" id="name" name="name" />
          <ErrorMessageStyled name="name" />
          <LabelStyled htmlFor="phone">Phone</LabelStyled>
          <FieldStyled id="phone" name="phone" />
          <ErrorMessageStyled name="phone" />
          <ButtonSyled type="submit">Add contact</ButtonSyled>
        </Form>
      </Formik>
    </Box>
  );
}
