import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  ErrorStyled,
  FieldStyled,
  FormStyled,
  LabelStyled,
} from 'components/commonStyles/commonStyles';
import { register } from 'redux/auth/authOperations';
import { RegisterBtn } from './RegisterFormStyled.styled';
import {
  selectAuthError,
  selectAuthErrorMessage,
} from 'redux/auth/authSelectors';
import { useEffect } from 'react';
import { setUserError } from 'redux/auth/authSlice';

export const RegisterForm = () => {
  const error = useSelector(selectAuthError);
  const errorMessage = useSelector(selectAuthErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setUserError());
    };
  }, [dispatch]);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmitClick = (values, actions) => {
    const { email, name, password } = values;
    actions.resetForm({
      values: {
        name: '',
        email: '',
        password: '',
      },
    });
    dispatch(register({ name, email, password }));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitClick}>
      <FormStyled>
        <LabelStyled htmlFor="name">Username:</LabelStyled>
        <FieldStyled className="Field_mg" id="name" type="text" name="name" />
        {error && errorMessage === 'name in use' && (
          <ErrorStyled>{errorMessage}</ErrorStyled>
        )}
        <LabelStyled htmlFor="email">Email:</LabelStyled>
        <FieldStyled
          className="Field_mg"
          id="email"
          type="email"
          name="email"
        />
        {error && errorMessage === 'email in use' && (
          <ErrorStyled>{errorMessage}</ErrorStyled>
        )}
        <LabelStyled htmlFor="password">Password:</LabelStyled>
        <FieldStyled
          className="Field_mg"
          id="password"
          type="password"
          name="password"
        />
        <RegisterBtn type="submit">Register</RegisterBtn>
      </FormStyled>
    </Formik>
  );
};
