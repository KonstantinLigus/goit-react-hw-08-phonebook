import { Field, Form, Formik } from 'formik';

export const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  function submitHandler(values, actions) {
    const { email, password } = values;
    actions.resetForm({
      values: {
        email: '',
        password: '',
      },
    });
  }

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      <Form>
        <label>
          Email:
          <Field type="email" name="email" />
        </label>
        <label>
          Password:
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
