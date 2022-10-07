import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { LogInPage } from 'pages/LogInPage/LogInPage';
import { RegistrationPage } from 'pages/RegistretionPage/RegistretionPage';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

export const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="register" element={<RegistrationPage />} />
      <Route path="login" element={<LogInPage />} />
      <Route path="contacts" element={<ContactsPage />} />
    </Route>
  </Routes>
);
