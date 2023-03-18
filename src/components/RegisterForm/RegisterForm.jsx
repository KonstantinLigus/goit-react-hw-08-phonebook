import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { FieldStyled, LabelStyled } from 'components/commonStyles/commonStyles';
import { register } from 'redux/auth/authOperations';
import { RegisterBtn } from './RegisterFormStyled.styled';

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
        <LabelStyled htmlFor="name">Username:</LabelStyled>
        <FieldStyled className="Field_mg" id="name" type="text" name="name" />
        <LabelStyled htmlFor="email">Email:</LabelStyled>
        <FieldStyled
          className="Field_mg"
          id="email"
          type="email"
          name="email"
        />
        <LabelStyled htmlFor="password">Password:</LabelStyled>
        <FieldStyled
          className="Field_mg"
          id="password"
          type="password"
          name="password"
        />
        <RegisterBtn type="submit">Register</RegisterBtn>
      </Form>
    </Formik>
  );
};
