import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteContacts } from 'redux/contacts/contacts-operations';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { SvgSelector } from 'shared/components/SvgSelectors/SvgSelecters';
import css from './myContactList.module.scss'

const ContactList = () => {
  const dispatch = useDispatch();

  const filterList = useSelector(getFilteredContacts);

  const contactDelete = id => {
    dispatch(fetchDeleteContacts(id));
  };
  const contact = filterList.map(({ id, name, number }) => (
    <li className={css.contactList} key={id}>
      <div className={css.wrapperItem}>
        <span className={css.contactItem}>{name}:</span>
        <span className={css.contactItem}>{number}</span>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => contactDelete(id)}
      >
        <SvgSelector id="trash" />
      </button>
    </li>
  ));

  return <ul>{contact}</ul>;
};

export default ContactList;
