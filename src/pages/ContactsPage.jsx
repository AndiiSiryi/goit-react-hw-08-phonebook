import { Container } from 'react-bootstrap';
import css from '../components/App.module.css';
const { default: ContactForm } = require('components/ContactForm/ContactForm');
const { default: ContactList } = require('components/ContactList/ContactList');
const { default: Filter } = require('components/Filter/Filter');
const { useEffect } = require('react');
const { useDispatch } = require('react-redux');
const { getContactsThunk } = require('redux/contacts/contacts-thunk');

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container
      className={`d-flex flex-column align-items-center justify-content-center ${css.centeredContainer}`}
    >
      <div className={css.contactForm}>
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
        <ContactForm />
      </div>

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Contacts;
