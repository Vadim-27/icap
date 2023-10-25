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
  const contact = filterList.map(({ id, name, number }) => (
    <li className={css.contactList} key={id}>
      <div className={css.wrapperItem}>
        {id !== editingContactId ? (
          <>
            <span className={css.contactItem}>{name}:</span>
            <span className={css.contactItem}>{number}</span>
          </>
        ) : (
          <>
            <input
              type="text"
              value={name}
              // onChange={e => handleNameChange(e.target.value)}
            />
            <input
              type="text"
              value={number}
              // onChange={e => handleNumberChange(e.target.value)}
            />
          </>
        )}
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => contactDelete(id)}
      >
        <SvgSelector id="trash" />
      </button>
      {id !== editingContactId ? (
        <button
          className={css.btn}
          type="button"
          onClick={() => contactEdit(id)}
        >
          Edit
        </button>
      ) : (
        <button
          className={css.btn}
          type="button"
          // onClick={() => contactSave(id, newName, newNumber)}
        >
          Save
        </button>
      )}
      {id === editingContactId && (
        <button className={css.btn} type="button" onClick={contactCancelEdit}>
          Cancel
        </button>
      )}
    </li>
  ));

  return
  <>
     <ul>{contact}</ul>;
  </>
};

export default ContactList;
