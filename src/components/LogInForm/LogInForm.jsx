import {
  ErrorStyled,
  FieldStyled,
  FormStyled,
  LabelStyled,
} from 'components/commonStyles/commonStyles';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { LogInBtn } from './LogInFormStyled.styled';
import {
  selectAuthError,
  selectAuthErrorMessage,
} from 'redux/auth/authSelectors';

export const LoginForm = () => {
  const error = useSelector(selectAuthError);
  const errorMessage = useSelector(selectAuthErrorMessage);

  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  function onSubmitClick(values, actions) {
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
    <Formik initialValues={initialValues} onSubmit={onSubmitClick}>
      <FormStyled>
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
        {error && errorMessage === 'Password is wrong' && (
          <ErrorStyled>{errorMessage}</ErrorStyled>
        )}

        <LogInBtn type="submit">Log In</LogInBtn>
      </FormStyled>
    </Formik>
  );
};
