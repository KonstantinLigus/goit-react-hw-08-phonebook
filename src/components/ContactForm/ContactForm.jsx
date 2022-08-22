import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm({
    values: {
      name: '',
      number: '',
    },
  });
};

export function ContactForm(props) {
  return (
    // <form
    //   onSubmit={e => {
    //     e.preventDefault();
    //     console.log(e.target.elements.name.value);
    //     console.log(e.target.elements.number.value);
    //   }}
    // >
    //   <input
    //     type="text"
    //     name="name"
    //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //     required
    //   />
    //   <input
    //     type="tel"
    //     name="number"
    //     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //     required
    //   />
    //   <button type="submit">Submit</button>
    // </form>
    <Formik
      initialValues={initialValues}
      validationSchema={Schema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          <ErrorMessage name="name">{msg => <div>{msg}</div>}</ErrorMessage>
          <label htmlFor="number">Number</label>
          <Field id="number" name="number" />
          <ErrorMessage name="number">{msg => <div>{msg}</div>}</ErrorMessage>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
