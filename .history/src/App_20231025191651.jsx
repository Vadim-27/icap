import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';

const Navbar = lazy(() => import('modules/Navbar/Navbar'));
const ContactsPage = lazy(() => import('Page/ContactsPage'));

const HomePage = lazy(() => import('Page/HomePage'));
const LoginPage = lazy(() => import('Page/LoginPage'));

const NotFoundPage = lazy(() => import('Page/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>...Loading</p>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          

          <Route path="/login" element={<LoginPage />} />
          {/* </Route> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
