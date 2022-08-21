import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.number().required('Required'),
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
