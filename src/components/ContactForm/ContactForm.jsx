import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box } from 'components/Box';
import { FieldStyled } from '../commonStyles/FieldStyled.styled';
import { LabelStyled } from '../commonStyles/LabelStyled.styled';
import { ErrorMessageStyled } from './ErrorMessageStyled.styled';
import { ButtonSyled } from './ButtonStyled.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/conatactsOperations';
import { selectContacts } from 'redux/contacts/conatacsSelectors';

const Schema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .required('Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValues = {
  name: '',
  number: '',
};

export function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  function submitHandler(values, actions) {
    const { name, number } = values;
    actions.resetForm({
      values: {
        name: '',
        number: '',
      },
    });
    if (contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
  }

  return (
    <Box p="20px">
      <Box mb="20px" as="h1">
        Phonebook
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={submitHandler}
      >
        <Form>
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <FieldStyled className="Field_mg" id="name" name="name" />
          <ErrorMessageStyled name="name" />
          <LabelStyled htmlFor="number">Phone</LabelStyled>
          <FieldStyled id="number" name="number" />
          <ErrorMessageStyled name="number" />
          <ButtonSyled type="submit">Add contact</ButtonSyled>
        </Form>
      </Formik>
    </Box>
  );
}
