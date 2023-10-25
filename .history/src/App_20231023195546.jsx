import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';

const Navbar = lazy(() => import('modules/Navbar/Navbar'));
const ContactsPage = lazy(() => import('Page/ContactsPage'));

const HomePage = lazy(() => import('Page/HomePage'));
const LoginPage = lazy(() => import('Page/LoginPage'));
const PublicRouts = lazy(() => import('modules/PublicRoute/PublicRoute'));
const PrivateRouts = lazy(() => import('modules/PrivateRoute/PrivateRoute'));
const NotFoundPage = lazy(() => import('Page/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>...Loading</p>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PrivateRouts />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>

          <Route element={<PublicRouts />}>

            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
