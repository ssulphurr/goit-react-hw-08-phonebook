import css from '../components/Form/Form.module.css';
import Section from 'components/Section/Section';

export default function Register() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Section title="Register">
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label} htmlFor="username">
          Username
        </label>
        <input className={css.input} type="text" id="username" />
        <label className={css.label} htmlFor="login">
          Login
        </label>
        <input className={css.input} type="email" id="login" />
        <label className={css.label} htmlFor="password">
          Password
        </label>
        <input className={css.input} type="password" id="password" />
        <button className={css.btn} type="submit">
          Register
        </button>
      </form>
    </Section>
  );
}
