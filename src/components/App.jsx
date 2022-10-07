import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { Home } from 'pages/HomePage/HomePage';
import { LogInPage } from 'pages/LogInPage/LogInPage';
import { RegistrationPage } from 'pages/RegistretionPage/RegistretionPage';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
}
