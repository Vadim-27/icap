import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "redux/auth/auth-selectors";

const PrivateRouts = () => {
    const { isLogin  } = useSelector(getAuth);


if (!isLogin ) {
  return <Navigate to="/login" />;
}

    return <Outlet/>
}
export default PrivateRouts;