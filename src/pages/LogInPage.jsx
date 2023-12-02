import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import css from '../components/App.module.css';
import Notiflix from 'notiflix';
const { useState } = require('react');
const { useDispatch } = require('react-redux');
const { logInThunk } = require('redux/users/users-thunk');

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else {
      throw new Error();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logInThunk({ email, password }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(() => {
        Notiflix.Notify.failure('form filled in incorrectly');
      });
  };

  return (
    <Container md={{ span: 6, offset: 3 }}>
      <Form onSubmit={handleSubmit} className={`${css.form} d-flex flex-row`}>
        <img
          style={{
            width: '240px',
            height: '240px',
            display: 'block',
            marginRight: '30px',
          }}
          src="https://cdn.pixabay.com/photo/2017/06/22/10/11/icon-2430270_1280.png"
          alt="Phonebook"
        />
        <div>
          <h3>Log in to Phonebook</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="email"
              value={email}
              type="email"
              placeholder="Your e-mail"
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="password"
              name="password"
              value={password}
              placeholder="Your password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className={css.formButton}>
            Log in
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default LogInPage;
