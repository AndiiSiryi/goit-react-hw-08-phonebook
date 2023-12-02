import { Link } from 'react-router-dom';
import css from '../App.module.css';
import UserInfo from 'components/UserInfo/UserInfo';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/users/users-selector';

const Navigation = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        fixed="top"
        style={{ height: '90px', marginBottom: '30px' }}
      >
        <Container>
          <Navbar.Brand href="#home">PhoneBook</Navbar.Brand>

          <Nav className="mr-auto">
            {token && (
              <Nav.Link to="/contacts" as={Link}>
                Contacts
              </Nav.Link>
            )}
          </Nav>
          <Nav className="ms-auto">
            {!token && (
              <>
                <Nav.Link to="/signup" as={Link}>
                  Sign Up
                </Nav.Link>
                <Nav.Link to="/login" as={Link}>
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
          <UserInfo />
        </Container>
      </Navbar>
      <Container style={{ marginTop: '120px' }}>
        <h1 className={css.title}>Welcome to PhoneBook</h1>
      </Container>
    </>
  );
};

export default Navigation;
