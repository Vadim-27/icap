import css from "./button.module.scss"

const Button = ({ children, type = "submit" }) => {
    return (
      <button className={css.btn} type={type}>
        {children}
      </button>
    );
}

export default Button;
