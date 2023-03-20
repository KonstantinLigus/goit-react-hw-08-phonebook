import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsLoggedIn, selectIsRefresh } from 'redux/auth/authSelectors';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistretionPage/RegistretionPage')
);
const LogInPage = lazy(() => import('../pages/LogInPage/LogInPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));

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
        <Route
          path="favorite"
          element={isLoggedIn ? <FavoritePage /> : <Navigate to={'/login'} />}
        />
      </Route>
    </Routes>
  );
};
