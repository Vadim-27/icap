import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchDeleteContacts } from 'redux/contacts/contacts-operations';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { SvgSelector } from 'shared/components/SvgSelectors/SvgSelecters';
import css from './myContactList.module.scss'

const ContactList = () => {
  const dispatch = useDispatch();

  const filterList = useSelector(getFilteredContacts);

  const [editingContactId, setEditingContactId] = useState(null);
  const contactEdit = id => {
    setEditingContactId(id);
  };
   const contactCancelEdit = () => {
     setEditingContactId(null); // Отмена редактирования
   };

  const contactDelete = id => {
    dispatch(fetchDeleteContacts(id));
  };
   const contactRemove = id => {
     dispatch();
   };
  const contact = filterList.map(
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
            <>
              <input
                className={css.myListInput}
                type="text"
                value={name}
                // onChange={e => handleNameChange(e.target.value)}
              />
              <input
                className={css.myListInput}
                type="email"
                value={email}
                // onChange={e => handleNumberChange(e.target.value)}
              />
              <input
                className={css.myListInput}
                type="text"
                value={birthday_date}
                // onChange={e => handleNameChange(e.target.value)}
              />
              <input
                type="text"
                value={phone_number}
                // onChange={e => handleNumberChange(e.target.value)}
              />
              <input
                type="text"
                value={address}
                // onChange={e => handleNumberChange(e.target.value)}
              />
            </>
          )}
        </div>
        {/* <button
          className={css.btn}
          type="button"
          onClick={() => contactDelete(id)}
        >
          <SvgSelector id="trash" />
        </button> */}
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
            type="button"
            // onClick={() => contactSave(id, newName, newNumber)}
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
        <li className={css.contactItemHederTable}>Phone number phone</li>
        <li className={css.contactItemHederTable}>Address</li>
      </ul>
      <ul>{contact}</ul>;
    </>
  );
};

export default ContactList;
