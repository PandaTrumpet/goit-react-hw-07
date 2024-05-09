import { useId } from "react";
// import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
export default function ContactFrom() {
  const name = useId();
  const number = useId();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;

    const allValue = {
      name: nameValue,
      number: numberValue,
    };
    dispatch(addContact(allValue));
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={name}>Name</label>
        <input type="text" id={name} name="name" />
        <label htmlFor={number}>Number</label>
        <input type="text" id={number} name="number" />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
