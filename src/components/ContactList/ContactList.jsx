import css from './ContactList.module.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/filter/filter-selector';
import ContactItem from './ContactItem';
import { getContactsThunk } from 'redux/contacts/contacts-thunk';
import { Loader } from 'components/Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        await dispatch(getContactsThunk());
      } catch (error) {
        alert(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchContact();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader className={css.loader} />
      ) : (
        <ul className={css.list}>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                number={number}
                contactId={id}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};
export default ContactList;
