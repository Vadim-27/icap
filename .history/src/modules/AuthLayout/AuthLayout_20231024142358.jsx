import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { current } from '../../redux/auth/auth-operations';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthLayout;
