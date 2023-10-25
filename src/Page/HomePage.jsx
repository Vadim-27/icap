import css from "./page.module.scss"

const HomePage = () => {
    return (
      <div className={`${css.wrapper} container`}>
        <h1 className={css.title}>Application Phonebook</h1>
        <p className={css.text}>
          Welcome to the application Phonebook. To use the application, you need
          to register or log in.
        </p>
      </div>
    );
}

export default HomePage;