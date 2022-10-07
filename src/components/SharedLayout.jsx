import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

export const SharedLayout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);
