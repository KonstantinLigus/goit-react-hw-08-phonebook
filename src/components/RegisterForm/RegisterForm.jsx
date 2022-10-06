import { Field, Form, Formik } from 'formik';

export const RegisterForm = () => {
  const initialValues = {
    login: '',
    email: '',
    password: '',
  };

  function submitHandler(values, actions) {
    const { email, login, password } = values;
    actions.resetForm({
      values: {
        login: '',
        email: '',
        password: '',
      },
    });
  }

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      <Form>
        <label>
          Username:
          <Field type="text" name="login" />
        </label>
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
