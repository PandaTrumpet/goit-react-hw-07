import { useId } from "react";
import { findContact } from "../../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";
export default function SearchBox() {
  const searchContact = useId();
  const textFilter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(findContact(e.target.value));
    // console.log(e.target.value);
  };
  return (
    <div>
      <label htmlFor={searchContact}>Search contact</label>
      <input
        type="text"
        id={searchContact}
        value={textFilter}
        onChange={handleChange}
      />
    </div>
  );
}
