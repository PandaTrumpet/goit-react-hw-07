import { useId } from "react";
import { findContact } from "../../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";
import css from "./SearchBox.module.css";
export default function SearchBox() {
  const searchContact = useId();
  const textFilter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(findContact(e.target.value));
    // console.log(e.target.value);
  };
  return (
    <div className={css.searchContainer}>
      <label htmlFor={searchContact}>Search contact</label>
      <input
        className={css.searchInput}
        type="text"
        id={searchContact}
        value={textFilter}
        onChange={handleChange}
      />
    </div>
  );
}
