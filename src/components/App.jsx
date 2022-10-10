import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { LogInPage } from 'pages/LogInPage/LogInPage';
import { RegistrationPage } from 'pages/RegistretionPage/RegistretionPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsLoggedIn, selectIsRefresh } from 'redux/auth/authSelectors';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            isLoggedIn ? <Navigate to={'/contacts'} /> : <RegistrationPage />
          }
        />
        <Route
          path="login"
          element={isLoggedIn ? <Navigate to={'/contacts'} /> : <LogInPage />}
        />
        <Route
          path="contacts"
          element={isLoggedIn ? <ContactsPage /> : <Navigate to={'/login'} />}
        />
      </Route>
    </Routes>
  );
};
