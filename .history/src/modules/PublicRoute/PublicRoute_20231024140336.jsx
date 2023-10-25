import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "redux/auth/auth-selectors";

const PublicRouts = () => {
    const { isLogin } = useSelector(getAuth);

    if (!isLogin ) {
        return<p>...Loading</p>
    }
    if (isLogin && token) {
        return <Navigate to="/contacts"/>
    }

    return <Outlet/>;
}
export default PublicRouts;
