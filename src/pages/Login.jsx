import { useDispatch } from 'react-redux';
import css from '../components/Form/Form.module.css';
import Section from 'components/Section/Section';
import { logIn } from 'redux/auth/operations';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    dispatch(
      logIn({
        email: form.email.value,
        password: form.password.value,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <Section title="Log in">
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label} htmlFor="email">
          Email
        </label>
        <input className={css.input} type="email" id="email" name="email" />
        <label className={css.label} htmlFor="password">
          Password
        </label>
        <input
          className={css.input}
          type="password"
          id="password"
          name="password"
        />
        <button className={css.btn} type="submit">
          Log in
        </button>
      </form>
    </Section>
  );
}
