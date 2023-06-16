import { useDispatch } from 'react-redux';
import css from '../components/Form/Form.module.css';
import Section from 'components/Section/Section';
import { register } from 'redux/auth/operations';

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <Section title="Register">
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label} htmlFor="username">
          Username
        </label>
        <input className={css.input} type="text" id="username" name="name" />
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
          Register
        </button>
      </form>
    </Section>
  );
}
