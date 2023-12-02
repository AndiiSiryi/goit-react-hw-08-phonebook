import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import notiflix from 'notiflix';
import css from '../components/App.module.css';
const { useState } = require('react');
const { useDispatch } = require('react-redux');
const { signUpThunk } = require('redux/users/users-thunk');

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else {
      throw new Error();
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(signUpThunk({ name, email, password }))
      .unwrap()
      .then(() => {
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(() => {
        notiflix.Notify.failure(
          'The user with this email is already registered'
        );
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
          <h3>Create your account</h3>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="name"
              value={name}
              type="text"
              placeholder="Enter User Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="email"
              value={email}
              type="email"
              placeholder="Enter email"
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
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default SignUpPage;
