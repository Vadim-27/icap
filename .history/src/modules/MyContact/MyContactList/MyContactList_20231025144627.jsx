import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { fetchDeleteContacts } from 'redux/contacts/contacts-operations';
import { getAllContacts } from 'redux/contacts/contacts-selectors';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { fetchEditContacts } from 'redux/contacts/contacts-operations';
import { SvgSelector } from 'shared/components/SvgSelectors/SvgSelecters';
import initialState from './initialState';
import css from './myContactList.module.scss'

const ContactList = () => {
  const dispatch = useDispatch();

  const filterList = useSelector(getFilteredContacts);
  // const allContacts = useSelector(getAllContacts);

  const [filterListContact, setFilterListContact] = useState([]);
  const [editingContactId, setEditingContactId] = useState(null);
  const [state, setState] = useState({});

  console.log('state', state);
  const contactEdit = (id) => {
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
    setFilterListContact()
  },[])
  const handleSubmit = e => {


    dispatch(fetchEditContacts(state));


      // window.location.reload();

    // reset();
  };
  // const reset = () => {
  //   setState({ ...initialState });
  // };

  const handleChange = ( e) => {
    e.preventDefault();
    console.log('target', e.target);
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  // const contactDelete = id => {
  //   dispatch(fetchDeleteContacts(id));
  // };
  // const contactSave = (id, newName, newEmail) => {
  //   // Здесь можно отправить данные на сервер или в store
  //   dispatch(editContact(id, newName, newEmail));
  //   setEditingContactId(null); // Заканчиваем редактирование
  // };
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
            <form onSubmit={handleSubmit}>
              <input
                className={css.myListInput}
                // id={id}
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
              />
              <input
                className={css.myListInput}
                type="email"
                // id="email"
                name="email"
                value={state.email}
                onChange={handleChange}
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
                value={phone_number}
                onChange={handleChange}
              />
              <input
                className={css.myListInput}
                type="text"
                value={address}
                onChange={handleChange}
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
            onClick={() => handleSubmit()}

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
