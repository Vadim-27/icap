import fields from './fields';
import initialState from './initialState';
import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';
import useForm from 'shared/hooks/useForm';

import css from './loginForm.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { login, password } = state;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField value={login} handleChange={handleChange} {...fields.login} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
