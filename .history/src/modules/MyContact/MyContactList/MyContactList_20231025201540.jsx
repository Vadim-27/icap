import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { fetchDeleteContacts } from 'redux/contacts/contacts-operations';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { fetchEditContacts } from 'redux/contacts/contacts-operations';
import { SvgSelector } from 'shared/components/SvgSelectors/SvgSelecters';

import css from './myContactList.module.scss';

const ContactList = () => {
  const dispatch = useDispatch();

  const filterList = useSelector(getFilteredContacts);

  console.log('filterList', filterList);

  const [filterListContact, setFilterListContact] = useState([]);
  const [editingContactId, setEditingContactId] = useState(null);
  const [state, setState] = useState({});

  console.log('state', state);
  const contactEdit = id => {
    const editedContact = filterList.find(contact => contact.id === id);
    setEditingContactId(id);
    setState({
      id: editedContact.id,
      name: editedContact.name,
      email: editedContact.email,
      birthday_date: editedContact.birthday_date,
      phone_number: editedContact.phone_number,
      address: editedContact.address,
    });
  };
  const contactCancelEdit = () => {
    setEditingContactId(null);
  };

  useEffect(() => {
    setFilterListContact(filterList);
  }, [filterList]);

  const handleSubmit = id => {
    dispatch(fetchEditContacts(state));
  };

  const handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const contact = filterListContact.map(
    ({ id, name, email, birthday_date, phone_number, address }) => (
      <li className={css.contactList} key={id}>
        <div className={css.wrapperItem}>
          {id !== editingContactId ? (
            <>
              <span className={css.contactItem}>{name}</span>
              <span className={css.contactItem}>{email}</span>
              <span className={css.contactItem}>{birthday_date}</span>
              <span className={css.contactItem}>{phone_number}</span>
              <span className={css.contactItem}>{address}</span>
            </>
          ) : (
            <form className='' onSubmit={handleSubmit}>
              <input
                className={css.myListInput}
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
                pattern=".{1,255}"
                title="Name"
              />
              <input
                className={css.myListInput}
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                pattern=".{1,254}"
                title="email"
              />
              <input
                className={css.myListInput}
                type="text"
                name="birthday_date"
                value={state.birthday_date}
                onChange={handleChange}
              />
              <input
                className={css.myListInput}
                type="text"
                name="phone_number"
                value={phone_number}
                onChange={handleChange}
                pattern=".{1,20}"
                title="Phone number"
              />
              <input
                className={css.myListInput}
                type="text"
                name="address"
                value={address}
                onChange={handleChange}
                minLength={1}
                title="Address"
              />
            </form>
          )}
        </div>

        {id !== editingContactId ? (
          <button
            className={css.btn}
            type="button"
            onClick={() => contactEdit(id)}
          >
            {/* Edit */}
            <SvgSelector id="Edit" />
          </button>
        ) : (
          <button
            className={css.btn}
            type="submit"
            onClick={e => {
              e.preventDefault();
              contactCancelEdit();
              handleSubmit(id);
            }}
          >
            <SvgSelector id="Save" />
            {/* Save */}
          </button>
        )}
        {id === editingContactId && (
          <button className={css.btn} type="button" onClick={contactCancelEdit}>
            {/* Cancel */}
            <SvgSelector id="Cancel" />
          </button>
        )}
      </li>
    )
  );

  return (
    <>
      <ul className={css.hederTableList}>
        <li className={css.contactItemHederTable}>Name</li>
        <li className={css.contactItemHederTable}>Email</li>
        <li className={css.contactItemHederTable}>Birthday date</li>
        <li className={css.contactItemHederTable}>Phone number</li>
        <li className={css.contactItemHederTable}>Address</li>
      </ul>
      <ul>{contact}</ul>;
    </>
  );
};

export default ContactList;
