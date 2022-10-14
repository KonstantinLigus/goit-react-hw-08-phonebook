import { FieldStyled } from 'components/commonStyles/FieldStyled.styled';
import { LabelStyled } from 'components/commonStyles/LabelStyled.styled';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { LogInBtn } from './LogInFormStyled.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
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
    dispatch(logIn({ email, password }));
  }

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      <Form>
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
        <LogInBtn type="submit">Log In</LogInBtn>
      </Form>
    </Formik>
  );
};
