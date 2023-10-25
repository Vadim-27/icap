import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "redux/auth/auth-selectors";

const PrivateRouts = () => {
    const { isLogin,  } = useSelector(getAuth);
if (!isLogin && token) {
  return <p>...Loading</p>;
}

if (!isLogin && !token) {
  return <Navigate to="/login" />;
}

    return <Outlet/>
}
export default PrivateRouts;
