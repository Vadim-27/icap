import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';
import css from './myContactFilter.module.scss';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChenge = ({ currentTarget }) => {
    dispatch(setFilter(currentTarget.value));
  };

  return (
    <div  className={css.wrapper}>
      <label className={css.filterBox}>
        <p className={css.label}>Find contacts by name</p>

        <input
          className={css.myFormInput}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChenge}
          placeholder="Filter contact"
        />
      </label>
    </div>
  );
};

export default ContactFilter;
