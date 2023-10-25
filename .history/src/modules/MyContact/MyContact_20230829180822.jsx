import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { fetchAllContacts } from 'redux/contacts/contacts-operations';

import ContactList from './MyContactList/MyContactList';
import ContactFilter from './MyContactFilter/MyContactFilter';
import MyContactForm from './MyContactForm/MyContactForm';
import css from './myContact.module.scss';

const MyContact = () => {
  const FilteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts())
  }, [dispatch])

  const isContacts = Boolean(FilteredContacts.length);

  return (
    <div className="container">
      <h2 className={css.title}>Phonebook</h2>
      <div className={css.markupComponent}>
        <div>
          <h3 className={css.titleSection}>Add contact</h3>
          <MyContactForm />
        </div>
        <div className={css.contactWrapper}>
          <h3 className={css.titleSection}>Contacts List</h3>
          <ContactFilter />

          {isContacts ? (
            <ContactList />
          ) : (
            <p className={css.message}>No saved contacts</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyContact;
