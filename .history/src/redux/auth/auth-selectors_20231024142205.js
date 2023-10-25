export const isUserLogin = ({ auth }) => auth.isLogin;
export const getAuth = ({ auth }) => {
    const { isLogin } = auth;
    return { isLogin };
}
export const getUser = ({ auth }) => auth.user;

