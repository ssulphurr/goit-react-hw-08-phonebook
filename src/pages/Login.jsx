import css from '../components/Form/Form.module.css';
import Section from 'components/Section/Section';

export default function Login() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Section title="Log in">
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label} htmlFor="login">
          Login
        </label>
        <input className={css.input} type="email" id="login" />
        <label className={css.label} htmlFor="password">
          Password
        </label>
        <input className={css.input} type="password" id="password" />
        <button className={css.btn} type="submit">
          Log in
        </button>
      </form>
    </Section>
  );
}
