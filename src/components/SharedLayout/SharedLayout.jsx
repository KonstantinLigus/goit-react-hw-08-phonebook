import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const SharedLayout = () => (
  <>
    <Navigation />
    <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
    </Suspense>
  </>
);
