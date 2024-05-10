import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactSlice";
import css from "./ContactList.module.css";
// import { selectFilter } from "../../redux/filterSlice";
export default function ContactList() {
  // const contactSelector = useSelector(selectContacts);
  // const findContact = useSelector(selectFilter);

  const filterAllContacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul className={css.contactList}>
        {filterAllContacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
