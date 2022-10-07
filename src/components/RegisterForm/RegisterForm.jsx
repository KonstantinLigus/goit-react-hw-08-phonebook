import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authSlice';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  function submitHandler(values, actions) {
    const { email, name, password } = values;
    actions.resetForm({
      values: {
        name: '',
        email: '',
        password: '',
      },
    });
    dispatch(register({ name, email, password }));
  }

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      <Form>
        <label>
          Username:
          <Field type="text" name="name" />
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
